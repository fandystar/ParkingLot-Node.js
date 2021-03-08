
const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')

const {log} =console

class ParkingLot {   // base class
  constructor() {
    this.parkingSlots=new Array()  // arrray for parking slots 
  }  
  
  createParkingLot(parkingLotCapacity) {  
    if (!parkingLotCapacity) {throw new Error('Please provide parking lot capacity')}
    if (isNaN(+parkingLotCapacity) || (+parkingLotCapacity<=0)) {throw new Error('Please provide parking lot capacity with a postive number greater than zero')}
    this.parkingSlots=new Array(+parkingLotCapacity).fill('available')
    return `Created parking lot with ${parkingLotCapacity} slots`
  }
  
  carPark(carNumber) {
    if (this.parkingSlots.length===0) {throw new Error('Sorry, parking lot is not created yet'  )}
    if(!carNumber) {throw new Error( 'Please provide car number')}
    let index =  +this.parkingSlots.findIndex(slot=>slot==='available')
    if( index !== -1) {
        let car =new Car(carNumber)
        this.parkingSlots[index] = car.carNumber
        return `Allocated slot number : ${++index}`
    } else {
        throw new Error('Sorry, parking lot is full')
    }
  }

  carLeave(carNumber,parkingTime){
    if(!carNumber) {throw new Error('Please provide car number & parkingTime')}
    if(!parkingTime) {throw new Error('Please provide parkingTime')}
    if (isNaN(+parkingTime) || (+parkingTime <= 0)) {throw new Error('Please provide parking time with a positive number greater than or equal to 0')}
    let index=+this.parkingSlots.findIndex(slot=>slot===carNumber)
    if (index ===-1) {
      {throw new Error( `Registration number ${carNumber} not found`)}
    } else {
      this.parkingSlots[index] = 'available'
    return `Registration number ${carNumber} with Slot Number ${++index} is free with Charge ${parkingCharge(parkingTime)}`
    }
  } 
  
  parkingSlotsStatus(){
    if(+this.parkingSlots.findIndex(slot=>slot!=='available') === -1) {
      throw new Error('Sorry, parking lot is empty')
    } else {  let arr =[] 
      arr.push('Slot No. Registration No.') 
      this.parkingSlots.forEach((slot,index)=>{
          if (slot!=='available') {
          let number = index+1
          arr.push(number + '.  ' + this.parkingSlots[index]) }
        })
      return arr }
  }
  
}
module.exports=ParkingLot

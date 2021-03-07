
const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')

const {log} =console

class ParkingLot {   // base class
  constructor() {
    this.parkingSlots=new Array()  // arrray for parking slots 
  }  
  
  createParkingLot(parkingLotCapacity) {  
    if (+parkingLotCapacity<=0) {throw new Error( 'Minimum one slot is required to create parking lot' )}
    this.parkingSlots=new Array(+parkingLotCapacity).fill('available')
    return `Created parking lot with ${parkingLotCapacity} slots`
  }
  
  carPark(carNumber) {
    if (this.parkingSlots.length===0) {throw new Error('Sorry, parking lot is not created yet'  )}
    if(!carNumber) {throw new Error( 'Car park : Please provide car number')}
    let totalAvailableSlots=this.parkingSlots.filter(slot=>slot ==='available').length
    if (totalAvailableSlots>0) {
        let index=this.parkingSlots.findIndex(slot=>slot==='available')
        let car =new Car(carNumber)
        this.parkingSlots[index] = car.carNumber
        return `Allocated slot number : ${++index}`
    } else {
        throw new Error('Sorry, parking lot is full')
    }
  }

  carLeave(carNumber,parkingTime){
    if(!carNumber) {throw new Error('Car leave : Please provide car number & parkinngTime')}
    if(!parkingTime) {throw new Error('Car leave : Please provide parkinngTime')}
    if (!/[0-9]/.test(parkingTime) && parkingTime < 0) {throw new Error('Car leave : Please provide parking time with positive number >= 0')}
    let index=+this.parkingSlots.findIndex(slot=>slot===carNumber)
    if (index ===-1) {throw new Error( `Registration number ${carNumber} not found`)}
    this.parkingSlots[index] = 'available'
    return `Registration number ${carNumber} with Slot Number ${++index} is free with Charge ${parkingCharge(parkingTime)}`
  } 
  
  parkingSlotsStatus(){
    let arr =[] 
    arr.push('Slot No. Registration No.') 
    this.parkingSlots.forEach((slot,index)=>{
          if (slot!=='available') {
          let number = index+1
          arr.push(number + '.  ' + this.parkingSlots[index]) }
        })
    if (arr.length === 0 ) {throw new Error('Sorry, parking lot is empty')}  
    return arr
  }
}
module.exports=ParkingLot


const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')

const {log} =console

class ParkingLot {   // base class
  constructor() {
    this.slots=new Array()  // arrray for parking slots 
  }  
  
  create(capacity) {  
    if (!capacity) {throw new Error('Please capacity')}
    if (isNaN(+capacity) || (+capacity<=0)) {throw new Error('Please capacity with a postive number greater than zero')}
    this.slots=new Array(+capacity).fill('available')
    return `Created parking lot with ${capacity} slots`
  }
  
  carPark(numberPlate) {
    if (this.slots.length===0) {throw new Error('Sorry, parking lot is not created yet'  )}
    if(!numberPlate) {throw new Error( 'Please provide number plate')}
    let index =  +this.slots.findIndex(slot=>slot==='available')
    if( index !== -1) {
        let car =new Car(numberPlate)
        this.slots[index] = car.numberPlate
        return `Allocated slot number : ${++index}`
    } else {
        throw new Error('Sorry, parking lot is full')
    }
  }

  carLeave(numberPlate,hours){
    if(!numberPlate) {throw new Error('Please provide number plate & hours')}
    if(!hours) {throw new Error('Please provide hours')}
    if (isNaN(+hours) || (+hours <= 0)) {throw new Error('Please provide hours with a positive number greater than or equal to 0')}
    let index=+this.slots.findIndex(slot=>slot===numberPlate)
    if (index ===-1) {
      {throw new Error( `Registration number ${numberPlate} not found`)}
    } else {
      this.slots[index] = 'available'
    return `Registration number ${numberPlate} with Slot Number ${++index} is free with Charge ${parkingCharge(hours)}`
    }
  } 
  
  slotsStatus(){
    if(+this.slots.findIndex(slot=>slot!=='available') === -1) {
      throw new Error('Sorry, parking lot is empty')
    } else {  let arr =[] 
      arr.push('Slot No. Registration No.') 
      this.slots.forEach((slot,index)=>{
          if (slot!=='available') {
          let number = index+1
          arr.push(number + '.  ' + this.slots[index]) }
        })
      return arr }
  }
  
}
module.exports=ParkingLot

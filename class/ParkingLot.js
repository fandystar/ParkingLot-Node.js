
const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')


function ParkingLot(slots=[]) {
    this.slots=slots
}

const {log} =console

ParkingLot.prototype.setSlotsCapacity  = (slotsCapacity) =>{
    this.slotsCapacity=+slotsCapacity
    this.slots=new Array(this.slotsCapacity).fill('free')
    return `Created parking lot with ${this.slotsCapacity} slots`
  }


ParkingLot.prototype.carPark = (carNumber) => {
  let totalFreeSlots=this.slots.filter(slot=>slot ==='free').length
  if (totalFreeSlots>0) {
      let index=this.slots.findIndex(slot=>slot==='free')
      let car =new Car(carNumber)
      this.slots[index] = car.Number
      return `Allocated slot number : ${++index}`
    } else {
      return 'Sorry, parking lot is full'
    }
  }

ParkingLot.prototype.carLeave = (carNumber,hours) => {
  let index=+this.slots.findIndex(slot=>slot===carNumber)
  if (index ===-1) return `Registration number $  {carNumber} not found`
  this.slots[index] = 'free'
  return `Registration number ${carNumber} with Slot Number ${++index} is free with Charge ${parkingCharge(hours)}`
} 
  
ParkingLot.prototype.getSlotsStatus=()=>{
    let arr =[] 
    arr.push('Slot No. Registration No.') 
    this.slots.forEach((slot,index)=>{
          if (slot!=='free') {
          let number = index+1
          arr.push(number + '.  ' + this.slots[index]) }
        })
    return arr
} 

module.exports=ParkingLot

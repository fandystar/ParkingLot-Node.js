
const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')

const {log} =console

class ParkingLot {
  constructor(slots=[]) {
    this.slots=slots
  }  
  
  setSlotsCapacity(slotsCapacity) {
    this.slotsCapacity=+slotsCapacity
    this.slots=new Array(this.slotsCapacity).fill('available')
    return `Created parking lot with ${this.slotsCapacity} slots`
  }
  
  carPark(carNumber) {
    if (this.slots.length===0) return 'Sorry, parking lot is not created yet'  
    let totalFreeSlots=this.slots.filter(slot=>slot ==='available').length
    if (totalFreeSlots>0) {
        let index=this.slots.findIndex(slot=>slot==='available')
        let car =new Car(carNumber)
        this.slots[index] = car.carNumber
        return `Allocated slot number : ${++index}`
      } else {
        return 'Sorry, parking lot is full'
      }
    }

  carLeave(carNumber,hours){
    let index=+this.slots.findIndex(slot=>slot===carNumber)
    if (index ===-1) return `Registration number ${carNumber} not found`
    this.slots[index] = 'available'
    return `Registration number ${carNumber} with Slot Number ${++index} is free with Charge ${parkingCharge(hours)}`
  } 
  
  getSlotsStatus(){
    let arr =[] 
    arr.push('Slot No. Registration No.') 
    this.slots.forEach((slot,index)=>{
          if (slot!=='available') {
          let number = index+1
          arr.push(number + '.  ' + this.slots[index]) }
        })
    return arr
  } 

}

module.exports=ParkingLot

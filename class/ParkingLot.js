
const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')

const {log} =console

class ParkingLot {   // base class
  constructor() {
    this.parkingSlots=new Array()  // arrray for parking slots 
    this.parkingLotCapacity=0 
  }  
  
  // input  = user's input via terminal
  createParkingLot(input) {  
    
    this.parkingLotCapacity=+input.split(' ')[1]
    if (this.parkingLotCapacity<=0) throw new Error( 'Minimum one slot is required to create parking lot' )
    this.parkingSlots=new Array(this.parkingLotCapacity).fill('available')
    return this.parkingLotCapacity
  
  }
  
  carPark(input) {
    
    let carNumber = input.split(' ')[1]
    
    if (this.parkingSlots.length===0) throw new Error('Sorry, parking lot is not created yet'  )
    if(!carNumber) throw new Error( 'Car park : Please provide car number')
    let totalAvailableSlots=this.parkingSlots.filter(slot=>slot ==='available').length
    if (totalAvailableSlots>0) {
        let index=this.parkingSlots.findIndex(slot=>slot==='available')
        let car =new Car(carNumber)
        this.parkingSlots[index] = car.carNumber
        return ++index
    } else {
        throw new Error('Sorry, parking lot is full')
      }
  
    }

  carLeave(input){
    
    let carNumber = input.split(' ')[1]
    let parkingTime = +input.split(' ')[2]
    
    if(!carNumber) {throw new Error('Car leave : Please provide car number & parkinngTime')}
    if(!parkingTime) {throw new Error('Car leave : Please provide parkinngTime')}
    if (!/[0-9]/.test(parkingTime) && parkingTime < 0) throw new Error('Car leave : Please provide parking time with positive number >= 0')
    let index=+this.parkingSlots.findIndex(slot=>slot===carNumber)
    if (index ===-1) throw new Error( `Registration number ${carNumber} not found`)
    this.parkingSlots[index] = 'available'
    return [++index,parkingCharge(parkingTime)]
  
  } 
  
  parkingSlotsStatus(){
    
    let arr =[] 
    
    arr.push('Slot No. Registration No.') 
    this.parkingSlots.forEach((slot,index)=>{
          if (slot!=='available') {
          let number = index+1
          arr.push(number + '.  ' + this.parkingSlots[index]) }
        })
    return arr
  } 

}

module.exports=ParkingLot

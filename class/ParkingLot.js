
const Car= require('./Car')
const parkingCharge = require('../utils/parkingCharge')


function ParkingLot(slots=[]) {
    this.slots=slots
}

ParkingLot.prototype.setSlotsCapacity =function (slotsCapacity) {
    this.slotsCapacity=slotsCapacity
    for (let k=1 ;k<=this.slotsCapacity;k++) 
        this.slots.push({'No':k,'Reg':'free'})
    return `Created parking lot with ${this.slotsCapacity} slots`
  }


ParkingLot.prototype.carPark = function(carNumber) {
  let totalFree=this.slots.filter(item=>item.Reg==='free').length
  if (totalFree>0) {
      for (let k=0 ;k<=this.slotsCapacity-1;k++) { 
        if (this.slots[k].Reg ==='free') {
            let car =new Car(carNumber)
            this.slots[k].Reg = car.Number
            return `Allocated slot number : ${++k}`
        } 
      }
    } else {
        return 'Sorry, parking lot is full'
    }
}

ParkingLot.prototype.carLeave = function(carNumber,hours) {
  for (let k=0 ;k<=this.slotsCapacity-1;k++) { 
    if (this.slots[k].Reg === carNumber) {
        this.slots[k].Reg = 'free'
        return `Registration number ${carNumber} with Slot Number ${this.slots[k].No} is free with Charge ${parkingCharge(hours)}`
    } 
  }
  return `Registration number ${carNumber} not found`
  
}

ParkingLot.prototype.getCarsStatus=function(){
      let str = this.slots.filter((item) => item.Reg!=='free') 
      let join=''
      for (let k=0;k<=str.length-1;k++) {
          if (k!==str.length-1) 
            join = join + str[k].No +'\t'+str[k].Reg+'\n'
          else 
            join = join + str[k].No +'\t'+str[k].Reg
      }
      return `Slot No.${'\t'}Registration No.${'\n'}${join}`  
}

module.exports=ParkingLot


const parkingCharge = (parkingTime) => {
    return (parkingTime<=2?10:10+(parkingTime-2)*10)
  }

module.exports =parkingCharge  
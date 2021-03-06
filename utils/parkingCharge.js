
const parkingCharge = (hours) => {
    return (hours<=2?10:10+(hours-2)*10)
  }

module.exports =parkingCharge  
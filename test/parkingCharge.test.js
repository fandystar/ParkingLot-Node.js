
let parkingCharge = require('../utils/parkingCharge')

describe('test parkingCharge where hours <= 2', function () {
    test('parkingCharge', function (done) {
       expect(parkingCharge(2)).toBe(10)
       done() 
    })
})

describe('test parkingCharge where hours > 2', function () {
    test('parkingCharge', function (done) {
       expect(parkingCharge(6)).toBe(50)
       done() 
    })
})
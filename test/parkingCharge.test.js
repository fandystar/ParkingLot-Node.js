
let parkingCharge = require('../utils/parkingCharge')

describe('test parkingCharge', function () {
    test('parkingCharge', function (done) {
       expect(parkingCharge(2)).toBe(10)
       done() 
    })
})

describe('test parkingCharge', function () {
    test('parkingCharge', function (done) {
       expect(parkingCharge(4)).toBe(30)
       done() 
    })
})

describe('test parkingCharge', function () {
    test('parkingCharge', function (done) {
       expect(parkingCharge(6)).toBe(50)
       done() 
    })
})
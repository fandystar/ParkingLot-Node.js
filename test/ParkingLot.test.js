const {clear,log:print} =console

clear()

const ParkingLot = require('../class/ParkingLot')
let parking= new ParkingLot()
        
describe('test set SlotsCapacity to be 6', function () {
    test('setSlotsCapacity', function (done) {
        expect(parking.setSlotsCapacity(6)
        ).toBe('Created parking lot with 6 slots')
        done() 
    })
})

describe('test carPark slot 1', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-1234')
        ).toBe('Allocated slot number : 1')
        done() 
    })
})

describe('test carPark slot 2', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-9999')
        ).toBe('Allocated slot number : 2')
        done() 
    })
})

describe('test carPark slot 3', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-BB-0001')
        ).toBe('Allocated slot number : 3')
        done() 
    })
})

describe('test carPark slot 4', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-7777')
        ).toBe('Allocated slot number : 4')
        done() 
    })
})

describe('test carPark slot 5', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-2701')
        ).toBe('Allocated slot number : 5')
        done() 
    })
})

describe('test carPark slot 6', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-3141')
        ).toBe('Allocated slot number : 6')
        done() 
    })
})

describe('test carLeave', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-HH-3141',4)
        ).toBe('Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30')
        done() 
    })
})

describe('test getSlotsStatus 6 slots', function () {
    test('getSlotsStatus', function (done) {
        expect(parking.getSlotsStatus().length
        ).toBe(6)
        done() 
    })
})

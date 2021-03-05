const {clear,log:print} =console

clear()

const ParkingLot = require('../class/ParkingLot')
let parking= new ParkingLot()
        
describe('test setSlotsCapacity', function () {
    test('setSlotsCapacity', function (done) {
        expect(parking.setSlotsCapacity(6)
        ).toBe('Created parking lot with 6 slots')
        done() 
    })
})

describe('test carPark', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-1234')
        ).toBe('Allocated slot number : 1')
        done() 
    })
})

describe('test carPark', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-9999')
        ).toBe('Allocated slot number : 2')
        done() 
    })
})

describe('test carPark', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-BB-0001')
        ).toBe('Allocated slot number : 3')
        done() 
    })
})

describe('test carPark', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-7777')
        ).toBe('Allocated slot number : 4')
        done() 
    })
})

describe('test carPark', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-2701')
        ).toBe('Allocated slot number : 5')
        done() 
    })
})

describe('test carPark', function () {
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

describe('test getCarsStatus', function () {
    test('getCarsStatus', function (done) {
        expect(parking.getCarsStatus()
        ).toBe('Slot No.'+'\t'+'Registration No.'+'\n'
            +'1'+'\t'+'KA-01-HH-1234'
            +'2'+'\t'+'KA-01-HH-9999'
            +'3'+'\t'+'KA-01-BB-0001'
            +'4'+'\t'+'KA-01-HH-7777'
            +'5'+'\t'+'KA-01-HH-2701'
        )
        done() 
    })
})

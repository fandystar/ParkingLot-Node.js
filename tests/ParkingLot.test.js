const {clear,log:print} =console

clear()

const ParkingLot = require('../class/ParkingLot')
let parking= new ParkingLot()

describe('car park but parking lot is not created ', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-1234')
        ).toBe('Sorry, parking lot is not created yet')
        done() 
    })
})        

describe('set slots Capacity to be 6', function () {
    test('setSlotsCapacity', function (done) {
        expect(parking.setSlotsCapacity(6)
        ).toBe('Created parking lot with 6 slots')
        done() 
    })
})

describe('car park in slot 1', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-1234')
        ).toBe('Allocated slot number : 1')
        done() 
    })
})

describe('car park in slot 2', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-9999')
        ).toBe('Allocated slot number : 2')
        done() 
    })
})

describe('car park in slot 3', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-BB-0001')
        ).toBe('Allocated slot number : 3')
        done() 
    })
})

describe('car park in slot 4', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-7777')
        ).toBe('Allocated slot number : 4')
        done() 
    })
})

describe('car park in slot 5', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-2701')
        ).toBe('Allocated slot number : 5')
        done() 
    })
})

describe('car park in slot 6', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-3141')
        ).toBe('Allocated slot number : 6')
        done() 
    })
})

describe('car leave from slot 6', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-HH-3141',4)
        ).toBe('Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30')
        done() 
    })
})

describe('get slots status length which are 5 slots + 1 header  = 6 ', function () {
    test('getSlotsStatus', function (done) {
        expect(parking.getSlotsStatus().length
        ).toBe(6)
        done() 
    })
})

describe('car park in slot 6', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-P-333')
        ).toBe('Allocated slot number : 6')
        done() 
    })
})

describe('car park if slot is full ', function () {
    test('carPark', function (done) {
        expect(parking.carPark('DL-12-AA-9999')
        ).toBe('Sorry, parking lot is full')
        done() 
    })
})

describe('car leave from slot 1', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-HH-1234',4)
        ).toBe('Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30')
        done() 
    })
})

describe('car leave from slot 3', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-BB-0001',6)
        ).toBe('Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50')
        done() 
    })
})

describe('car leave if car number not registered', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('DL-12-AA-9999',2)
        ).toBe('Registration number DL-12-AA-9999 not found')
        done() 
    })
})

describe('car park in slot 1', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-09-HH-0987')
        ).toBe('Allocated slot number : 1')
        done() 
    })
})

describe('car park in slot 3', function () {
    test('carPark', function (done) {
        expect(parking.carPark('CA-09-IO-1111')
        ).toBe('Allocated slot number : 3')
        done() 
    })
})

describe('car park if slot is full ', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-09-HH-0123')
        ).toBe('Sorry, parking lot is full')
        done() 
    })
})

describe('get slots status length which are 6 slots + 1 header  = 7 ', function () {
    test('getSlotsStatus', function (done) {
        expect(parking.getSlotsStatus().length
        ).toBe(7)
        done() 
    })
})

















































const {clear,log:print} =console

clear()

const ParkingLot = require('../class/ParkingLot')
let parking= new ParkingLot()


describe('Parking lot is not created ', () => {
    test('carPark', () => {
        expect(()=>{parking.carPark('KA-01-HH-1234')}).toThrow(Error)
    })
})

describe('Please provide parking lot capacity with a postive number greater than zero', () => {
    test('createParkinglot', () => {
        expect(()=>{parking.createParkingLot('saya')}).toThrow(Error)
    })
})


describe('Created parking lot with 6 slots', function () {
    test('createParkingLot', function (done) {
        expect(parking.createParkingLot(6)
        ).toBe('Created parking lot with 6 slots')
        done() 
    })
})

describe('Sorry, parking lot is empty', () => {
    test('status', () => {
        expect(()=>{parking.parkingSlotsStatus()}).toThrow(Error)
    })
})

describe( 'Car park : Please provide car number', () => {
    test('carPark', () => {
        expect(()=>{parking.carPark()}).toThrow(Error)
    })
})

describe( 'Car leave : Please provide parkingTime', () => {
    test('carPark', () => {
        expect(()=>{parking.carLeave('KA-01-HH-1234')}).toThrow(Error)
    })
})

describe( 'Car leave : Please provide car number & parkingTime', () => {
    test('carPark', () => {
        expect(()=>{parking.carLeave()}).toThrow(Error)
    })
})

describe('Allocated slot number : 1', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-1234')
        ).toBe('Allocated slot number : 1')
        done() 
    })
})

describe('Allocated slot number : 2', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-9999')
        ).toBe('Allocated slot number : 2')
        done() 
    })
})

describe('Allocated slot number : 3', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-BB-0001')
        ).toBe('Allocated slot number : 3')
        done() 
    })
})

describe('Allocated slot number : 4', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-7777')
        ).toBe('Allocated slot number : 4')
        done() 
    })
})

describe('Allocated slot number : 5', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-2701')
        ).toBe('Allocated slot number : 5')
        done() 
    })
})

describe('Allocated slot number : 6', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-HH-3141')
        ).toBe('Allocated slot number : 6')
        done() 
    })
})

describe("Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30", function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-HH-3141',4)
        ).toBe("Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30")
        done() 
    })
})

describe('get slots status length which are 5 slots + 1 header  = 6 ', function () {
    test('parkingSlotsStatus', function (done) {
        expect(parking.parkingSlotsStatus().length
        ).toBe(6)
        done() 
    })
})

describe('Allocated slot number : 6', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-01-P-333')
        ).toBe('Allocated slot number : 6')
        done() 
    })
})

describe(' Sorry, parking lot is full', () => {
    test('carPark', () => {
        expect(()=>{parking.carPark('KA-01-HH-1234')}).toThrow(Error)
    })
})

describe('car leave from slot 1', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-HH-1234',4)
        ).toBe( "Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30")
        done() 
    })
})

describe('car leave from slot 3', function () {
    test('carLeave', function (done) {
        expect(parking.carLeave('KA-01-BB-0001',6)
        ).toBe("Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50")
        done() 
    })
})


describe('car leave if car number not registered', () => {
    test('carLeave', () => {
        expect(()=>{parking.carLeave('DL-12-AA-9999',2)}).toThrow(Error)
    })
})

// describe('car leave if parking time negative number', () => {
//     test('carLeave', () => {
//         expect(()=>{parking.carLeave('KA-01-HH-7777',-2)}).toThrow(Error)
//     })
// })


describe('car park in slot 1', function () {
    test('carPark', function (done) {
        expect(parking.carPark('KA-09-HH-0987')
        ).toBe( "Allocated slot number : 1")
        done() 
    })
})

describe('car park in slot 3', function () {
    test('carPark', function (done) {
        expect(parking.carPark('CA-09-IO-1111')
        ).toBe("Allocated slot number : 3")
        done() 
    })
})


describe('get slots status length which are 6 slots + 1 header  = 7 ', function () {
    test('parkingSlotsStatus', function (done) {
        expect(parking.parkingSlotsStatus().length
        ).toBe(7)
        done() 
    })
})


describe(' Sorry, parking lot is full', () => {
    test('carPark', () => {
        expect(()=>{parking.carPark('KA-01-HH-1234')}).toThrow(Error)
    })
})

describe('Please provide parking time with a positive number greater than or equal to 0', () => {
    test('carLeave', () => {
        expect(()=>{parking.carLeave('CA-09-IO-1111',-10)}).toThrow(Error)
    })
})

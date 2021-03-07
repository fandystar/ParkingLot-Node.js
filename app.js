
const {clear,log:print} = console
const fs = require('fs')
const readLine = require('readline')

let	commandLineInputs = process.argv
let interactiveMode = false

const ParkingLot = require('./class/ParkingLot')
let parking= new ParkingLot()

clear()

const processCommands = (input) => {
	
    let command = input.split(' ')[0]
    let parkingLotCapacity 
    let carNumber
    let parkingSlotNumber
    let parkingCharge
    let arr
	switch (command) {
        case 'create_parking_lot':
            try {
                    parkingLotCapacity = parking.createParkingLot(input)
                    print(`Created parking lot with ${parkingLotCapacity} slots`)
                }
            catch (err) {
                    print(err.message)
                }
            break
        case 'park':
            try {
                    parkingSlotNumber = parking.carPark(input)
                    print(`Allocated slot number : ${parkingSlotNumber}`)
            }
            catch (err) {
                    print(err.message)
            }
            break
        case 'leave':
            try {
                    arr = parking.carLeave(input)
                    carNumber =input.split(' ')[1]
                    parkingSlotNumber = arr[0]
                    parkingCharge =arr[1]
                    print(`Registration number ${carNumber} with Slot Number ${parkingSlotNumber} is free with Charge ${parkingCharge}`)
                }
            catch (err) {
                    print(err.message)
            }
            break
        case 'status':
            try {
                    parking.parkingSlotsStatus().length > 1 ? print(parking.parkingSlotsStatus().join('\n')) : print('Sorry, parking lot is empty')
            }
            catch (err) {
                    print(err.message);
            }
            break
        case 'exit':
                    process.exit(0)
                    break
        default:
                    print(input, 'is an invalid command')
                    break
            }
    openInteractiveConsole()
}

const openInteractiveConsole =  ()=> {
    let prompts = readLine.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    })

    if (interactiveMode) {
        prompts.question('Input: ', function (data) {
            processCommands(data)
        })
    }
}

if (commandLineInputs[commandLineInputs.length - 1].endsWith('.txt')) {
    interactiveMode = false;
    fs.readFile(commandLineInputs[2], 'utf-8', function (err, data) {
        if (err) {
            print('Error in reading file')
        }
        let arr = data.split('\n')        
        for (let i = 0; i < arr.length; i++) {
			processCommands(arr[i])
        }
       process.exit(1)
    })
}
else {
    interactiveMode = true
    openInteractiveConsole()
}









const {clear,log:print} = console
const fs = require('fs')
const readLine = require('readline')

let	commandLineInputs = process.argv
let interactiveMode = false

const ParkingLot = require('./class/ParkingLot')
let parking= new ParkingLot()

clear()

function processCommands (input) {
	let command = input.split(' ')[0]
	let slotsCapacity =input.split(' ')[1]
    let carNumber = input.split(' ')[1]
    let parkingHours=input.split(' ')[2]
    switch (command) {
        case 'create_parking_lot':
            try {
                print(parking.setSlotsCapacity(slotsCapacity))
            }
            catch (err) {
                print(err.message)
            }
            break
        case 'park':
            try {
                print(parking.carPark(carNumber))
            }
            catch (err) {
                print(err.message)
            }
            break
        case 'leave':
            try {
                print(parking.carLeave(carNumber,parkingHours))
            }
            catch (err) {
                print(err.message)
            }
            break
        case 'status':
            try {
                 parking.getSlotsStatus().length > 1 ? print(parking.getSlotsStatus().join('\n')) : print('Sorry, parking lot is empty')
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

function openInteractiveConsole () {
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






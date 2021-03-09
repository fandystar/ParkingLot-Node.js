
const {clear,log:print} = console
const fs = require('fs')
const readLine = require('readline')

let	commandLineInputs = process.argv
let interactiveMode = false

const ParkingLot = require('./class/ParkingLot')
let parking= new ParkingLot()

clear()

const processCommand = (input) => {
	let command = input.split(' ')[0]
    let capacity = input.split(' ')[1]
    let numberPlate =input.split(' ')[1]
    let hours = input.split(' ')[2]   
    switch (command) {
        case 'create_parking_lot':
            try {
                print(parking.create(capacity))
                }
            catch (err) {
                print(err.message)
                }
            break
        case 'park':
            try {
                print(parking.carPark(numberPlate))
            }
            catch (err) {
                print(err.message)
            }
            break
        case 'leave':
            try {
                print(parking.carLeave(numberPlate,hours))
                }
            catch (err) {
                print(err.message)
            }
            break
        case 'status':
            try {
                print(parking.slotsStatus().join('\n'))
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
            processCommand(data)
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
			processCommand(arr[i])
        }
       process.exit(1)
    })
}
else {
    interactiveMode = true
    openInteractiveConsole()
}








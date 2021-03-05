
const {clear,log:print} = console
const fs = require('fs')
const readLine = require('readline')

let	commandLineInputs = process.argv
let interactiveMode = false

/**
 * @description importing ParkingLot class
 */

const ParkingLot = require('./class/ParkingLot')
let parking= new ParkingLot()


clear()

function processUserCommands (input) {
	if (input.includes('create')){
        print(parking.setSlotsCapacity(input.split(' ')[1]))
    } else if (input.includes('park')) {
        print(parking.carPark(input.split(' ')[1]))
    } else if (input.includes('leave')) {
        print(parking.carLeave(input.split(' ')[1],input.split(' ')[2]))
    } else if   (input.includes('status')) {
        print(parking.getCarsStatus())
    }    
    openInteractiveConsole();
}

if (commandLineInputs[commandLineInputs.length - 1].endsWith('.txt')) {
    interactiveMode = false;
    fs.readFile(commandLineInputs[2], 'utf-8', function (err, data) {
        if (err) {
            print('Error in reading file')
        }
        let arr = data.split('\n')        
        for (let i = 0; i < arr.length; i++) {
			processUserCommands(arr[i])
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
            processUserCommands(data)
        })
    }
}






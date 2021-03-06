# ParkingLot

" I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is
given a number starting at 1 increasing with increasing distance from the entry point
in steps of one. I want to create an automated ticketing system that allows my
customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The
ticket issuing process includes us documenting the car number (number
plate) and allocating an available parking slot to the car
before actually handing over a ticket to the driver (we assume that our customers are
nice enough to always park in the slots allocated to them). The customer should be
allocated a parking slot which is nearest to the entry. At the exit the customer returns
the ticket with the time the car was parked in the lot, which then marks the slot they
were using as being available. Total parking charge should be calculated as per the
parking time. Charge applicable is $10 for first 2 hours and $10 for every additional
hour. "

[![GitHub license](https://img.shields.io/github/license/fandystar/ParkingLot-NodeJs?logo=github)](https://github.com/fandystar/ParkingLot-NodeJs/blob/master/LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/fandystar/ParkingLot?logo=github)](https://github.com/fandystar/ParkingLot-Node-Js/) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/fandystar/ParkingLot-Node-Js?logo=snyk&color=red) [![Travis (.org)](https://img.shields.io/travis/fandystar/ParkingLot?logo=travis)](https://travis-ci.com/fandystar/ParkingLot-NodeJs/builds/139851721)

## About Problem

To **design a parking lot system** with ability to :

- create a number of parking slots ( free to park )

- park or leave with a given car number

- Parking charge when carleave

- Get slots detail of all cars


## Pre requisites

[![GitHub top language](https://img.shields.io/github/languages/top/fandystar/ParkingLot?label=NodeJS&logo=Node.js)](https://github.com/fandystar/ParkingLot/) [![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fandystar/ParkingLot?logo=github&color=teal)](https://github.com/fandystar/ParkingLot/) [![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/fandystar/ParkingLot/master?logo=codefactor&logoColor=white)
](https://github.com/fandystar/ParkingLot/)

The source code for this project is written using [Node.js](https://nodejs.org/). Make sure you have [Node.js](https://nodejs.org/) installed on your computer before running this application, **if not please install Node.js from [here](https://nodejs.org/en/download/)**.

To check if you have Node.js and NPM installed by running simple commands to see what version of each is installed:

 - **Test Node.js**: To see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this `v10.16.0`.

 - **Test NPM**. To see if NPM is installed, type `npm -v` in Terminal. This should print the version number so you’ll see something like this `6.9.0`.

> **Note:** [Node installer](https://nodejs.org/en/download/) installs both Node.js and npm on your system.

## How to run?

This is a console application written in `Node.js`. This can be run in two modes:

1. **Interactive Mode**: An interactive terminal based shell where commands can be typed in to perform different actions.

2. **File Mode**: It accepts a filename as a parameter at the terminal and read the commands from that file.

### Quick Start

**Proceed to the steps below only if you've `Node.js` installed.** If not, please refer [pre requisites](#pre-requisites) section.

#### For Interactive Mode

Open terminal and navigate (`cd`) to this folder and type the following commands:

```bash
1. npm install
2. npm start
```

#### For File Mode

Open terminal and type `node app.js data/input.txt`.

```terminal
node app.js <path_to_file.txt>
```

**Note**: You can find a few sample input files inside `data/` folder.

#### Explained

**STEP 1**: `npm install` or `npm i` will download all the dependencies defined in `package.json` file and generate a `node_modules/` folder with the installed modules. Learn more [here](https://docs.npmjs.com/cli/install).

**STEP 2**: `npm start` or `npm run start` will start the application. It is equivalent to `node app.js`

## List of User Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park < car NUMBER >**: `park KA-01-HH-1234` will allocate the nearest slot from entry gate.

- **leave**: `leaveKA-01-HH-1234` will make a certain slot number to be free.

- **status**: `status` will their slot details ( slot number and car number )

```bash
Slot No.  car No 
1         KA-01-HH-1234  
2         KA-01-HH-9999  
3         KA-01-BB-0001  
5         KA-01-HH-2701  
6         KA-01-HH-3141  
```


> **NOTE: Any commands which are not mentioned above will throw an error: `<INPUT> is an invalid command`**

**To view all the commands in terminal, please run `npm run help`**

## Class - OOPS Approach

[![CodeFactor](https://www.codefactor.io/repository/github/fandystar/parkinglot-NodeJs/badge)](https://www.codefactor.io/repository/github/fandystar/parkinglot) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/275124e731de4f48a7adac2e9984e59f)](https://www.codacy.com/manual/fandystar/ParkingLot-NodeJs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fandystar/ParkingLot-NodeJs&amp;utm_campaign=Badge_Grade)

There are two classes defined:

`ParkingLot()`: It is the main class which is used to initialize a parking lot. In each parking lot there is maximum number of slots and an array of slots that will be occupied by the car. It has following methods:

- `createParkingLot(slotsCapacity)` : Creates a parking lot with given input. It throws an error `Minimum one slot is required to create parking slot` if zero or negative number (n <= 0) is provided as an input.
 
    - `Minimum one slot is required to create parking slot` : When parking lot is not initialized.

   
- `carPark(input)` : Allocates nearest slot from entry gate to the car. It can throw following errors:

    - `Sorry, parking lot is full` : When parking lot has reached its maximum capacity.

 
- `carLeave(input)` : Removes car in given slot in parking lot. It throws following errors:
    
    - `Please provide car number and parking hours` : When input contains either of two i.e. car number and parking hours

    - `Slot number <CAR NUMBER> is not found` when slot number is absent.


- `getSlotsStatus()` : Returns an array containing slot number and car number. It throws an error `Sorry, parking lot is empty` if parking lot is empty.


`Car()`

- `new Car(carNumber)` : Constructor used to initialize a car object containing 1 field, car nunber


**Note:** *I've made an assumption that the car number for cars can never be same.*

## Test Scripts

Tests are written using [Jest](https://jestjs.io) and can be run using `npm test`

- `npm test` : Run unit tests only (Tests for functions in Parking lot Class)

#### Unit tests

Unit tests are written for the methods of `ParkingLot` class.


#### Code Coverage

To see code coverage report, run `npm test`.

The current code coverage for the tests are following:

| Type  | Percentage  |
|---|---|
| Statement  | 100  |
| Branch  | 100  |
| Function  | 100  |
| Lines  | 100  |

- **Function coverage:** Has each function (or subroutine) in the program been called?
- **Statement coverage:** Has each statement in the program been executed?
- **Branch coverage:** Has each branch (also called DD-path) of each control structure (such as in if and case statements) been executed?
- **Line coverage:** Has each executable line in the source file been executed?


**NOTE:** Code coverage is added to the jest tests (`npm test`) using **[nyc]((https://jestjs.io/)**.
You can see the code-coverage report in terminal as well as detailed HTML report inside `coverage/` folder.
Go to `coverage/` folder and open `index.html`.


## Dependencies Used


- [Jest](https://jestjs.io/): A JavaScript test framework for Node.js programs. Learn more [here](https://jestjs.io/).



Open terminal and type the following:

Navigates to the root folder.

1. `npm install` : Installs all the dependencies.

2. `npm start` : Starts the console application in interactive mode.

3. `npm test` : Runs unit tests.


Feel free to reach out to me via email. Shoot your doubts at [fandyarayalin@gmail.com](mailto:fandyarayalin@gmail.com?Subject=ParkingLot).

> Glad to see you here! **Show some ❤️ by starring [this](https://github.com/fandystar/ParkingLot-NodeJs/) repository.**

## Author

[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot/images/0)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/0)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot/images/1)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/1)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/images/2)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/2)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/images/3)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/3)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/images/4)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/4)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/images/5)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/5)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/images/6)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/6)[![](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/images/7)](https://sourcerer.io/fame/fandystar/fandystar/ParkingLot-NodeJs/links/7)

#### [fandy araya lin](https://github.com/fandystar)

[![GitHub followers](https://img.shields.io/github/followers/fandystar.svg?label=Follow%20@fandystar&style=social)](https://github.com/fandystar/)



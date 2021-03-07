[![GitHub last commit](https://img.shields.io/github/last-commit/fandystar/ParkingLot-NodeJs?logo=github)](https://github.com/fandystar/ParkingLot-NodeJs/) [![GitHub top language](https://img.shields.io/github/languages/top/fandystar/ParkingLot-NodeJs?label=NodeJS&logo=Node.js)](https://github.com/fandystar/ParkingLot-NodeJs/) [![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/fandystar/ParkingLot-NodeJs?logo=github&color=teal)](https://github.com/fandystar/ParkingLot-NodeJs/) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/275124e731de4f48a7adac2e9984e59f)](https://www.codacy.com/fandystar/ParkingLot-NodeJs?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fandystar/ParkingLot-NodeJs&amp;utm_campaign=Badge_Grade)

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


##  About Problem

To **design a parking lot system** with ability to :

- Create a number of parking slots ( available to park )

- Park or leave with a given car number,parking time

- Calculate parking charge when car leave

- Get slots detail of all cars


## Pre requisites

The source code for this project is written using [Node.js](https://nodejs.org/). Make sure you have [Node.js](https://nodejs.org/) installed on your computer before running this application, **if not please install Node.js from [here](https://nodejs.org/en/download/)**.

To check if you have Node.js and NPM installed by running simple commands to see what version of each is installed:

 - **Test Node.js**: To see if Node is installed, type `node -v` in Terminal. This should print the version number so you’ll see something like this `v10.16.0`.

 - **Test NPM**. To see if NPM is installed, type `npm -v` in Terminal. This should print the version number so you’ll see something like this `6.9.0`.

> **Note:** [Node installer](https://nodejs.org/en/download/) installs both Node.js and npm on your system.

## 1. How to run?

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

Open terminal and type `node app.js data/input1.txt`.
```terminal
node app.js <path_to_file.txt>
```
**Note**: You can find 2 samples input files inside `data/` folder.

#### Screenshots

Please go to `screenshots/running` folder to find screenshots of running **Parking Lot** 

#### Explained

**STEP 1**: `npm install` or `npm i` will download all the dependencies defined in `package.json` file and generate a `node_modules/` folder with the installed modules. Learn more [here](https://docs.npmjs.com/cli/install).

**STEP 2**: `npm start` or `npm run start` will start the application. It is equivalent to `node app.js`

## 2. List of Commands

Users can interact with the Parking Lot system via a following simple set of commands which produce a specific output:

- **create_parking_lot  {parkingLotCapacity}**: `create_parking_lot 6` will create a parking lot with 6 slots.

- **park  {carNumber}**: `park KA-01-HH-1234` will allocate car to  the nearest slot from entry gate.

- **leave  {carNumber,parkingTime}**: `leave KA-01-HH-1234 6` will make car parking slot to be available  and calculate parking charge based parking time ( 6 hours ).

- **status**: `status` will display all slot details ( slot number and car number ).

```bash
Slot No.  Registration  No. 
1         KA-01-HH-1234  
2         KA-01-HH-9999  
3         KA-01-BB-0001  
4         KA-01-HH-2701  
5         KA-01-HH-3141  
```


> **NOTE: Any commands which are not mentioned above will throw an error: `<input> is an invalid command`**


## 3. Class - OOPs Approach

There are two classes defined:

`ParkingLot()`: It is the main class which is used to initialize a parking lot. In each parking lot there is maximum number of slots and an array of slots that will be occupied by the car. It has following methods:

- `createParkingLot(input)` : Creates a parking lot with given capacity input. It throws an error `Minimum one slot is required to create parking slot` 
 
    - `Minimum one slot is required to create parking slot` : When parking lot is not greater than or equal to one ( 1 slot )

   
- `carPark(input)` : Allocates nearest slot from entry gate to the car. It can throw following errors:

    - `Please provide car number` : When input only contains 'park' keyword
    - `Sorry, parking lot is not created yet` : When parking lot is not created.
    - `Sorry, parking lot is full` : When parking lot has reached its maximum capacity.
   
 
- `carLeave(input)` : will make car parking slot to be available  and calculate parking charge based parking time. It throws following errors:
    
    - `Please provide car number and parking time` : When input contains either of two or both of them  i.e. car number or parking time
    - `Please provide parking time` : When input contains car number only.
    - `Slot number <carNumber> is not found` when slot number is absent.


- `parkingSlotsStatus()` : Returns an array containing slot number and car number. It throws an error :
    
    -`Sorry, parking lot is empty` if parking lot is empty.


`Car()`
- `new Car(carNumber)` : Constructor used to initialize a car object containing 1 field, car number


**Note:** *I've made an assumption that the car number for cars can never be same.*

## 4. Test Scripts

Tests are written using [Jest](https://jestjs.io) and can be run using `npm test`

- `npm test` : Run unit tests only (Tests for functions in Parking lot Class and parkingCharge function)

#### Screenshots

Please go to `screenshots/testing` folder to find screenshots of testing **Parking Lot**  

#### Unit tests

Unit tests are written for the methods of `ParkingLot` class and `parkingCharge` function

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


**NOTE:** Code coverage is added to the jest tests (`npm test`) **((https://jestjs.io/)**.
You can see the code-coverage report in terminal as well as detailed HTML report inside `coverage/` folder.
Go to `coverage/lcov-report` folder and open `index.html`.


## 5. Dependencies Used

- [Jest](https://jestjs.io/): A JavaScript test framework for Node.js programs. Learn more [here](https://jestjs.io/).




## 6. Cheat Sheet

Navigates to the root folder,

Open terminal

1. `npm install` : Installs all the dependencies.

2. `npm start` : Starts the console application in interactive mode.

3. `npm test` : Runs unit tests.


Feel free to reach out to me via email. Shoot your doubts at [fandyarayalin@gmail.com](mailto:fandyarayalin@gmail.com?Subject=ParkingLot).

> Glad to see you here! **Show some ❤️ by starring [this](https://github.com/fandystar/ParkingLot-NodeJs/) repository.**

## Author


#### [fandy araya lin](https://github.com/fandystar)

[![GitHub followers](https://img.shields.io/github/followers/fandystar.svg?label=Follow%20@fandystar&style=social)](https://github.com/fandystar/)



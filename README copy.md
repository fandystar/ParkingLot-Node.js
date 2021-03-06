# ParkingLot

" I own a parking lot that can hold up to 'n' cars at any given point in time. Each slot is
given a number starting at 1 increasing with increasing distance from the entry point
in steps of one. I want to create an automated ticketing system that allows my
customers to use my parking lot without human intervention.
When a car enters my parking lot, I want to have a ticket issued to the driver. The
ticket issuing process includes us documenting the registration number (number
plate) and allocating an available parking slot to the car
before actually handing over a ticket to the driver (we assume that our customers are
nice enough to always park in the slots allocated to them). The customer should be
allocated a parking slot which is nearest to the entry. At the exit the customer returns
the ticket with the time the car was parked in the lot, which then marks the slot they
were using as being available. Total parking charge should be calculated as per the
parking time. Charge applicable is $10 for first 2 hours and $10 for every additional
hour. "


A. Quick Start

File Mode : Open terminal, navigate to this folder and type : 
node app.js data/input.txt  ( option 1)
node app data/input.txt   ( option 2 )
node . data/input.txt   ( option 3 )
npm start ( option 4 )



B. Components ( OOP approach )

1.  functional class :
1.1 ParkingLot { constructor : slotsCapacity}
1.2 Car { constructor : carNumber}

2. List of ParkingLot's class methods :
2.1. setSlotsCapacity : change slots capacity
2.2. carPark : allocate the nearest slot to the incoming car
2.3. carLeave : make slot the leaving car to be 'free'
2.4  getSlotssStatus : display slot details (slot number and 
registration number )


3. List of Utils ( helper function ) :
3.1. parkingCharge : calculate parking charge based parking hours for the leaving car


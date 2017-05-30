var Elevator = function(id) {
	this.id = id;
	//number of floors crossed
	this.floors = 0;
	//number of trips taken
	this.trips = 0;

	//record elevators current trip/location
	this.currentFloor = 0;
	//where the elevator is moving: -1 descending, 1 ascenting, 0 standing
	this.direction = 0;
	this.destinations = [];
};

//check if elevator can still be used without being serviced
Elevator.prototype.isActive = function() {
	return this.trips <= 100;
};

/*
* moveOneLevel: move one level up or down
* @params {int} directors (1 up, -1 down)
*/
Elevator.prototype.moveOneLevel= function(direction) {
	setTimeout(() => {
		console.log(`Elevator moving from floor ${this.currentFloor} to ${this.currentFloor + direction}`)
	}, 1000);
	this.currentFloor += direction;
	this.floors ++;
	this.direction = direction;
	if (this.destinations.indexOf(currentFloor) > -1) {
		this.openAndCloseDoors();
		this.destinations.splice(this.destinations.indexOf(currentFloor), 1);
	}
};

/*
* openAndCloseDoors: make a stop at a floor
* @params {int} directors (1 up, -1 down)
*/
Elevator.prototype.openAndCloseDoors = function() {
	console.log('Opening doors');
	setTimeout(() => {
		console.log('Closing doors');
	}, 5000);
};

/*
* addTrip: add floors to current trip
* @params {array} floors to add
*/
Elevator.prototype.addFloors = function(floors) {
	var current = this.destinations;
	floors.forEach((floor) => {
		if (current.indexOf(floor) === -1) {
			current.push(floor);
		}
	}
	this.destinations = current.sort();
};

/*
* initiateTrip: initiate a trip
* @params {direction} -1 or 1
* @params {int} start floor
* @params {int} end floor
*/
Elevator.prototype.initiateTrip = function(direction, start, end) {
	this.direction = direction;
	this.destinations = [start, end];
	this.trips++;
};

/*
* endTrip: end a trip
*/
Elevator.prototype.endTrip = function(direction, start, end) {
	this.direction = 0;
	this.destinations = [];
};



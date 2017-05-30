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
	this.destination = null;
};

//check if elevator can still be used without being serviced
Elevator.prototype.isActive = function() {
	return this.trips <= 100;
};


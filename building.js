var Building = function(floors) {
	this.top = 0;
	this.elevators = {};
	this.floors = [];
};

/** initialize: create a building with given # of floors and elevators
* @params{int} # of floors
* @params {int} # of elevators
* @return {building instance}
*/
Building.prototype.initialize = function(floors, elevators) {
	//add floors
	while (this.top < floors) {
		this.floors.push(new Floor(this.top + 1));
		this.top++;
	}

	//add elevators to building and ground floor
	let i = 0;
	while (i < elevators) {
		const id = i.toString();
		this.elevators[i] = new Elevator(id);
		this.floors[0].push(i);
		i++;
	}

	return this;
};

/*
* startTrip: find optimal elevator to start trip
* @params {int} trip start floor
* @params {int} trip end floor
*/
Building.prototype.startTrip = function(start, end) {
	if (end > this.top || start > this.top){
		throw new Error(`Cannot go higher than floor ${this.top}`);
	}
	if (start < 1 || end < 1) {
		throw new Error(`Cannot go below floor 1`);
	}

	const currentFloor = this.floors[start + 1];

	//check for stationary elevators on the same floor
	if (currentFloor.getStationaryElevator()) {
		const elevator = currentFloor.getStationaryElevator();
		return elevator.startTrip(end);
	}

	//check for moving elevators in the same direction

	//get closes stationary elevator
}


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
* startTrip: find optimal elevator and start trip
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

	const currentFloor = this.floors[start - 1];
	let elevator = null;
	let floor = null;

	//check for stationary elevators on the same floor
	if (currentFloor.elevators.length) {
		if (this.checkForStationaryElevators(currentFloor)){
			elevator = checkForStationaryElevators(currentFloor);
			floor = currentFloor;
		})
	}

	//check for moving elevators in the same direction
	if (!elevator) {
		let nextUp = start += 1;
		let nextDown = start -= 1;
		const direction = start < end ? -1 : 1;

		while (nextUp <= this.top || nextDown >= 1) {
			if (this.checkForMovingElevators(nextUp, direction, end)) {
				elevator = this.checkFoMovingElevators(nextUp, direction, end);
				floor = nextUp;
				break;
			}
			if (this.checkForMovingElevators(nextDown, direction, end)) {
				elevator = this.checkFoMovingElevators(nextUp, direction, end);
				floor = nextDown;
				break;
			}

			nextUp ++;
			nextDown --;
		}
	}

	//get closest stationary elevator
	if (!elevator) {
		let nextUp = start += 1;
		let nextDown = start -= 1;
		const direction = start < end ? -1 : 1;

		while (nextUp <= this.top || nextDown >= 1) {
			if (this.checkForMovingElevators(nextUp, direction, end)) {
				elevator = this.checkFoMovingElevators(nextUp, direction, end);
				floor = nextUp;
				break;
			}
			if (this.checkForMovingElevators(nextDown, direction, end)) {
				elevator = this.checkFoMovingElevators(nextUp, direction, end);
				floor = nextDown;
				break;
			}

			nextUp ++;
			nextDown --;
		}
	}
}

Building.prototype.checkForStationaryElevators = function(floor){
	const elevators = this.floors[floor - 1].elevators;
	const len = elevators.length;
	let elevator = null;

	for (let i = 0; i < len; i++) {
		if (this.elevators[elevatorId].direction === 0 && this.elevators[elevatorId].isActive()) {
			let elevator = this.elevators[elevatorId];
			break;
		}
	}

	return elevator;
};

Building.prototype.checkForMovingElevators = function(floor, direction, target){
	const elevators = this.floors[floor - 1].elevators;
	const len = elevators.length;
	let elevator = null;

	for (let i = 0; i < len; i++) {
		if (this.elevators[elevatorsId].direction === direction && this.elevators[elevatorId].isActive()) {
			let destinations = this.elevators[elevatorId].destinations;
			if (direction === 1 && destinations[destinations.length - 1] >= target) {
				//target is on this elevators way up
				elevator = this.elevators[elevatorId];
				break;
			}
			if (direction === -1 && destinations[0] <= target) {
				elevator = this.elevators[elevatorId];
				break;
			}
		}
	}

	return elevator;
};


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


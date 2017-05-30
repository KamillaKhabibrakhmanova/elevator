var Building = function(floors) {
	this.top = 0;
	this.elevators = {};
	this.floors = [];
};

Building.prototype.initialize = function(floors, elevators) {
	//add floors
	while (this.top < floors) {
		this.floors.push(new Floor(this.top + 1));
		this.top += 1;
	}
	//add elevators to ground floor
	while ()
};


var Floor = function(level) {
	this.elevators = [];
	this.level = level;
};

Floor.prototype.removeElevator = function(elevatorId) {
	return this.elevators.splice(this.elevators.indexOf(elevatorId), 1);
};

Floor.prototype.addElevator = function(elevatorId) {
	return this.elevators.push(elevatorId);
};
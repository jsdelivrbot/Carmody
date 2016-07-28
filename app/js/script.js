'use strict';

var model = {
	floor: ko.observable()
};

var going = {

	up: function(){
		console.log('going up!');
	},

	down: function() {
		console.log('going down!');
	}
}

ko.applyBindings();

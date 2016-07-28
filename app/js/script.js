'use strict';

var model = {
	floor: ko.observable()
};

var going = {

	up: function(){
		console.log('going up!');
		$('.right').animate({
			width: 0.25
		});
		$('.left').animate({
			left: "763px",
			width: 0
		});
	},

	down: function() {
		console.log('going down!');
	}
}

ko.applyBindings();

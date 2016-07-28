'use strict';

var model = {
	floorNum: ko.observable(),
	floorName: [
		{
			name: 'Projects'
		}, {
			name: 'Education'
		}, {
			name: 'Extras'
		}
	]
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
		}, function(){
			$('.welcome').fadeIn();
			$('.splash').fadeOut(function() {
				$('.black').fadeIn();
			});
			
		});
	},

	down: function() {
		console.log('going down!');
	},

	projects: function() {
		console.log('projects');
	}
}

ko.applyBindings();

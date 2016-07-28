'use strict';

var model = {
	floorNum: ko.observable(),
	floorName: [
		{
			name: 'Projects',
			navId: 'projects',
			src: 'img/desk.png',
			project: [{
				src: 'img/udacity.png',
				name: 'Udacity Projects',
				picId: 'udacity'
			}, {
				src: 'img/template.png',
				name: 'Templates',
				picId: 'template'
			}, {
				src: 'img/globe.png',
				name: 'APIs',
				picId: 'api'
			}, {
				src: 'img/book.png',
				name: 'Published Projects',
				picId: 'published'
			}]
		}, {
			name: 'Education',
			navId: 'education',
			src: 'img/desk.png',
			project: ko.observable(false)
		}, {
			name: 'Extras',
			navId: 'extras',
			src: 'img/desk.png',
			project: ko.observable(false)
		}, {
			name: 'Resume',
			navId: 'resume',
			src: 'img/desk.png',
			project: ko.observable(false)
		}, {
			name: 'GitHub',
			navId: 'github',
			src: 'img/desk.png',
			project: ko.observable(false)
		}, {
			name: 'LinkedIn',
			navId: 'linkedin',
			src: 'img/desk.png',
			project: ko.observable(false)
		}
	]
};

var going = {

	up: function(){
		console.log('going up!');
		$('.canvas').animate({
			width: 0.25
		}, 'slow', function(){
			$('.welcome').fadeIn();
			$('.splash').fadeOut(function() {
				$('.black').fadeIn('slow');
			});
		});
	},

	down: function() {
		console.log('going down!');
	},

	floorChoice: function() {

		var clickId = '#'+this.navId;
		$('.black').fadeOut(function(){
			$('.sections').show();
			$('.all-sections').hide();
			$(clickId).show();
		});
	}
};

var hover = {

	over: function() {
		var clickId = "."+this.picId;
		$(clickId).css('opacity', '1');

	},

	out: function() {
		var clickId = "."+this.picId;
		$(clickId).css('opacity', '0.7');
	}
};

var back = {

	init: function() {
		$('.sections').fadeOut(function() {
			$('.black').fadeIn();
		});
		
	}
}

ko.applyBindings();

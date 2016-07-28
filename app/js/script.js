'use strict';

var model = {
	floorNum: ko.observable(),
	floorName: [
		{
			name: 'Projects',
			navId: 'projects',
			src: ko.observable('img/desk.png'),
			project: [{
				src: 'img/udacity.png',
				name: 'Udacity Projects',
				picId: 'udacity',
				allId: 'projects-sub'
			}, {
				src: 'img/template.png',
				name: 'Templates',
				picId: 'template',
				allId: 'projects-sub'
			}, {
				src: 'img/globe.png',
				name: 'APIs',
				picId: 'api',
				allId: 'projects-sub'
			}, {
				src: 'img/book.png',
				name: 'Published Projects',
				picId: 'published',
				allId: 'projects-sub'
			}]
		}, {
			name: 'Education',
			navId: 'education',
			src: ko.observable('img/notebook.png'),
			project: [{
				src: 'img/bc.png',
				name: 'Boston College',
				allId: 'school',
				picId: 'boston-college'
			}, {
				src: 'img/udacity.png',
				name: 'Udacity',
				allId: 'school',
				picId: 'udacity-college'
			}]
		}, {
			name: 'Extras',
			navId: 'extras',
			src: ko.observable('img/notebook.png'),
			project: ko.observable(false)
		}, {
			name: 'Resume',
			navId: 'resume',
			src: ko.observable('img/notebook.png'),
			project: ko.observable(false)
		}, {
			name: 'GitHub',
			navId: 'github',
			src: ko.observable('img/notebook.png'),
			project: ko.observable(false)
		}, {
			name: 'LinkedIn',
			navId: 'linkedin',
			src: ko.observable('img/notebook.png'),
			project: ko.observable(false)
		}
	]
};

var going = {

	up: function(){
		console.log('going up!');
		$('.canvas-header').hide();
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
		console.log(clickId);
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

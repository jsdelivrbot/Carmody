'use strict';

var model = {
	sections: [
		{
			title: ko.observable('Work Experience'),
			head: ko.observable(''),
			id: 'work',
			divID: 'work-info'
		},
		{
			title: ko.observable('Education'),
			head: ko.observable(''),
			id: 'edu',
			divID: 'education'
		},
		{
			title: ko.observable('Portfolio'),
			head: ko.observable(''),
			id: 'port',
			divID: 'portfolio'
		},
		{
			title: ko.observable('Other Interests'),
			head: ko.observable(''),
			id: 'other',
			divID: 'interests'
		},
		{
			title: ko.observable('Contact'),
			head: ko.observable(''),
			id: 'basic-info',
			divID: 'contact'
		}
	],
	contact: [
		{
			name: 'Jack Masterson',
			career: 'Front End Web Developer',
			location: 'Greater New York City Area',
			cell: '908-433-0178',
			email: 'jackmasterson5@gmail.com',
			imgNav: [
				{
					title: 'linkedIn',
					imgHref: 'https://linkedin.com/in/mastersonjack',
					imgSrc: 'img/linkedIn.png',
					id: 'linked'
				},
				{
					title: 'headshot',
					imgHref: '#/',
					imgSrc: 'img/headshot.jpg',
					id: 'head-shot'
				},
				{
					title: 'gitHub',
					imgHref: 'https://github.com/jackmasterson',
					imgSrc: 'img/gitHub.png',
					id: 'git'
				}
			]
		}
	],
	experience: [
		{
			employer: 'Workman Publishing',
			title: 'Publicity and Marketing Assistant',
			skills: ['Press Releases', ' Event Coordinating', ' Creating Media Lists'],
			date: 'March 2014-July 2015',
			description: 'At Workman, I...',
			img: 'img/workman-logo.jpg',
			id: 'workman'
		},
		{
			employer: 'Shawmut Design and Construction',
			title: 'Junior Marketing Coordinator',
			skills: ['Copywriting/Editing', ' Internal Interviews', ' Writing BD Templates'],
			date: 'June 2013-March 2014',
			description: 'Shawmut taught me...',
			img: 'img/shawmut-logo.jpg',
			id: 'shawmut'
		}
	],
	education: [
		{
			school: 'Boston College, cum laude',
			focus: 'B.A., English',
			skills: 'Effective Communication, In-Depth Analysis, Presentation Skills',
			GPA: 'GPA: 3.646',
			img: 'img/bc.jpg',
			id: 'bc'
		},
		{
			school: 'Udacity',
			focus: 'Nanodegree, Front End Web Development',
			skills: {
				languages: 'javascript, HTML5, CSS3',
				frameworks: 'jQuery, Bootstrap',
				other: 'GitHubKnockout, gulp, ngrok'
			},
			GPA: 'Skills: HTML5, CSS3, JavaScript, jQuery, Bootstrap' +
				'ngrok, gulp, Slick, Knockout, MVVM practices',
			img: 'img/udacity.png',
			id: 'udacity'
		}
	],
	interests: [
		{
			name: 'Writing',
			proof: 'Blogs',
			id: 'blog-ID',
			blogs: [
				{
					title: 'Daily Dose of Stupid',
					medium: 'Medium',
					style: 'This serves as an outlet for all the sarcasm' +
						' I keep pent up all day. Just kidding, I never keep it' +
						' pent up.',
					src: 'img/ddos.jpg',
					href: 'https://medium.com/me/stories/public'
				},
				{
					title: 'Union Lane',
					medium: 'Blogspot',
					style: 'I like writing about music every once in a while.',
					src: 'img/ul.png',
					href: 'http://unionlane.blogspot.com/'
				},
				{
					title: 'Abroad in Moswetuset',
					medium: 'Blogspot',
					style: 'This is an example of a kid tired of abroad blogs.' +
						' So I do here what I do best: I make fun of it.',
					src: 'img/abroad.png',
					href: 'http://jackisabroad.blogspot.com/'
				},
			]
		},
		{
			name: 'Improv Comedy',
			proof: 'Coaching, Teaching, Performing',
			id: 'improv-ID',
			blogs: [
				{
					title: 'Coaching',
					style: 'I have coached improv at Boston College,' +
						' to middle-and-high schoolers.',
					src: 'img/coaching.jpg',
					href: ko.observable(false)
				},
				{
					title: 'Performing',
					style: 'Check us out this summer at the Manasquan' + 
					' Community Center for a lot of laughs!',
					src: 'img/performing.jpg',
					href: ko.observable(false)
				},
				{
					title: 'Goofing Off',
					style: 'I also like to make a fool of myself whenever' +
						' I can.',
					src: 'img/garbage.jpg',
					href: ko.observable(false)
				}

			]
		}
	],
	projects: [
		{
			title: 'Udacity Projects',
			href: 'collapseOne',
			clickHref: '#collapseOne',
			id: 'ud-head',
			examples: [
				{
					name: 'Neighborhood Map',
					url: 'https://cdn.rawgit.com/jackmasterson/NMap/master/index.html',
					date: 'March 3 - May 10, 2016',
					skills: ['Knockout/MVVM', ' 3rd-Party APIs'],
					description: "This project utilizes Knockout's" +
						" MVVM approach to organizing code and I learned all" +
						" about data-binding." +
						" It also incorporated 3rd-party APIs." +
						" The site displays five locations" +
						" and their corresponding pins on a static" +
						" Google Map. When the location or pin is clicked," +
						" the marker animates and changes to an image associated" +
						" with that location. There is also a search bar with autofill" +
						" functionality that filters both the list and the pins," +
						" and additional APIs that list upcoming" +
						" concerts in the area, surfing conditions, and" +
						" census information.",
					img: 'img/map.jpg'
		
				},
				{
					name: 'Arcade Game Clone',
					url: 'https://rawgit.com/jackmasterson/Arcade-Game/master/Arcade Game/index.html',
					date: 'January 8, 2015 - February 7, 2016',
					skills: ['HTML Canvas', ' Separation of Concerns'],
					description: 'According to the Udacity instructor who' +
					' reviewed it, "excellently implemented game...I am really' +
					' impressed by your work." This was a fun one. It took' +
					' me a bit of time to get started in that I was not sure' +
					' exactly where to begin, but watching the offered Office' +
					' Hours was a huge help. All we had to do was create the' +
					' scene with one player, the bugs, the grass/stone/water' +
					' and we could turn it in, but I got a little creative and' +
					' put in levels, a scorekeeper, obstacles and lawnmowers in' +
					' levels down the road, a way to get an extra life, and a way' +
					' to pick your character (my favorite is Iron Man). Give' +
					' it a try and let me know what you think!',
					img: 'img/project3.png',
					link: 'https://github.com/jackmasterson/Arcade-Game.git'
				},
				{
					name: 'Online Resume',
					url: 'https://cdn.rawgit.com/jackmasterson/ResumeBuilder/master/src/index.html',
					date: 'November 30, 2014 - Jan 3, 2015',
					skills: ['OOJS', ' Bootstrap',' Google Maps'],
					description: 'I took some time off' +
						' in between Project 1 and 2, and boy was that' +
						' a misTAKE. Diving back in' +
						' took some time, and I took lesson 2 on JavaScript' +
						' at least three times before' +
						' I got the hang of it all again. Though I have to say,' +
						' there is no more rewarding' +
						' feeling than figuring out some code that has been' +
						' eluding you for hours/months.',
					img: 'img/ss7.png'
				},
			]
		},
		{
			title: 'Works in Progress',
			href: 'collapseTwo',
			clickHref: '#collapseTwo',
			id: 'prog-head',
			examples: [
				{
					name: 'Pack-A-Day',
					url: '#/',
					date: 'Started April 30, 2016',
					description: 'Filler text',
					skills: ko.observable(''),
					img: ''
				},
				{
					name: 'Shore Fun Improv',
					url: 'https://cdn.rawgit.com/jackmasterson/improv/master/index.html#/',
					date: 'Started May 2, 2016',
					description: 'It sure is fun!',
					skills: ko.observable(''),
					img: 'img/shoreFun.png'
				},
				{
					name: 'Wedding Page - BARM',
					url: 'https://cdn.rawgit.com/jackmasterson/BARM/master/index.html',
					date: 'Started February 12, 2016',
					description: 'Beth is getting married!',
					skills: ko.observable(''),
					img: ''
				}
			]
		},
		{
			title: 'Published Projects',
			href: 'collapseThree',
			clickHref: '#collapseThree',
			id: 'pub-head',
			examples: [
				{
					name: 'Wedding Page',
					url: 'http://www.sarahandryantietheknot.com',
					date: 'November 15 - Dec 19, 2015',
					description: 'Created a landing page for a wedding' +
						' for a client that happens to be my sister. ' +
						'Includes a slideshow, Bootstrap features, jQuery,' +
						' and any and all information' +
						' someone could want when attending a wedding' +
						' in the area.',
					skills: ko.observable(''),
					img: 'img/grub.png'
				}
			]
		}
	]
};

var viewModel = {
	init: function(){

		toggle.fadeScroll();

	}
};

var vis = {
	init: function(){
		var self = this;
	//	$('.light-back').hide();
		//$('.light-back').toggle("slow", function(){});
		model.sections.forEach(function(section){
			var clickedID = "#" + self.divID;
			var hideID = document.getElementById(section.divID);


			$(clickedID).toggle('slow', function(){});

		});
	}
}


var toggle = {

	slideIn: function(clicked) {
		$('.light-back').hide();
		var clickedID = "#" + this.divID;
		$(clickedID).fadeToggle('slow', function(){});
		
		
			$('html, body').animate({
		        scrollTop: $(clickedID).offset().top
		    }, 800);
	

	},

	showCar: function(clicked) {
		console.log(clicked);
		var clickedID="#" + clicked.id;

		$(clickedID).fadeToggle();
	},

    contactInfo: function() {
    	$('#contact').click(function(){
    		$('.contact').slideDown();
   		});
    },

    showSearch: function() {
    	$('#search-div').fadeIn();
    },

    fadeScroll: function() {
    	$(window).scroll(function() {

		    if ($(this).scrollTop()>0)
		     {
		        $('#search-div').fadeOut();
		        $('.search-img').fadeOut();
		     }
		    else
		     {
		      $('#search-div').fadeIn();
		      $('.search-img').fadeIn();
		     }
		 });
    }
};

$(document).ready(function(){
	$('.carousel').slick({
		  infinite: false,
		  dots: true,
		  speed: 500,
		  arrows: true

      });

      $('#other').click(function(){
      	$('#interests').resize();
      });



});

var workScroll = {

	render: function() {

	}
};


ko.applyBindings(viewModel.init());
var cont = document.getElementById('contact');
console.log(cont);

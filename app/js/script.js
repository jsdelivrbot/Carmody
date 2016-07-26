'use strict';

var model = {
	sections: [
		/*{
			title: ko.observable('Work Experience'),
			head: ko.observable(''),
			id: 'work',
			divID: 'work-info'
		},*/
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
			title: ko.observable('Home'),
			head: ko.observable(''),
			id: 'introduction',
			divID: 'intro'
		}/*,
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
		}*/
	],
	background: ko.observable('img/computer.jpg'),
	contact: [
		{
			name: 'Jack Masterson',
			career: 'Front End Web Developer',
			location: 'Greater New York City Area',
			cell: '(908)433-0178',
			email: 'jackmasterson5@gmail.com',
			imgNav: [
				{
					title: 'linkedIn',
					imgHref: 'https://linkedin.com/in/mastersonjack',
					imgSrc: 'img/linkedin.png',
					id: 'linked'
				},
				{
					title: 'gitHub',
					imgHref: 'https://github.com/jackmasterson',
					imgSrc: 'img/gitHub.png',
					id: 'git'
				},
				{
					title: 'resume',
					imgHref: 'https://www.dropbox.com/s/cyry9l9hposiv4p/Jack%20Masterson_Resume.docx?dl=0',
					imgSrc: 'img/dropRes.png',
					id: 'dropRes'
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
			school: 'Boston College',
			url: 'http://www.bc.edu/',
			focus: 'B.A., English',
			heading: 'GPA: ',
			GPA: '3.646, cum laude',
			img: 'img/bc.png',
			skills: 'Effective Communication, In-Depth Analysis, Presentation Skills',
			id: 'bc'
		},
		{
			school: 'Udacity',
			url: 'https://www.udacity.com',
			focus: 'Nanodegree, Front End Web Development',
			heading: 'Skills: ',
			skills: {
				languages: 'javascript, HTML5, CSS3',
				frameworks: 'jQuery, Bootstrap, ',
				other: 'GitHub, Knockout, gulp, ngrok'
			},
			GPA: 'HTML5, CSS3, JavaScript, jQuery, Bootstrap, ' +
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
					style: 'My outlet for pent-up sarcasm.',
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
					style: 'Abroad blogs exist to be made fun of.',
					src: 'img/abroad.png',
					href: 'http://jackisabroad.blogspot.com/'
				},
			]
		}/*,
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
		}*/
	],
	projects: [
		{
			title: 'Udacity Projects',
			divider: ['|'],
			text: 'Everything I completed in Udacity\'s Nanodegree program.',
			href: 'collapseOne',
			clickHref: '#collapseOne',
			id: 'ud-head',
			src: 'img/udacity.png',
			examples: [
				{
					name: 'Neighborhood Map',
					url: 'https://cdn.rawgit.com/jackmasterson/mapped/master/app/index.html',
					date: 'March 3 - May 10, 2016',
					skills: ['Knockout/MVVM', ' Google Maps API', ' Magic Seaweed API ', ' Search Bar on Type'],
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
					img: [
						{
							first: 'img/map.png',
							second: 'img/map2.png'
						}
					]
				},
				{
					name: 'Froggerish',
					url: 'https://cdn.rawgit.com/jackmasterson/canvasArcade/master/app/index.html',
					date: 'January 8, 2015 - February 7, 2016',
					skills: ['HTML5 Canvas', ' Separation of Concerns', 'Object Prototypes ', 'Code Simplification '],
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
					img: [
						{
							first: 'img/arcade.png',
							second: 'img/iron-arcade.png'
						}
					],
					link: 'https://github.com/jackmasterson/canvasArcade/tree/master/app'
				},				
				{
					name: 'Writing Tests',
					url: 'https://rawgit.com/jackmasterson/jasmine/master/index.html',
					date: 'May 18 - May 28, 2016',
					skills: ['Jasmine', ' Test-Driven Development'],
					description: "Filler Text",
					img: [
						{
							first: 'img/jasmine-one.png',
							second: 'img/jasmine-two.png'
						}
					]
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
					img: [
						{
							first: 'img/resume.png',
							second: 'img/resume-work.png'
						}
					]
				},
			]
		},
		{
			title: 'Templates',
			divider: ['|', '|'],
			text: 'Design templates I\'ve been working on '+
				'for practice.',
			href: 'collapseTwo',
			clickHref: '#collapseTwo',
			id: 'temp-head',
			src: 'img/hammer.png',
			examples: [
				{
					name: 'The Coffee Place',
					url: 'https://rawgit.com/jackmasterson/bagels/master/index.html',
					date: 'May 22 - May 31, 2016',
					description: 'Filler text',
					skills: ko.observable(''),
					img: [
						{
							first: 'img/coffee-one.png',
							second: 'img/coffee-two.png'
						}
					]
				},
				{
					name: 'Bar Template',
					url: 'https://rawgit.com/jackmasterson/bars/master/index.html',
					date: 'June 7, 2016',
					description: 'Beth is getting married!',
					skills: ko.observable(''),
					img: [
						{
							first: 'img/barOne.png',
							second: 'img/barTwo.png'
						}
					]
				},
				{
					name: 'Cooking Template',
					url: 'https://rawgit.com/jackmasterson/cooking/noNav/index.html',
					date: 'June 6 - June 7, 2016',
					description: 'Beth is getting married!',
					skills: ko.observable(''),
					img: [
						{
							first: 'img/cookingOne.png',
							second: 'img/cookingTwo.png'
						}
					]
				},
				{
					name: 'Pack-A-Day',
					url: 'https://rawgit.com/jackmasterson/charity-example/master/index.html',
					date: 'Started April 30, 2016',
					description: 'Filler text',
					skills: ko.observable(''),
					img: [
						{
							first: 'img/packaday.png',
							second: 'img/pack-school.png'
						}
					]
				},
				{
					name: 'Shore Fun Improv',
					url: 'https://cdn.rawgit.com/jackmasterson/improv/master/index.html#/',
					date: 'Mar 4 - May 6, 2016',
					description: 'It sure is fun!',
					skills: ko.observable(''),
					img: [
						{
							first: 'img/improv-head.png',
							second: 'img/improv.png'
						}
					]
				}
			]
		},
		{
			title: 'APIs',
			divider: ['|', '|', '|'],
			text: 'APIs I have experience with '+
				'including Spotify, Fantasy Football, Google Charts/Geolocation, and more.',
			href: 'collapseFour',
			clickHref: '#collapseFour',
			id: 'api-head',
			src: 'img/globe.png',
			examples: [
				{
					name: 'Calorie Tracker Health App',
					url: 'https://rawgit.com/jackmasterson/HealthApp/master/index.html',
					date: 'May 20 - May 30, 2016',
					skills: ['BackboneJS', ' Underscore', ' Self-taught through documentation'],
					description: "Filler Text",
					img: [
						{
							first: 'img/calorie-two.png',
							second: 'img/calorie-one.png'
						}
					]
				},
				{
					name: 'Music App',
					url: '#/',
					date: 'Started June 10, 2016',
					description: 'Filler text',
					skills: ['Spotify API', ' oAuth', ' Autofill', ' Up-voting'],
					img: [
						{
							first: 'img/musicTwo.png',
							second: 'img/musicOne.png'
						}
					]
				},
				{
					name: 'Cause of Death App',
					url: 'https://rawgit.com/jackmasterson/nycstats/master/index.html',
					date: 'Started June 17, 2016',
					description: 'It sure is fun!',
					skills: ['Google Charts API', ' Socrata ODN API'],
					img: [
						{
							first: 'img/deathOne.png',
							second: 'img/deathTwo.png'
						}
					]
				},
				{
					name: 'Sports Draft App',
					url: '#/',
					date: 'Started June 25, 2016',
					description: 'It sure is fun!',
					skills: ['Google Geolocation', ' Fantasy Football API'],
					img: [
						{
							first: 'img/sportsOne.png',
							second: 'img/sportsTwo.png'
						}
					]
				}/*,
				{
					name: 'Wedding Page - BARM',
					url: 'https://cdn.rawgit.com/jackmasterson/BARM/master/index.html',
					date: 'Started February 12, 2016',
					description: 'Beth is getting married!',
					skills: ko.observable(''),
					img: [
						{
							first: 'img/no-photos.png',
							second: 'img/no-photos.png'
						}
					]
				}*/
			]
		},
		{
			title: 'Published Projects',
			divider: ['|', '|', '|', '|'],
			text: 'Projects that are live, including two very different wedding landing '+
				'pages.',
			href: 'collapseThree',
			clickHref: '#collapseThree',
			id: 'pub-head',
			src: 'img/book.png',
			examples: [
				{
					name: 'Wedding Page One',
					url: '#/',
					date: 'November 15 - Dec 19, 2015',
					description: 'Created a landing page for a wedding' +
						' for a client that happens to be my sister. ' +
						'Includes a slideshow, Bootstrap features, jQuery,' +
						' and any and all information' +
						' someone could want when attending a wedding' +
						' in the area.',
					skills: 'For privacy, I have not included a link to this page.',
					img: [
						{
							first: 'img/grub.png',
							second: 'img/sass-beer.png'
						}
					]
				},
				{
					name: 'Wedding Page Two',
					url: '#/',
					date: 'Started May 31, 2016',
					description: 'Filler Text',
					skills: 'For privacy, I have not included a link to this page.',
					img: [
						{
							first: 'img/weddingOne.png',
							second: 'img/weddingTwo.png'
						}
					]
				}
			]
		}
	]
};



var viewModel = {
	init: function(){
	//	divider.init();
	//	toggle.fadeScroll();

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
		var clickedID = "#" + this.divID;
		var clickedHeadID = "#" + this.id;
		
		$('.light-back').hide();

		$(clickedID).fadeToggle('slow');
		$('.nav').css('color', 'black');
		$(clickedHeadID).css('color', 'gray');
		$('.intro-sub').show();
		if(this.divID === 'intro'){
			$('.scroll').hide();
			$('.intro').show();
			document.location.href="#/"
		}
		if(this.divID === 'portfolio'){
			$('.examples').hide();
			$('.scroll-up').hide();
			$('.port-nav').show();
			$('.divide-hide').show();
		}
		else {
			$('.port-nav').hide();
			$('.divide-hide').hide();
		}
		


	},

	moreInfo: function(clicked) {
		$('.show').show();
		
		$('.nav').css('color', 'black');
		$('#port').css('color', 'gray');

		$('.hide').hide();

		$('.hide').hide();
		document.location.href = "#search-div"
	},

	scrollUp: function(clicked){
		$('html, body').animate({
			scrollTop: $('.scroll').offset().top
		}, 800);
	},

	portTog: function(clicked){
		console.log(clicked);
		$('.examples').show();
		$('.port-sect').hide();
		$('.explain').hide();
		$('.scroll-up').show();
		$('.port-nav-img-div').hide();
		$('.intro-sub').hide();
		$('.divide-hide').hide();
		//$('#collapseThree').fadeIn();
		var clickedID = "#" + clicked.href;

	//	console.log(this);
		//console.log(this);
		$(clickedID).fadeIn('slow', function(){});
	},

	showCar: function(clicked) {
	//	console.log(clicked);
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


ko.applyBindings();

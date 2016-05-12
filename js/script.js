'use strict';

var model = {
	sections: [
		{
			title: ko.observable('Work Experience'),
			head: ko.observable(''),
			id: 'work',
			tog: function(){
				console.log('work');
				$('#work-info').slideToggle();
				$('html, body').animate({
					scrollTop: $('#work-info').offset().top
				}, 800);

			}
		},
		{
			title: ko.observable('Education'),
			head: ko.observable(''),
			id: 'edu',
			tog: function() {
				console.log('edu');
				$('#education').slideToggle();
				$('html, body').animate({
					scrollTop: $('#education').offset().top
				}, 800);
			}
		},
		{
			title: ko.observable('Portfolio'),
			head: ko.observable(''),
			id: 'port',
			tog: function(){
				console.log('portfolio');
				$('#portfolio').slideToggle();
				$('html, body').animate({
					scrollTop: $('#portfolio').offset().top
				}, 800);
			}
		},
		{
			title: ko.observable('Other Interests'),
			head: ko.observable(''),
			id: 'other',
			tog: function(){
				console.log('other');
				$('#interests').slideToggle();
				$('html, body').animate({
					scrollTop: $('#interests').offset().top
				}, 800);
			}
		},
		{
			title: ko.observable('Contact'),
			head: ko.observable(''),
			id: 'contact',
			tog: function(){
				$('.contact').slideDown();
				$('html, body').animate({
					scrollTop: $('#work-info').offset().top
				}, 800);
			}
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
			skills: ['blah1', 'blah2', 'blah3'],
			date: 'March 2014-July 2015'
		},
		{
			employer: 'Shawmut Design and Construction',
			title: 'Junior Marketing Coordinator',
			skills: ['stuff1', 'stuff2', 'stuff3'],
			date: 'June 2013-March 2014'
		}
	],
	education: [
		{
			school: 'Boston College',
			focus: 'B.A., English',
			skills: 'Communication, Analysis, Blah',
			honors: 'cum laude',
			GPA: '3.646'
		},
		{
			school: 'Udacity',
			focus: 'Nanodegree, Front End Web Development',
			skills: {
				languages: 'javascript, HTML5, CSS3',
				frameworks: 'jQuery, Bootstrap',
				other: 'GitHubKnockout, gulp, ngrok'
			},
			honors: '',
			GPA: ''
		}
	],
	interests: [
		{
			name: 'Writing',
			proof: 'Blogs',
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
			blogs: ko.observable(false)
		}
	],
	projects: [
		{
			title: 'Udacity Projects',
			href: 'collapseOne',
			clickHref: '#collapseOne',
			examples: [
				{
					name: 'Neighborhood Map',
					date: 'March 3 - May 10, 2016',
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
					date: 'January 8, 2015 - February 7, 2016',
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
					date: 'November 30, 2014 - Jan 3, 2015',
					description: 'I took some time off' +
						' in between Project 1 and 2, and boy was that' +
						' a misTAKE. Diving back in' +
						' took some time, and I took lesson 2 on JavaScript' +
						' at least three times before' +
						' I got the hang of it all again. Though I have to say,' +
						' there is no more rewarding' +
						' feeling than figuring out some code that has been' +
						' eluding you for hours/months.',
					img: 'img/ss7.png',
				}
			]
		},
		{
			title: 'Works in Progress',
			href: 'collapseTwo',
			clickHref: '#collapseTwo',
			examples: [
				{
					name: 'Pack-A-Day',
					date: 'Started April 30, 2016',
					description: 'Filler text',
					img: ''
				},
				{
					name: 'Shore Fun Improv',
					date: 'Started May 2, 2016',
					description: 'It sure is fun!',
					img: 'img/shoreFun.png'
				},
				{
					name: 'Wedding Page - BARM',
					date: 'Started February 12, 2016',
					description: 'Beth is getting married!',
					img: ''
				}
			]
		},
		{
			title: 'Published Projects',
			href: 'collapseThree',
			clickHref: '#collapseThree',
			examples: [
				{
					name: 'Wedding Page',
					date: 'November 15 - Dec 19, 2015',
					description: 'Created a landing page for a wedding' +
						' for a client that happens to be my sister. ' +
						'Includes a slideshow, Bootstrap features, jQuery,' +
						' and any and all information' +
						' someone could want when attending a wedding' +
						' in the area.',
					img: 'img/grub.png'
				}
			]
		}
	]
};

var viewModel = {
	init: function(){

	}
};

var toggle = {



    contactInfo: function() {
    	$('#contact').click(function(){
    		$('.contact').slideDown();
   		});
    },

    allDiv: function() {
    	$(document).ready(function () {
		    $('.click').click(function (e) {
		        e.stopPropagation();
		        var target = $(this).parent().find('.showup');
		        $('.showup').not(target).slideUp("fast");
		        target.slideToggle("fast");
		    });
		    $(".showup").on("click", function (e) {
		        e.stopPropagation();
		    });
		});

		$(document).on("click", function () {
		    $(".showup").slideUp("fast");
		});
    }
}

toggle.allDiv();

$(document).ready(function(){
	$('.carousel').slick({
		  infinite: false,
		  dots: true,
		  speed: 500,

      }); 
});

var workScroll = {

	render: function() {

	}
};

ko.applyBindings(viewModel.init());
var cont = document.getElementById('contact');
console.log(cont);

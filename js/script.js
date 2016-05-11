'use strict';

var model = {
	sections: [
		{
			title: ko.observable('Work Experience'),
			head: ko.observable('')
		},
		{
			title: ko.observable('Education'),
			head: ko.observable('')
		},
		{
			title: ko.observable('Skills'),
			head: ko.observable('')
		},
		{
			title: ko.observable('Other Interests'),
			head: ko.observable('')
		},
		{
			title: ko.observable('Contact'),
			head: ko.observable('')
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
			skills: ['blah1', 'blah2', 'blah3']
		},
		{
			employer: 'Shawmut Design and Construction',
			title: 'Junior Marketing Coordinator',
			skills: ['stuff1', 'stuff2', 'stuff3']
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
			proof: 'Samples',
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
			],
		},
		{
			name: 'Improv Comedy',
			proof: 'Coaching, Teaching, Performing',
			blogs: ko.observable(false)
		}
	]
};

var viewModel = {
	init: function(){
		
	}
};

$(document).ready(function(){
	$('.carousel').slick({
		  infinite: false,
		  speed: 500
      }); 
});

var workScroll = {

	render: function() {

	}
};

ko.applyBindings(viewModel.init());

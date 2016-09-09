'use strict';

angular.
	module('angWork').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/works', {
					template: '<works-list></works-list>'
				}).
				when('/works/:id', {
					template: '<works-detail></works-detail>'
				}).
				when('/', {
					template: '<main-foot></main-foot>'
				}).
				when('/links', {
					template: '<links-detail></links-detail>'
				}).
				when('/about', {
					template: '<about-details></about-details>'
				}).
				when('/about/:id', {
					template: '<about-more></about-more>'
				})
		}
	]);
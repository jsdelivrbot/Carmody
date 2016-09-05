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
				})
				when('/', {
					template: '<main-foot></main-foot>'
				})
		}
	]);
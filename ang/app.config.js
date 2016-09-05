'use strict';

angular.
	module('angWork').
	config(['$locationProvider', '$routeProvider',
		function config($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');

			$routeProvider.
				when('/', {
					template: '<main-splash></main-splash>'
				}).
				when('/works', {
					template: '<main-splash></main-splash><works-list></works-list>'
				})
		}
	]);
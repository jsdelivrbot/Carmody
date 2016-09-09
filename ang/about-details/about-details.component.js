'use strict';

angular.
	module('aboutDetails').
	component('aboutDetails', {
		templateUrl: 'about-details/about-details.template.html',
		controller: ['$http', '$routeParams', 
			function AboutDetailsController($http, $routeParams) {
				var self=this;

				$http.get('about/about.json').then(function(response){
					self.about = response.data;
					console.log(self.about);
				})
			}]
	})
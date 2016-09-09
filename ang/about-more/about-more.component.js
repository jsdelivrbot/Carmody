'use strict';

angular.
	module('aboutMore').
	component('aboutMore', {
		templateUrl: 'about-more/about-more.template.html',
		controller: ['$http', '$routeParams', 
			function AboutMoreController($http, $routeParams){
				var self = this;

				$http.get('about/more/' + $routeParams.id + '.json').then(function(response){
					self.more = response.data;
					console.log(self.more);
				})
			}]
	})
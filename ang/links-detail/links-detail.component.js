'use strict';

angular.
	module('linksDetail').
	component('linksDetail', {
		templateUrl: 'links-detail/links-detail.template.html',
		controller: ['$http', '$routeParams', 
			function LinksDetailController($http, $routeParams) {
				var self = this;

				$http.get('links/links.json').then(function(response){
					self.linkIt = response.data;
					console.log(self.linkIt);
				})
			}]
	})
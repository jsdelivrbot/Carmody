'use strict';

angular.
	module('worksDetail').
	component('worksDetail', {
		templateUrl: 'works-detail/works-detail.template.html',
		controller: ['$http', '$routeParams', 
			function WorksDetailController($http, $routeParams){
				var self = this;

				$http.get('details/' + $routeParams.id + '.json').then(function(response){
					self.details = response.data;
					console.log(response.data);
				})
			}]
	})
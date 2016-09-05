'use strict';

angular.
	module('worksDetail').
	component('worksDetail', {
		templateUrl: 'works-detail/works-detail.template.html',
		controller: ['$http', 
			function WorksDetailController($http){
				var self = this;

				$http.get('works/works.json').then(function(response){
					self.details = response.data;
					console.log(response.data);
				})
			}]
	})
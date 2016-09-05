'use strict';

angular.
	module('mainFoot').
	component('mainFoot', {
		templateUrl: 'main-foot/main-foot.template.html',
		controller: ['$http', '$routeParams', 
			function MainFootController($http, $routeParams){
				var self = this;

				$http.get('foot-info/foot-info.json').then(function(response){
					self.foot = response.data;
					console.log(self.foot);
				});
			}
		]
	});
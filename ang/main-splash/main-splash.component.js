angular.
	module('mainSplash').
	component('mainSplash', {
		templateUrl: 'main-splash/main-splash.template.html',
		controller: ['$http', '$routeParams', 
			function MainSplashController($http, $routeParams) {
				var self = this;

				$http.get('main/main.json').then(function(response){
					self.home = response.data;
					console.log(self.home);
				});
			}
		]
	});
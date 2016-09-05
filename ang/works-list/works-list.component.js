angular.
	module('worksList').
	component('worksList', {
		templateUrl: 'works-list/works-list.template.html',
		controller: ['$http', '$routeParams', 
			function WorksListController($http, $routeParams) {
				var self = this;

				$http.get('works/works.json').then(function(response){
					self.works = response.data;
					console.log(self.works);
				});
			}
		]
	});
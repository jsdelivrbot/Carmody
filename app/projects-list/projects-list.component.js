'use strict';

//register the component

angular.
	module('projectsList').
	component('projectsList', {
		templateUrl: 'projects-list/projects-list.template.html',
		controller: ['$http', 
			function ProjectsListController($http) {
				var self = this;
				
				$http.get('projects/projects.json').then(function(response){
					self.projects = response.data;
					console.log(self.projects);
				});
			}
		]
	});
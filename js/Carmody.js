var = headers {
	"work" = "Work",
	"bio" = "Bio",
	"interests" = "Interests",
	"skills" = "Skills",
	"contact" = "Contact"

};

$("#header").prepend(headers.work);


var employment = {
	"jobs": [{
		"employer": "Shawmut Design and Construction",
		"title": "Junior Marketing Coordinator",
		"dates": "September 2013-June 2014",
		"responsibilities": [
		"Editing", "Proofreading", "Marketing", "Jr. Coordination"
		]
	}]
}

$("#work2").append(employment.jobs.employer);
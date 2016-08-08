      	var w = 200;
		var h = 200;
		var margin = 20;
		var applicants = 29486;
		var acceptanceRate = 0.29;
		var honorsRate = 0.30;
		var rad = 5;
		var transition = d3.transition();
		var all = [];
		var second = [];
			var randCoord = function(){
				var rand = Math.random() * (w - 0) + 0;
				return rand
			}
		for(var i=0; i<w; i+=10){
			all.push(i);
			//console.log(i);
			//all.push([randCoord(), randCoord()])
		}
		var body = d3.select('body')
			.append('div')
		//	.attr('class', 'new-charts')
		//	.attr('border', '2px solid black')
			.append('svg')
			.attr('width', w)
			.attr('height', h);

		var svg = d3.select('svg');
		function row(space, classed) {
			svg.selectAll(classed)
				.data(all)
				.enter()
				.append('circle')
				.attr('class', classed)
				.attr('cx', function(d, i){
					return all[i] + margin;
				})
				.attr('cy', function(d, i){
					return space + margin; //h = height; d=value 
				})
				.attr('r', function(d){
					return 5;
				})
				.attr('width', 5)
				.attr('height', function(d){
					return rad;
				})
				.attr('fill', 'black');
		}

		for(var i=0; i<w; i+=10){
			var classy = 'array'+i;
			row(i, classy);

		}


		var secondRate = acceptanceRate;





		svg.selectAll('circle')
			.transition()
			.attr('fill', function(d, i, h){
				if(d < ((acceptanceRate)*w)){

					return 'maroon'
				}
			})
			.attr('class', function(d){
				if(d < ((acceptanceRate) * w)){
					return 'accepted'
				}
			})
			.duration(900)
			.delay(2000)
			.transition()
			.attr('visibility', function(d){
				if(d > ((acceptanceRate) * w)){
					return 'hidden'
				}
			})
			.delay(2000)
			.duration(900)
			.transition()
			.attr('fill', function(d){
				if(d < ((honorsRate * acceptanceRate) * w)){
					return 'gold'
				}
				else {
					return 'maroon'
				}
			})
			.delay(1000)
			.duration(900);









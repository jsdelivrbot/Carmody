canvas = document.createElement('canvas');

var model = {
	eachWind: ko.observableArray()
};

var Window = function(y) {

	this.sprite = 'img/window.png';
	this.x = 100;
	this.y = y
};

Window.prototype.update = function() {


};

Window.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), 
    	this.x, this.y);
};

var createWindows = {

	init: function() {

		var yArray = [150, 80, 120];
		yArray.forEach(function(each){
			model.eachWind.push(each);
					model.eachWind().forEach(function(all){
			console.log(all);
			wind = new Window(all);
			console.log(wind);
			wind.render();
		});

		});



	}
};



//var winds = new Window();


var Player = function() {

	this.sprite = 'img/robot.png';
	this.x = 0;
	this.y = 330;
};

Player.prototype.update = function() {


    if(player.x <0){
    	player.x = 0;
    }
    if(player.x >800){
    	player.x = 800;
    }

};

Player.prototype.render = function() {

	ctx.drawImage(Resources.get(this.sprite), 
    	this.x, this.y);
};

Player.prototype.handleInput = function() {
	var time = new Date().getTime() * (0.0002);
	var speed = (Math.tan(time) * 600 + 100);
	var that = this;

    if (event.keyCode == 37) {
       this.x += 100; 
    }
    if (event.keyCode == 39) {
        this.x += 100;
    }

    if (event.keyCode == 74){
    	this.y += -90; 	
    	
    	function down(){
    		that.y += 90;
    	};
    	setTimeout(down, 200);
    }
};

document.addEventListener('keyup', function(e) {
    
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});

var player = new Player();

startMeUp();
createWindows.init();

ko.applyBindings();
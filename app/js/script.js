canvas = document.createElement('canvas');



var Player = function() {

	this.sprite = 'img/robot.png';
	this.x = 0;
	this.y = 330;
};

Player.prototype.update = function() {

    if(player.y > 330 || player.y <330 ){
    	player.y = 330;
    }
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

    if (event.keyCode == 37) {
        this.x -= 100;
    }
    if (event.keyCode == 39) {
        this.x += 100;
    }
    if (event.keyCode == 38) {
        this.y -= 90;
    }
    if (event.keyCode == 40) {
        this.y += 90;
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
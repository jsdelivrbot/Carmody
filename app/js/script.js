'use strict';

var canvas = document.createElement('canvas');

var model = {
	eachWind: ko.observableArray(),
    eachDoor: ko.observableArray(),
    eachHeader: ko.observableArray(),
    floorNum: ko.observable(),
    floorName: [
        {
            name: 'Projects',
            navId: 'projects',
            src: ko.observable('img/desk.png'),
            project: [{
                src: 'img/udacity.png',
                name: 'Udacity Projects',
                picId: 'udacity',
                allId: 'projects-sub'
            }, {
                src: 'img/template.png',
                name: 'Templates',
                picId: 'template',
                allId: 'projects-sub'
            }, {
                src: 'img/globe.png',
                name: 'APIs',
                picId: 'api',
                allId: 'projects-sub'
            }, {
                src: 'img/book.png',
                name: 'Published Projects',
                picId: 'published',
                allId: 'projects-sub'
            }]
        }, {
            name: 'Education',
            navId: 'education',
            src: ko.observable('img/notebook.png'),
            project: [{
                src: 'img/bc.png',
                name: 'Boston College',
                allId: 'school',
                picId: 'boston-college'
            }, {
                src: 'img/udacity.png',
                name: 'Udacity',
                allId: 'school',
                picId: 'udacity-college'
            }]
        }, {
            name: 'Extras',
            navId: 'extras',
            src: ko.observable('img/notebook.png'),
            project: ko.observable(false)
        }, {
            name: 'Resume',
            navId: 'resume',
            src: ko.observable('img/notebook.png'),
            project: ko.observable(false)
        }, {
            name: 'GitHub',
            navId: 'github',
            src: ko.observable('img/notebook.png'),
            project: ko.observable(false)
        }, {
            name: 'LinkedIn',
            navId: 'linkedin',
            src: ko.observable('img/notebook.png'),
            project: ko.observable(false)
        }
    ]
};

var viewModel = {

    init: function() {

        viewModel.createHeaders();
        viewModel.createDoor();
        startMeUp();

    },

    createHeaders: function() {

        var y = 210;
        var xArray = [300, 500, 700];

        var head = new Header(300, 'resume-header.png');
        var head2 = new Header(500, 'portfolio-header.png');
        var head3 = new Header(700, 'school-header.png');

        model.eachHeader.push(head, head2, head3);

    },

    createDoor: function() {
        
        var yArray = [300, 370, 423];
        yArray.forEach(function(each){
            var door = new Door(300, each);
            var door2 = new Door(500, each);
            var door3 = new Door(700, each);
            model.eachDoor.push(door);
            model.eachDoor.push(door2);
            model.eachDoor.push(door3);
        });
    },

    doorChoice: function() {
        console.log(player.x, player.y);
        if(player.x == 500){
            
            viewModel.selectProjects();
            viewModel.fade();
        }
        if(player.x == 700){
            viewModel.selectEdu();
            viewModel.fade();
        }

        if(player.x == 300){
            viewModel.selectResume();
            player.x = 0;
        }
        
    },

    fade: function() {

        $('.canvas').fadeOut();
        
    },

    selectProjects: function() {

        console.log('projects selected!');
        $('.sections').fadeIn();
        $('.all-sections').hide();
        $('#projects').show();
    },

    selectEdu: function() {
        console.log('education selected!');
        $('.sections').fadeIn();
        $('.all-sections').hide();
        $('#education').show();

    },

    selectResume: function() {

        window.open("https://www.dropbox.com/s/mz6405mwjwymdjf/Jack%20Masterson_Resume.docx?dl=0");
    }
};

var Window = function(x, y) {

	this.sprite = 'img/window.png';
	this.x = x;
	this.y = y;
};

Window.prototype.update = function() {


};

Window.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), 
    	this.x, this.y);
};

var Door = function(x, y) {
    this.sprite = 'img/blackbox.png';
    this.x = x;
    this.y = y;

};

Door.prototype.update = function( ){

};

Door.prototype.render = function() {
    
    ctx.drawImage(Resources.get(this.sprite), 
        this.x, this.y);

};

var Header = function(x, sprite) {

    this.sprite = 'img/'+sprite;
    this.x = x;
    this.y = 210;

};

Header.prototype.update = function() {

};

Header.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),
        this.x, this.y);

};


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
       this.x += -100; 
    }
    if (event.keyCode == 39) {
        this.x += 100;
    }

    if (event.keyCode == 38) {
        viewModel.doorChoice();
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


var going = {

    up: function(){
        console.log('going up!');
        $('.canvas-header').hide();
        $('.canvas').animate({
            width: 0.25
        }, 'slow', function(){
            $('.welcome').fadeIn();
            $('.splash').fadeOut(function() {
                $('.black').fadeIn('slow');
            });
        });
    },

    down: function() {
        console.log('going down!');
    },

    floorChoice: function() {

        var clickId = '#'+this.navId;
        $('.black').fadeOut(function(){
            $('.sections').show();
            $('.all-sections').hide();
            $(clickId).show();
        });
    }
};

var hover = {

    over: function() {
        var clickId = "."+this.picId;
        console.log(clickId);
        $(clickId).css('opacity', '1');

    },

    out: function() {
        var clickId = "."+this.picId;
        $(clickId).css('opacity', '0.7');
    }
};

var back = {

    init: function() {
        $('.sections').fadeOut(function() {
            $('.canvas').fadeIn();
            player.x = 0;
        });

        
    }
};

var player = new Player();
var wind = new Window();
var door = new Door();
var header = new Header();

ko.applyBindings(viewModel.init());
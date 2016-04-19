var Player = cc.Sprite.extend({
	ctor: function(){
		this._super();
		this.initWithFile('res/images/sloth.png');
		this.vy = 15;
		
		this.started = false;
	},
	update: function (dt){
		var pos = this.getPosition();
		switch (this.direction){
		case 1:
			this.direction = Player.DIR.UP;
			this.vy += -1;
		case 2:
			this.direction = Player.DIR.DOWN;
			this.vy -= 1;
		}
		
	},
    start: function() {
       this.started = true;
   },
    stop: function(){
        this.started = false;
    }
	
});

Player.DIR = {
		UP: 1,
		DOWN: 2,
},
Player.G = -1;
Player.STARTING_VELOCITY = 15;
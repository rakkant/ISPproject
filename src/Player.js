var Player = cc.Sprite.extend({
	ctor: function(){
		this._super();
		this.initWithFile('res/images/sloth.png');
		this.speed = 15;

		this.started = false;
	},
	update: function (dt){
//		var pos = this.getPosition();
//		switch (this.direction){
//		case 1:
//		this.direction = Player.DIR.UP;

//		this.setPosition( new cc.Point(pos.x ,pox.y + this.vy ));
//		case 2:
//		this.direction = Player.DIR.DOWN;
//		this.setPosition( new cc.Point(pos.x ,pox.y - this.vy ));

//		}

	},
	moveUp : function (){
		var pos = this.getPosition();
		if (pos.y < 470 ){
			this.setPosition( new cc.Point ( pos.x , pos.y + this.speed +1));
		}
	},
	moveDown : function (){
		var pos = this.getPosition();
		if (pos.y > 90 ){
		this.setPosition( new cc.Point ( pos.x , pos.y - this.speed ));
		}
	},
	start: function() {
		this.started = true;
	},
	stop: function(){
		this.started = false;
	},
	slowDown : function(){
		this.speed -= 1;
	}

});

Player.DIR = {
		UP: 1,
		DOWN: 2,
},
Player.G = -1;
Player.STARTING_VELOCITY = 15;
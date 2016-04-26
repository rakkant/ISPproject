var Player = cc.Sprite.extend({
	ctor: function(){
		this._super();
		this.initWithFile('res/images/sloth.png');
		this.speed = 2;
		this.checkUp = false;
		this.checkDown = false;
		this.started = false;

	},
	update : function (){
		if (this.checkUp ){
			this.moveUp();
		}else if (this.checkDown){
			this.moveDown();
		}
	},
	moveUp : function (){
		var pos = this.getPosition();
		this.checkUp = true;
		this.checkDown = false;
		if (pos.y < 470 ){
			this.setPosition( new cc.Point ( pos.x , pos.y + this.speed +1));	
		}
	},
	moveDown : function (){
		var pos = this.getPosition();
		this.checkDown = true;
		this.checkUp = false;
		if (pos.y > 90  ){
		this.setPosition( new cc.Point ( pos.x , pos.y - this.speed -1));
		}
	},
	start: function() {
		this.started = true;
	},
	die: function(){
		this.started = false;
	},
	slowDown : function(){
		this.speed -= 1;
	}

});

Player.DIR = {
		UP: 1,
		DOWN: 2,
}
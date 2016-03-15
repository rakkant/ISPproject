var Player = cc.Sprite.extend({
	ctor: function(){
		this._super();
		this.initWithFile('res/images/sloth.png');
		this.vy = 15;
		this.started = false;
	},
	
})
var pillow = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/pillow1.png' );

    },
    update: function( dt ){
		var pos = this.getPosition();
		this.setPosition( new cc.Point( pos.x+35 , pos.y));  
		this.settingPos();

	},
	settingPos: function(){
		var pos = this.getPosition();  
		if( pos.x > 800 ){
			this.setPosition( new cc.Point( 0,  Math.random()*600));  
		}
	}
});
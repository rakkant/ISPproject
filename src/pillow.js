var pillow = cc.Sprite.extend({
	ctor: function() {
		this._super();
		this.initWithFile( 'res/images/pillow1.png' );

	},
	update: function( dt ){
		var pos = this.getPosition();
		this.setPosition( new cc.Point( pos.x+32 , pos.y));  
		this.settingPos();

	},
	settingPos: function(){
		var pos = this.getPosition();  
		if( pos.x > 800 ){			
				this.setPosition( new cc.Point( 0,  500-(Math.random()*600)+50));  
		}
	},
	closeTo: function( obj ) {
		var myPos = this.getPosition();
		var oPos = obj.getPosition();
		return ( ( Math.abs( myPos.x - oPos.x ) <= 40 ) &&
				( Math.abs( myPos.y - oPos.y ) <= 40 ) );

	}
});
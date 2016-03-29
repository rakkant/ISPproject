var pillow = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/pillow1.png' );
    },
 
    randomPosition: function() {
        var x, y;
        x = Math.floor((Math.random() * 800) + 5)
        console.dir(x);
        y = Math.floor((Math.random() * 600) + 5)
        console.dir(y);
        return this.setPosition( new cc.Point( x, y ) );
         
    },
    closeTo: function( obj ) {
	var myPos = this.getPosition();
	var oPos = obj.getPosition();
  	return ( ( Math.abs( myPos.x - oPos.x ) <= 35 ) &&
		 ( Math.abs( myPos.y - oPos.y ) <= 35 ) );
    }
});
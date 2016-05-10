var EndGame = cc.Sprite.extend({

	init: function(){
		this._super();
		var animate = new cc.Animation.create();
		animate.addSpriteFrameWithFile('res/images/end1.jpg');
		animate.addSpriteFrameWithFile('res/images/end2.jpg');
		animate.setDelayPerUnit(0.6);
		var movingBackground = cc.RepeatForever.create (cc.Animate.create (animate));
		this.runAction (movingBackground);
		this.setPosition (new cc.Point (screenWidth /2, screenHeight / 2));

		this.score = score;
		this.scoreLabel = cc.LabelTTF.create( this.score + "", 'Arial', 21 );
		this.scoreLabel.setPosition( new cc.Point( 375, 151 ) );
		this.addChild( this.scoreLabel );
		
		this.addKeyboardHandlers();
		cc.audioEngine.playMusic("res/sound/animals.mp3", true);
	},

	addKeyboardHandlers : function(){
		var self = this;
		this.score = 0;
		cc.eventManager.addListener({
			event: cc.EventListener.KEYBOARD,
			onKeyPressed : function (keyCode, event){
				self.onKeyDown(keyCode, event);
			},
			onKeyReleased: function (keyCode, event){

			}
		}, this);
	},
	onKeyDown: function (keyCode, event){
		if (keyCode == 82){
			cc.director.runScene( new StartScene());
		}

	}


});
var EndScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var layer = new EndGame();
		layer.init();
		this.addChild(layer);
	}

});



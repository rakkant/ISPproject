var Background = cc.Sprite.extend({

	ctor: function(){

		this._super();
		var animate = new cc.Animation.create();
		animate.addSpriteFrameWithFile('res/images/sky1_bg.jpg');
		animate.addSpriteFrameWithFile('res/images/sky2_bg.jpg');
		animate.setDelayPerUnit(0.4);
		var movingBackground = cc.RepeatForever.create (cc.Animate.create (animate));
		this.runAction (movingBackground);
		cc.audioEngine.playMusic("res/sound/Helicopter.mp3", true);

	}



});


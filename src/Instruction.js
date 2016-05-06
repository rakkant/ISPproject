var Instruction = cc.Sprite.extend({

	ctor: function(){

		this._super();
		var animate = new cc.Animation.create();
		animate.addSpriteFrameWithFile('res/images/instruction1.jpg');
		animate.addSpriteFrameWithFile('res/images/instruction2.jpg');
		animate.setDelayPerUnit(0.4);
		var movingBackground = cc.RepeatForever.create (cc.Animate.create (animate));
		this.runAction (movingBackground);
		cc.audioEngine.playMusic("res/sound/animals.mp3", true);
		

	}



});
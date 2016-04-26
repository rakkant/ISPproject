var EndGame = cc.Sprite.extend({

	endPage: function(){

		this._super();
		var animate = new cc.Animation.create();
		animate.addSpriteFrameWithFile('res/images/end1.jpg');
		animate.addSpriteFrameWithFile('res/images/end2.jpg');
		animate.setDelayPerUnit(0.4);
		var movingBackground = cc.RepeatForever.create (cc.Animate.create (animate));
		this.runAction (movingBackground);

	}



});

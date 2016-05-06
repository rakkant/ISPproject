var StartPage = cc.Sprite.extend({

	init: function(){
		this._super();
		var animate = new cc.Animation.create();
		animate.addSpriteFrameWithFile('res/images/start1.jpg');
		animate.addSpriteFrameWithFile('res/images/start2.jpg');
		animate.setDelayPerUnit(0.6);
		var movingBackground = cc.RepeatForever.create (cc.Animate.create (animate));
		this.runAction (movingBackground);
		this.setPosition (new cc.Point (screenWidth /2, screenHeight / 2));
		this.createButtonStart();
		cc.audioEngine.playMusic("res/sound/animals.mp3", true);
	},
	createButtonStart : function(){
		this.playButtonItem = new cc.MenuItemImage('res/images/play1.png','res/images/play2.png',function() {
			this.playButton.setEnabled(false);
			cc.director.runScene( new Firstpage());
		},this);
		this.playButton = new cc.Menu(this.playButtonItem );
		this.playButton.setPosition(320, 170);
		this.addChild(this.playButton);
	}


});
var FirstSceneBeforeInstruction = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var layer = new StartPage();
		layer.init();
		this.addChild(layer);
	}

});



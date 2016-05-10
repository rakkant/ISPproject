var score = 0;

var GameLayer = cc.LayerColor.extend({
	init: function(){
		this.gamePause = false;

		this.background = new Background();
		this.addChild(this.background);
		this.background.setPosition (new cc.Point (screenWidth /2, screenHeight / 2));
		this.background.scheduleUpdate();


		this.pillow = new pillow();
		this.pillow.setPosition (new cc.Point (10, screenHeight / 2));
		this.addChild(this.pillow);
		this.pillow.scheduleUpdate();


		this.candy = new Candy();
		this.candy.setPosition (new cc.Point (10, screenHeight/2));
		this.addChild(this.candy);
		this.candy.scheduleUpdate();

		this.hole = new Hole();
		this.hole.setPosition (new cc.Point (10, screenHeight/2));
		this.addChild(this.hole);
		this.hole.scheduleUpdate();

		this.player = new Player();
		this.player.setPosition (new cc.Point (screenWidth/1.17 , screenHeight / 2));
		this.addChild(this.player);
		this.player.scheduleUpdate();

		score = 0;
		this.score = score;
		this.scoreLabel = cc.LabelTTF.create( this.score + "", 'Arial', 19 );
		this.scoreLabel.setPosition( new cc.Point( 180, 495 ) );
		this.addChild( this.scoreLabel );

		this.timeCountdown =  120;
		this.timeLabel = cc.LabelTTF.create( this.timeCountdown,  'Arial', 27);
		this.timeLabel.setAnchorPoint(0,0);
		this.timeLabel.setPosition(new cc.Point (630, 500))
		this.addChild(this.timeLabel);
		this.schedule(this.countdown,1);


		this.life = 10;
		this.lifeLabel = cc.LabelTTF.create( this.life + "", 'Arial', 27 );
		this.lifeLabel.setPosition (new cc.Point (490, 510));
		this.addChild(this.lifeLabel);

		this.scheduleUpdate();
		this.addKeyboardHandlers();

		return true;
	},
	addKeyboardHandlers : function(){
		var self = this;
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
		this.startGame();

		if (keyCode == cc.KEY.up){
			this.player.moveUp();

		}
		else if ( keyCode  == cc.KEY.down){
			this.player.moveDown();
		}


	},
	update: function (){
		var speed = 4;
		if (this.candy.closeTo (this.player)){
			score += 1;
			this.scoreLabel.setString(parseInt(score)) ;
			this.candy.setPosition(new cc.Point (10, Math.random()*450)) ;

		}
		if (this.hole.closeTo(this.player)){
			cc.director.runScene(new EndScene());
		}
		if (this.pillow.closeTo(this.player)){
			this.pillow.setPosition(new cc.Point (10, Math.random()*450)) ;
			this.life -=1;
			this.player.speed -= 0.05;
			this.timeCountdown -=2;
			this.timeLabel.setString(this.timeCountdown);
			this.lifeLabel.setString(parseInt(this.life));
			if (this.life == 0){
				this.removeAllChildren();
				cc.director.runScene(new EndScene());
			}

		}
	},
	startGame: function() {
		this.player.start();
	},
	
	countdown: function(){
		this.timeCountdown--;
		this.timeLabel.setString(this.timeCountdown);
		if(this.timeCountdown == 0){
			this.removeAllChildren();
			cc.director.runScene(new EndScene());
		}
	}

});

var StartScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var layer = new GameLayer();
		layer.init();
		this.addChild(layer);
	}
});
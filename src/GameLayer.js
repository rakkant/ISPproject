var GameLayer = cc.LayerColor.extend({
	init: function(){
		
		this.background = new Background();
		this.addChild(this.background);
		this.background.setPosition (new cc.Point (screenWidth /2, screenHeight / 2));
		this.background.scheduleUpdate();

		
//		this.pillow = new pillow();
//		this.addChild(this.pillow);
//		this.pillow.setPosition (new cc.Point (screenWidth /2, screenHeight / 2));
//		
//		this.candy = new candy();
//		this.addChild(this.candy);
//		this.candy.setPosition (new cc.Point (screenWidth/2, screenHeight/3));
//		
		this.player = new Player();
		this.player.setPosition (new cc.Point (screenWidth/1.2 , screenHeight / 2));
		this.addChild(this.player);
		this.player.scheduleUpdate();
        this.addKeyboardHandlers();
        
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 19 );
    	this.scoreLabel.setPosition( new cc.Point( 180, 495 ) );
    	this.addChild( this.scoreLabel );
    	
    	this.heart = new heart();
		this.addChild(this.heart);
		this.heart.setPosition (new cc.Point (490, 510));
    		
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
//				self.onKeyUp (keyCode, event);
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
	},
	startGame: function() {
        this.player.start();
        this.background.drawTime();
        this.background.decreaseTime();
    },
    
});

var StartScene = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var layer = new GameLayer();
		layer.init();
		this.addChild(layer);
	}
});
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
		this.player.setPosition (new cc.Point (screenWidth/1.2 , screenHeight / 2));
		this.addChild(this.player);
		this.player.scheduleUpdate();
        
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 19 );
    	this.scoreLabel.setPosition( new cc.Point( 180, 495 ) );
    	this.addChild( this.scoreLabel );
    	
    	this.time = cc.LabelTTF.create( '2.00', 'Arial', 25 );
		this.time.setPosition( new cc.Point( 649, 520 ) );
		this.addChild (this.time);
		
    	
    	this.heart = new heart();
		this.addChild(this.heart);
		this.heart.setPosition (new cc.Point (490, 510));
    	
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
		if (this.candy.closeTo (this.player)){
			 this.scoreLabel.setString(parseInt(this.scoreLabel.string)+1) ;
			 this.candy.setPosition(new cc.Point (10, Math.random()*600));
			 
		}
	},
	startGame: function() {
        this.player.start();
        this.time.setString(parseInt(this.time.string)-0.01) ;
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
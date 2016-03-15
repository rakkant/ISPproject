var GameLayer = cc.LayerColor.extend({
	init: function(){
		this._super();
		
		this.player = new Player();
		this.player.setPosition (new cc.Point (screenWidth /2, screenHeight / 5));
		this.addChild(this.player);
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
		if (keyCode == cc.KEY.left){
			
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
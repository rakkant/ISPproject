var RunGame = cc.LayerColor.extend({
	init: function(){
		this.instruction = new Instruction();
		this.addChild(this.instruction);
		this.instruction.setPosition (new cc.Point (screenWidth /2, screenHeight / 2));
		this.instruction.scheduleUpdate();
		this.addKeyboardHandlers();
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
		if (keyCode == 13){
		
			cc.director.runScene( new StartScene());
		}
		
	}
});
var Firstpage = cc.Scene.extend({
	onEnter : function(){
		this._super();
		var layer = new RunGame();
		layer.init();
		this.addChild(layer);
	}
});
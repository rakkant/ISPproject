var Timer = cc.Node.extend({
    ctor: function(time){
        this._super();
        
        this.time = time;
        
        this.state = Timer.STATE.START;
        
      this.digit = digit
        
        this.FirstDigit = cc.Sprite.create(this.digit[0]);
        this.FirstDigit.setAnchorPoint(new cc.Point(0,0));
        this.FirstDigit.setPosition(new cc.Point(0,0));
        this.addChild(this.FirstDigit)
        
        this.SecondDigit = cc.Sprite.create(this.digit[6]);
        this.SecondDigit.setAnchorPoint(new cc.Point(0,0));
        this.SecondDigit.setPosition(new cc.Point(40,0));
        this.addChild(this.SecondDigit)
        
        this.ThirdDigit = cc.Sprite.create(this.digit[0]);
        this.ThirdDigit.setAnchorPoint(new cc.Point(0,0));
        this.ThirdDigit.setPosition(new cc.Point(80,0));
        this.addChild(this.ThirdDigit)
    },
    
    update: function(dt){
        this.time -= dt;
        digit1 = Math.floor((this.time/100)%10);
        digit2 = Math.floor((this.time/10)%10);
        digit3 = Math.floor(this.time%10);
        
        if (this.state == Timer.STATE.START) {
            this.FirstDigit.initWithFile(this.digit[digit1])
            this.SecondDigit.initWithFile(this.digit[digit2])
            this.ThirdDigit.initWithFile(this.digit[digit3])
        }
        if (this.time<1) {
            this.state = Timer.STATE.OVER;
        }
    },
    
    setTime: function(time){
        this.time = time;
    },
    
    setState: function(STATE) {
        this.state =STATE;
    },
    isGameOver: function(){
        if(this.state == Timer.STATE.OVER) {
            this.removeAllChildren();
            return true;
        }
        return false;
    }
    
});
Timer.STATE = {
    START:1,
    STOP:0,
    OVER:-1
}
function Game() {
	/*
	 * Gets canvas information and context and sets up all game
	 * objects.
	 * Returns true if the canvas is supported and false if it
	 * is not. This is to stop the animation script from constantly
	 * running on older browsers.
	 */
	this.init = function() {
		// Get the canvas element
		this.bgCanvas = document.getElementById('background');
		// Test to see if canvas is supported
		if (this.bgCanvas.getContext) {
			this.bgContext = this.bgCanvas.getContext('2d');
			// Initialize objects to contain their context and canvas
			// information
			Background.prototype.context = this.bgContext;
			Background.prototype.canvasWidth = this.bgCanvas.width;
			Background.prototype.canvasHeight = this.bgCanvas.height;
			// Initialize the background object
			this.background = new Background();
			this.background.init(0,0); // Set draw point to 0,0
			return true;
		} else {
			return false;
		}
	};
	// Start the animation loop
	this.start = function() {
		animate();
	};
}

var game = new Game();
function init() {
	if(game.init())
		game.start();
}
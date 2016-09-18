// Defaults

new BackgroundLayer({
	backgroundColor: '#2c3e50',
});

// Layers

var stateOneCircle = new Layer({
	originX: 0,
	originY: 1,
	index: 2,
	x:0,
	y:0,
	width:80,
	height:80,
	borderRadius: 40,
	backgroundColor: '#2ecc71',
	shadowBlur: 16,
	shadowY: 8,
	shadowColor: '#212f3c',
});
stateOneCircle.center();

var stateOneInfo = new Layer({
	superLayer: stateOneCircle,
	width: 80,
	height: 80,
	image: 'images/microinteraction1-state1.png',
});

var stateTwoRectangle = new Layer({
	x:0,
	y:0,
	index: 1,
	z: 100,
	width: 360,
	height: 160,
	borderRadius: 4,
	backgroundColor: '#2ecc71',
	opacity: 0,
	blur: 1,
	shadowBlur: 16,
	shadowY: 8,
	shadowColor: '#212f3c',
});
stateTwoRectangle.centerX(140);
stateTwoRectangle.centerY(-40);

var stateTwoInfo = new Layer({
	width: 360,
	height: 160,
	superLayer: stateTwoRectangle,
	image: 'images/microinteraction1-state2.png',
});

// States

stateOneCircle.states.add({
	second: {
		scaleX: 4.5,
		scaleY: 2,
		borderRadius: 0,
		opacity:0,
	},
});

stateOneInfo.states.add({
	second: {
		opacity: 0,
	}
});

stateTwoRectangle.states.add({
	second: {
		opacity: 1,
		blur: 0,
	}
});

// Animations


stateOneCircle.states.animationOptions = {
	curve: "spring(300,30,0)",
};

stateTwoRectangle.states.animationOptions = {
	time: 0.2,
};

stateOneInfo.states.animationOptions = {
	time: 0.2,
};

stateOneCircle.onAnimationStart(function(){
	stateTwoRectangle.states.next();
	stateOneInfo.states.next();
});

// Events
stateOneCircle.on(Events.Click, function() {
	stateOneCircle.states.next();
});

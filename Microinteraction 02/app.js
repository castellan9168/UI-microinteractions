// Defaults

new BackgroundLayer({
	backgroundColor: '#2c3e50',
});

// Layers

var symbol = new Layer({
	x: 0,
	y: 0,
	width: 100,
	height: 100,
	backgroundColor: '#ecf0f1',
	borderRadius: 50,
	blur: 0.5,
});
symbol.center();

var symbolSuccessIcon = new Layer({
	superLayer: symbol,
	width: symbol.width,
	height: symbol.height,
	image: 'images/microinteraction2-icon-success.png',
	backgroundColor: 'transparent',
	opacity: 0,
	scale: 1.1,
	blur: 1,
});

var progressBar = new Layer({
	x: 0,
	y: 0,
	width: 160,
	height: 4,
	backgroundColor: '#566573',
});
progressBar.centerX();
progressBar.centerY(75);

var progressBarPercent = new Layer({
	superLayer: progressBar,
	width: 0,
	height: 4,
	backgroundColor: '#ecf0f1',
});

var text = new Layer({
	x: 0,
	y: 0,
	originY: 0.5,
	height: 20,
	html: '<div>LOADING</div>',
	style: {
		color: '#566573',
		letterSpacing: '0.2em',
		fontWeight: '500',
		textAlign: 'center',
	},
	backgroundColor: 'transparent',
});
text.centerX(3);
text.centerY(105);

var textSuccess = new Layer({
	x: 0,
	y: 0,
	originY: 0.5,
	height: 20,
	html: '<div>SUCCESS</div>',
	backgroundColor: 'transparent',
	scaleY:  0,
	opacity: 0,
	style: {
		color: '#3498db',
		letterSpacing: '0.2em',
		fontWeight: '500',
		textAlign: 'center',
	}
});
textSuccess.centerX(3);
textSuccess.centerY(105);

// States


// Animations

var progress = new Animation({
	layer: progressBarPercent,
	properties: {
		width: 160,
	},
	time: 5,
	curve: 'ease-in-out',
});

var pulse = new Animation({
	layer: symbol,
	properties: {
		scale: 0.1,
		opacity: 0,
		blur: 0,
	},
	repeat: progress.options.time,
	time: 1,
});

var symbolSuccess = new Animation({
	layer: symbol,
	properties: {
		scale: 1,
		opacity: 100,
		backgroundColor: '#3498db',
		image: '',
	},
	time: 0.5,
});

var showSymbolSuccessIcon = new Animation({
	layer: symbolSuccessIcon,
	properties:{
		opacity: 100,
		blur: 0,
		scale: 1,
	},
	time: 0.2,
	curve: 'ease-in-out',
	delay: 0.5,
});

var progressBarSuccess = new Animation({
	layer: progressBarPercent,
	properties: {
		backgroundColor: '#3498db',
	},
});

var textSuccessPart1 = new Animation({
	layer: text,
	properties: {
		scaleY: 0,
		opacity: 0,
	},
	time: 0.3,
});

var textSuccessPart2 = new Animation({
	layer: textSuccess,
	properties: {
		scaleY: 1,
		opacity: 100,
	},
	time: 0.3,
});

progress.start();
pulse.start();
progress.onAnimationEnd(function(){
	symbolSuccess.start();
	showSymbolSuccessIcon.start();
	progressBarSuccess.start();
	textSuccessPart1.start();
	textSuccessPart1.onAnimationEnd(function(){
		textSuccessPart2.start();
	});
});

// Events

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"helloworld_atlas_1", frames: [[0,1092,1270,398],[0,0,1268,1090],[1270,0,239,94],[0,1623,239,94],[0,1492,749,129]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_43 = function() {
	this.initialize(ss["helloworld_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["helloworld_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4781,1584);


(lib.CachedBmp_35 = function() {
	this.initialize(ss["helloworld_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["helloworld_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["helloworld_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFB3A3","#990000","#FCFCFC","#FFFFFF"],[0,0.988,0.988,1],0.4,-7.8,0,0.4,0,18.6).s().p("Ah8B+Qg0g0AAhKQAAhIA0g0QA0g1BIAAQBKAAA0A1QAzA0AABIQAABKgzA0Qg0A0hKAAQhIAAg0g0g");
	this.shape.setTransform(21.4607,21.4862,1.2056,1.2056,-29.9996);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#001932","#6427A9","#FCFCFC","#FFFFFF"],[0,0.988,0.988,1],0,25.6,0,-25.5).s().p("AAADxQgdAAgUgUQgVgVAAgdIAAlVQAAgdAVgVQAUgUAdAAIAAAAQAeAAAUAUQAVAVAAAdIAAFVQAAAdgVAVQgUAUgeAAg");
	this.shape_1.setTransform(41.6557,56.3861,1,1.2448,-29.9996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0.1,59.9,83.2), null);


(lib.screenDisplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36E7D5","#FFFFFF","#36E7D5","#FFFFFF"],[0,0.345,0.686,1],-0.1,-170.7,-0.1,170.7).s().p("A9qaXQkyAAAAktMAAAgrTQAAktEyAAMA7WAAAQExAAAAEtMAAAArTQAAEtkxAAg");
	this.shape.setTransform(232.95,185.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B43").s().p("AzcRgQjIAAAAjIIAA8vQAAjIDIAAMAm5AAAQDIAAAADIIAAcvQAADIjIAAg");
	this.shape_1.setTransform(235.4427,185.8309,1.6292,1.6594);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screenDisplay, new cjs.Rectangle(0,0,470.9,371.7), null);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.machineScreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#36E7D5","#FFFFFF","#36E7D5","#FFFFFF"],[0,0.345,0.686,1],0,-104.8,0,104.8).s().p("AyNQMQi8AAABi6IAA6kQgBi4C8AAMAkbAAAQC7AAABC4IAAakQgBC6i7AAg");
	this.shape.setTransform(142.95,113.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C1B43").s().p("AzcRgQjIAAAAjIIAA8vQAAjIDIAAMAm5AAAQDIAAAADIIAAcvQAADIjIAAg");
	this.shape_1.setTransform(144.5,114.0871,1,1.0185);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#36E7D5","#FFFFFF","#36E7D5","#FFFFFF"],[0.027,0.314,0.565,0.808,1],0,-104.8,0,104.8).s().p("AyNQMQi8AAABi6IAA6kQgBi4C8AAMAkbAAAQC7AAABC4IAAakQgBC6i7AAg");
	this.shape_2.setTransform(142.95,113.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EFFDFC","#47E9D8","#EEFDFC","#47E9D8","#EEFDFC"],[0.027,0.306,0.553,0.796,0.992],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_3.setTransform(142.95,113.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1C1B43").s().p("AzcR1QjIAAAAjMIAA9RQAAjMDIAAMAm5AAAQDIAAAADMIAAdRQAADMjIAAgA1YtTIAAakQAAC5C8AAMAkbAAAQC7AAAAi5IAA6kQAAi5i7AAMgkbAAAQi8AAAAC5g");
	this.shape_4.setTransform(144.5,114.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DFFBF8","#58EBDC","#DDFBF8","#58EBDC","#DDFBF8"],[0.024,0.294,0.541,0.784,0.988],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_5.setTransform(142.95,113.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#CFF9F5","#68EDE0","#CDF9F5","#68EDE0","#CDF9F5"],[0.024,0.286,0.533,0.773,0.98],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_6.setTransform(142.95,113.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BFF7F2","#79EFE3","#BCF7F1","#79EFE3","#BCF7F1"],[0.02,0.275,0.522,0.761,0.976],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_7.setTransform(142.95,113.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#AFF5EE","#8AF1E7","#ABF5ED","#8AF1E7","#ABF5ED"],[0.016,0.263,0.51,0.749,0.969],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_8.setTransform(142.95,113.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#9FF4EB","#9BF3EA","#9BF3EA","#9BF3EA","#9BF3EA"],[0.016,0.255,0.498,0.741,0.965],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_9.setTransform(142.95,113.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#8FF2E8","#ABF5ED","#8AF1E7","#ABF5ED","#8AF1E7"],[0.016,0.247,0.486,0.729,0.957],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_10.setTransform(142.95,113.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7FF0E4","#BCF7F1","#79EFE3","#BCF7F1","#79EFE3"],[0.012,0.235,0.475,0.718,0.949],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_11.setTransform(142.95,113.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#6FEEE1","#CDF9F5","#68EDE0","#CDF9F5","#68EDE0"],[0.012,0.227,0.467,0.706,0.945],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_12.setTransform(142.95,113.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#5FECDE","#DDFBF8","#58EBDC","#DDFBF8","#58EBDC"],[0.008,0.216,0.455,0.694,0.937],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_13.setTransform(142.95,113.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#4FEADA","#EEFDFC","#47E9D8","#EEFDFC","#47E9D8"],[0.004,0.204,0.443,0.682,0.933],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_14.setTransform(142.95,113.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#3FE8D7","#FFFFFF","#36E7D5","#FFFFFF","#36E7D5"],[0.004,0.196,0.431,0.671,0.925],0,-104.8,0,104.8).s().p("AyNQMQi8AAABi6IAA6kQgBi4C8AAMAkbAAAQC7AAABC4IAAakQgBC6i7AAg");
	this.shape_15.setTransform(142.95,113.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#3EE8D7","#FFFFFF","#36E7D5","#FFFFFF","#48E9D9"],[0.004,0.212,0.455,0.702,0.933],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_16.setTransform(142.95,113.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#3DE8D7","#FFFFFF","#36E7D5","#FFFFFF","#5BEBDD"],[0.004,0.224,0.478,0.729,0.937],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_17.setTransform(142.95,113.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#3DE8D6","#FFFFFF","#36E7D5","#FFFFFF","#6DEEE0"],[0.004,0.239,0.502,0.761,0.945],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_18.setTransform(142.95,113.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#3CE8D6","#FFFFFF","#36E7D5","#FFFFFF","#7FF0E4"],[0.004,0.251,0.525,0.788,0.953],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_19.setTransform(142.95,113.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#3BE8D6","#FFFFFF","#36E7D5","#FFFFFF","#92F2E8"],[0.004,0.267,0.549,0.82,0.961],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_20.setTransform(142.95,113.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#3AE7D6","#FFFFFF","#36E7D5","#FFFFFF","#A4F4EC"],[0,0.278,0.569,0.851,0.965],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_21.setTransform(142.95,113.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#39E7D6","#FFFFFF","#36E7D5","#FFFFFF","#B6F6F0"],[0,0.29,0.592,0.878,0.973],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_22.setTransform(142.95,113.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#39E7D5","#FFFFFF","#36E7D5","#FFFFFF","#C8F9F3"],[0,0.306,0.616,0.91,0.98],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_23.setTransform(142.95,113.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#38E7D5","#FFFFFF","#36E7D5","#FFFFFF","#DBFBF7"],[0,0.318,0.639,0.937,0.984],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_24.setTransform(142.95,113.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#37E7D5","#FFFFFF","#36E7D5","#FFFFFF","#EDFDFB"],[0,0.333,0.663,0.969,0.992],0,-104.8,0,104.8).s().p("AyNQLQi8AAAAi4IAA6kQAAi6C8AAMAkbAAAQC8AAgBC6IAAakQABC4i8AAg");
	this.shape_25.setTransform(142.95,113.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_4},{t:this.shape_5}]},1).to({state:[{t:this.shape_4},{t:this.shape_6}]},1).to({state:[{t:this.shape_4},{t:this.shape_7}]},1).to({state:[{t:this.shape_4},{t:this.shape_8}]},1).to({state:[{t:this.shape_4},{t:this.shape_9}]},1).to({state:[{t:this.shape_4},{t:this.shape_10}]},1).to({state:[{t:this.shape_4},{t:this.shape_11}]},1).to({state:[{t:this.shape_4},{t:this.shape_12}]},1).to({state:[{t:this.shape_4},{t:this.shape_13}]},1).to({state:[{t:this.shape_4},{t:this.shape_14}]},1).to({state:[{t:this.shape_1},{t:this.shape_15}]},1).to({state:[{t:this.shape_4},{t:this.shape_16}]},1).to({state:[{t:this.shape_4},{t:this.shape_17}]},1).to({state:[{t:this.shape_4},{t:this.shape_18}]},1).to({state:[{t:this.shape_4},{t:this.shape_19}]},1).to({state:[{t:this.shape_4},{t:this.shape_20}]},1).to({state:[{t:this.shape_4},{t:this.shape_21}]},1).to({state:[{t:this.shape_4},{t:this.shape_22}]},1).to({state:[{t:this.shape_4},{t:this.shape_23}]},1).to({state:[{t:this.shape_4},{t:this.shape_24}]},1).to({state:[{t:this.shape_4},{t:this.shape_25}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,228.2);


(lib.lever = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_14 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.lever = new lib.Symbol3();
	this.lever.name = "lever";
	this.lever.setTransform(121.25,61.6,1,1,0,0,0,59.9,83.2);

	this.timeline.addTween(cjs.Tween.get(this.lever).wait(1).to({regX:27.5,regY:39.1,rotation:-25.6084,x:72.1,y:35.9},0).wait(1).to({rotation:-51.2168,x:64.85,y:59.45},0).wait(1).to({rotation:-76.8252,x:68.25,y:83.4},0).wait(1).to({rotation:-102.4336,x:81.7,y:103.25},0).wait(1).to({rotation:-128.042,x:102.15,y:114.95},0).wait(1).to({rotation:-113.8151,x:89.65,y:109.6},0).wait(1).to({rotation:-99.5882,x:78.8,y:101.4},0).wait(1).to({rotation:-85.3613,x:70.3,y:90.75},0).wait(1).to({rotation:-71.1344,x:64.85,y:78.45},0).wait(1).to({rotation:-56.9076,x:62.8,y:65},0).wait(1).to({rotation:-42.6807,x:64.3,y:51.45},0).wait(1).to({rotation:-28.4538,x:69.35,y:38.5},0).wait(1).to({rotation:-14.2269,x:77.55,y:27},0).wait(1).to({rotation:0,x:88.65,y:17.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.4,-21.5,98.9,173.5);


(lib.machine = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.machineLever.stop();
		
		this.machineLever.addEventListener("click", pullLever.bind(this));
		
		function pullLever()
		{
			this.machineLever.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// machine_graphics_copy
	this.instance = new lib.CachedBmp_43();
	this.instance.setTransform(-33.8,134.65,0.5,0.5);

	this.machineLever = new lib.lever();
	this.machineLever.name = "machineLever";
	this.machineLever.setTransform(240.5,178.3,1,1,0,0,0,21.4,45.9);

	this.machineScreen = new lib.machineScreen();
	this.machineScreen.name = "machineScreen";
	this.machineScreen.setTransform(157.9,157.8,1,1.0037,0,4.9344,0,144.6,114);

	this.instance_1 = new lib.CachedBmp_42();
	this.instance_1.setTransform(-153.85,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.machineScreen},{t:this.machineLever},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.machine, new cjs.Rectangle(-153.8,0,755,545), null);


// stage content:
(lib.helloworld = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.nameInput.visible = false;
		var msglist = ["Hello there!\nWelcome!", "Is this your first time learning python?",
		"By the way,\nWhat's your name?",
		"Let's get started with a simple program!", 
		"In python, to write an output to the screen, we use print statements.",
		"That looks like this!"]
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Actions
	this.nameInput = new lib.an_TextInput({'id': 'nameInput', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.nameInput.name = "nameInput";
	this.nameInput.setTransform(146.15,603.6,3.747,3.2658,0,0,0,0,22.3);

	this.timeline.addTween(cjs.Tween.get(this.nameInput).wait(1));

	// graphics
	this.instance = new lib.CachedBmp_35();
	this.instance.setTransform(273.75,582.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_41();
	this.instance_1.setTransform(146.15,574.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_33();
	this.instance_2.setTransform(273.75,506.6,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_41();
	this.instance_3.setTransform(146.15,498.6,0.5,0.5);

	this.screenText2 = new cjs.Text("", "25px 'Consolas'");
	this.screenText2.name = "screenText2";
	this.screenText2.textAlign = "center";
	this.screenText2.lineHeight = 31;
	this.screenText2.lineWidth = 402;
	this.screenText2.parent = this;
	this.screenText2.setTransform(330.3,323.15);

	this.screenText = new cjs.Text("Hello there!\nWelcome!\n\nIs this your first time learning python?", "25px 'Consolas'");
	this.screenText.name = "screenText";
	this.screenText.textAlign = "center";
	this.screenText.lineHeight = 31;
	this.screenText.lineWidth = 402;
	this.screenText.parent = this;
	this.screenText.setTransform(330.3,152.9);

	this.screenDisplay = new lib.screenDisplay();
	this.screenDisplay.name = "screenDisplay";
	this.screenDisplay.setTransform(333.4,290.6,1,1,0,0,0,235.4,185.8);

	this.machine = new lib.machine();
	this.machine.name = "machine";
	this.machine.setTransform(888,377.6,1,1,0,0,0,240,272.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.machine},{t:this.screenDisplay},{t:this.screenText},{t:this.screenText2},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// bkg
	this.instance_4 = new lib.CachedBmp_3();
	this.instance_4.setTransform(-555.05,-17.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(85,342.5,1750.5,432);
// library properties:
lib.properties = {
	id: 'E3408C1316695C45B1D80FD915ADAE89',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_3.png?1612986403617", id:"CachedBmp_3"},
		{src:"images/helloworld_atlas_1.png?1612986403510", id:"helloworld_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1612986403617", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1612986403617", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1612986403617", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E3408C1316695C45B1D80FD915ADAE89'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
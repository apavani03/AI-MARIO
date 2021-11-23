function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	mycanvas = createCanvas(600,400);
	mycanvas.parent('canvas');  //variableto hold teh HTML component . parent(" HTML component");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");

	myposeNet = ml5.poseNet(video, modelLoaded);
	myposeNet.on('pose', gotPoses);
	
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function gotPoses(results){
	if(results.length > 0)
	{
		console.log(results);
		nose_X = results[0].pose.nose.x;
		nose_Y = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}


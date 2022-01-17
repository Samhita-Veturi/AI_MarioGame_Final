//marioX = 325;
//marioY = 325;
function preload() {
	world_start = loadSound("world_start.wav");
	Jump_Sound = loadSound("jump.wav");
	Coin_Sound = loadSound("coin.wav");
	Game_Over = loadSound("gameover.wav");
	Die_Sound = loadSound("mariodie.wav");
	Mario_Kill = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('canvas');
	Video = createCapture(VIDEO);
	Video.size(400, 350);
	Video.parent('game_console');
	Pose_Net = ml5.poseNet(Video, modelLoaded);
	Pose_Net.on('pose', gotPoses);
	instializeInSetup(mario);
}

function modelLoaded(){
	console.log("Model Loaded!");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		Nose_X = results[0].pose.nose.x;
		Nose_Y = results[0].pose.nose.y;
		console.log("Nose X: " + Nose_X + " Nose Y: " + Nose_Y);
	}
}

function draw() {
	game()
}
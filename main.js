
difference=0;
rightwristX=0;
leftwristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(450,450);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#969A97');
    textsize(difference);
    fill('#F90093');
    text(Yash,difference,150,150);
  }
function modelLoaded(){
    console.log("Posenet is loaded");
}
function gotPoses(results){
  if(results.length>0){
    leftwristX=results[0].pose.leftWrist.x;
    rightwristX=results[0].pose.rightWrist.x;
    difference=floor(leftwristX-rightwristX);


  }
}
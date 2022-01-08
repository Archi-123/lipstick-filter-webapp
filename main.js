mouthX=0;
mouthY=0;

function preload(){
lipstick_mouth= loadImage('https://i.postimg.cc/766nMTfm/PNGPIX-COM-Lips-PNG-Transparent-Image-4.png');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();  
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();  

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        mouthX=results[0].pose.nose.x-25;
        mouthY=results[0].pose.nose.y+15;
        console.log("mouth x = " + mouthX);
        console.log("mouth y = " + mouthY);
    }
}
function draw(){
image(video,0,0,300,300);

image(lipstick_mouth, mouthX, mouthY, 45, 45);
}
function take_snapshot(){
    save('lipstick.png');
}


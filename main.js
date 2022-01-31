noseBridgeX = 0;
noseBridgeY = 0;

function preload(){
    glasses = loadImage("https://i.postimg.cc/J42DYbJq/image.png");
}

function setup(){
    canvas=createCanvas(250, 250);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
        poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("MODEL IS SUCCESSFULLY LOADED");
}

function draw(){
    image(video, 0, 0, 250, 250);
    image(glasses, noseBridgeX, noseBridgeY, 100, 50);  
}

function take_snapshot(){
    save("glasses_image.png");
}

function gotPoses(result){
    if(result.length>0){
        // console.log(result);
        noseBridgeX = result[0].pose.nose.x-80;
        noseBridgeY = result[0].pose.nose.y-80;
        console.log("nose bridge x = " + noseBridgeX + "nose bridge y = " + noseBridgeY);
    }
}
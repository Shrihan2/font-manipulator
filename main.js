difference=0;
rightWrist=0;
leftWrist=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,100);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        leftWrist=results[0].pose.leftWrist.x;
        rightWrist=results[0].pose.rightWrist.x;
        difference=floor(leftWrist-rightWrist);
        console.log("left wrist X = " + leftWrist + "right wrist X = " + rightWrist + "difference= " + difference);
    }
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function draw(){
    background("lightGray");
    document.getElementById("font_size").innerHTML="size of the font will be=" + difference + "px";
    text("Shrihan",225,225);
    fill("brown");
    stroke("brown");
    textSize(difference);
}
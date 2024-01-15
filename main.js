function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function modelLoaded() {
    console.log("poseNET is initialized");
    poseNET.on("pose", getResults);
}

function gotposes() {

}
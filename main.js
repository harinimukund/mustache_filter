nose_x=0;
nose_y=0;
function preload() {
pic=loadImage("mustache.png")
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(pic,nose_x-35,nose_y-10,70,30)
}

function modelLoaded() {
    console.log("model loaded succesfully");
    posenet.on("pose", gotResults);
}

function gotResults(r) {
    if (r.length > 0) {
        //console.log(r);
        nose_x = r[0].pose.nose.x;
        nose_y = r[0].pose.nose.y;
        console.log(nose_x,nose_y)
    }
}
function take_snapshot() {
    save("my_mustache.png")
}
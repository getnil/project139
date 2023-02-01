
img = "";
objects = [];
status = "";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  object = results;
}

function draw() {
  image(img, 0, 0, 640, 420);

      if(status != "")
      {
        r = random(255);
        g = random(255);
        b = random(255);
        
        for (i = 0; i < objects.length; i++)
        {
          document.getElementById("status").innerHTML = "Status : object Detected";
          document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;

          fill(r,g,b);
          percent = floor(objects[i].confidence * 100);
          text (objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x, objects[i].y, object[i].width, objects[i].height);
        }
      }
    }
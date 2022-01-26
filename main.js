status="";
object= [];
function setup()
{
    canvas.createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("staus").innerHTML = "Status = Dectecting Objects";
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.dectect(img, gotResults);
}
function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
    object = results;
}
function draw()
{
    if(status != "")
    {
        for(i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status = Detecting Objects";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+ " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, ojects[i].y, objects[i].width, objects[i].height);
        }
    }
}
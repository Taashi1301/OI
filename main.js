Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function capture(){
    Webcam.snap(
        function (selfie){
            document.getElementById("selfiediv").innerHTML="<img id='captureimg' src='"+selfie+"'>"
        }
    );
}
console.log("Version of ML5: ", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Qb2la4abO/model.json",compare);

function compare(){
    console.log("model has been loaded.");
}   
function identify(){
  image=document.getElementById("captureimg");
  classifier.classify(image, getResults);  
}
function getResults(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("objectname").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
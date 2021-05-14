predict1="";
predict2="";
Webcam.set({
    width:350,
    height:350,
    image_format:'jpg',
    jpg_quality:100
});
Webcam.attach("#view");
function snap(){
Webcam.snap(function(data_uri){
    document.getElementById("photo").innerHTML='<img id="img" src="'+data_uri+'">';
});
}
console.log(ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Aqfs7MqT_/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak1="Frist prediction is"+predict1;
    speak2="and the second prediction is"+predict2;
    utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}
function cheak(){
img=document.getElementById("img");
classifier.classify(img,gotResult);
}
function gotResult(error,results){
if (error){
    console.error(error);
}
else {
    console.log(results);
document.getElementById("emotionnameid").innerHTML=results[0].label; 
document.getElementById("emotionnameid2").innerHTML=results[1].label; 
predict1=results[0].label;
predict2=results[1].label;
speak();
if(predict1=="happy"){
    document.getElementById("emogiid").innerHTML="&#128522;";
}
if(predict1=="sad"){
    document.getElementById("emogiid").innerHTML="&#128532;";
}
if(predict1=="angry"){
    document.getElementById("emogiid").innerHTML="&#128545;";
}


if(predict2=="sad"){
    document.getElementById("emogiid2").innerHTML="&#128532;";
}
if(predict2=="angry"){
    document.getElementById("emogiid2").innerHTML="&#128545;";
}
if(predict2=="crying"){
    document.getElementById("emogiid2").innerHTML="&#128546;";
}
}
}
var hour=0;
var min=0;
var sec=0;
var msec=0;
var intervel;


var hourHeading=document.getElementById("hour");
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");

function StartTimer(){
msec++;
msecHeading.innerHTML=msec;
if(msec>=100){
sec++;
secHeading.innerHTML=sec;
msec=0;}
else if(sec>=60){
    min++;
    minHeading.innerHTML=min;
    sec=0;

}
else if(min>=60){
    hour++;
    hourHeading.innerHTML=hour;
    min=0;

}
}
// setInterval(StartTimer,10);

function start()
{
 intervel = setInterval(StartTimer,10);
}
 function pause()
 {
    clearInterval(intervel);
 }
 function reset(){
    var hour=0;
var min=0;
var sec=0;
var msec=0;
hourHeading.innerHTML=hour;
minHeading.innerHTML=min;
secHeading.innerHTML=sec;
msecHeading.innerHTML=msec;



}
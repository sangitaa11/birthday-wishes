var noofbuttons=document.querySelectorAll(".drum").length;
var audio;
var redHeartImage = document.querySelector(".red");
var catchId=document.getElementById("catch");
for(i=0;i<noofbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var btnhtml=this.innerHTML;
       animatebtn(btnhtml);
    });
}
document.querySelector(".pink").addEventListener("click",function(){
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
  }
  audio = new Audio("./sounds1/14.mp3");
  audio.play();
  setTimeout(function () {
    audio.pause();
    audio.currentTime = 0;
  },11000);
});
function animatebtn(x){
  var y="."+x;
  document.querySelector(y).classList.add("pressed");
  setTimeout(function(){
      document.querySelector(y).classList.remove("pressed");
  },200)
}
redHeartImage.addEventListener("click", function () {
  var ribbonLeft = document.querySelector(".ribbon.left");
  var ribbonRight = document.querySelector(".ribbon.right");
  var lbox = document.querySelector(".lbox");
  var wishesBox = document.querySelector(".box");

  ribbonLeft.style.display = "none";
  ribbonRight.style.display = "none";
  lbox.style.display = "none";
  wishesBox.style.display = "none";

  setTimeout(function () {
    ribbonLeft.style.display = "intial";
    ribbonRight.style.display = "intial";
    lbox.style.display = "intial";
    wishesBox.style.display = "intial";
  }, 20000); 
});

catchId.addEventListener("click", function () {
  var ribbonLeft = document.querySelector(".ribbon.left");
  var ribbonRight = document.querySelector(".ribbon.right");
  var lbox = document.querySelector(".lbox");
  var wishesBox = document.querySelector(".box");

  ribbonLeft.style.display = "none";
  ribbonRight.style.display = "none";
  lbox.style.display = "none";
  wishesBox.style.display = "none";

  setTimeout(function () {
    ribbonLeft.style.display = "intial";
    ribbonRight.style.display = "intial";
    lbox.style.display = "intial";
    wishesBox.style.display = "intial";
  }, 20000); 
});

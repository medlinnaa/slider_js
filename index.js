
let myImg=document.querySelector(".taylor");

function slideright(){
    myImg.src="./lover.jpg";
}


function slideback(){
    myImg.src="./taytaytay.png";
}

function slideleft(){
    myImg.src="./taylorrrest.jpg"
}

let myText=document.querySelector(".myText");

setTimeout(()=>{
  myText.innerHTML="Miss Americana";
},2000)
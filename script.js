const text = [
"CLOUD Engineer",
"DSA Enthusiast",
"Problem Solver"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type(){

currentText = text[i];

if(!isDeleting){
document.getElementById("typing").innerHTML =
currentText.substring(0,j++);
}else{
document.getElementById("typing").innerHTML =
currentText.substring(0,j--);
}

if(j == currentText.length+1){
isDeleting = true;
setTimeout(type,1000);
return;
}

if(j == 0){
isDeleting = false;
i++;
if(i == text.length){
i = 0;
}
}

setTimeout(type,120);

}

type();

AOS.init();

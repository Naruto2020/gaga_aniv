// animation texte page accueil

redimentionFen = function () {
    var largEcran = window.innerWidth;
    var hautEcran = window.innerHeight;
    if (window.innerWidth <= 1024) {
      largEcran = window.innerWidth;
    }
    if (window.innerHeight >= 800) {
      hautEcran = window.innerHeight;
    }
};

  
var position = 0;
var msg =
  "Je t'envoie cette e-carte pour t'inviter  à mon incroyable anniversaire qui ce déroulera le 12/02/2022 dés 18h  ça a déjas commencé  ca va être la chimamelure 👻! ...  ";
var msg = " " + msg;
var long = msg.length;
var fois = 76 / msg.length + 1;
for (i = 0; i <= fois; i++) {
  msg += msg;
}
function textdefil() {
  document.form1.deftext.value = msg.substring(position, position + 76);
  position++;
  if (position == long) position = 0;
  setTimeout("textdefil()", 250);
}

/*function addElement () {

  
  

  // crée un nouvel élément div
  var bulle1 = document.createElement("div");
  // et lui donne un peu de contenu
  
  //newDiv.innerHTML = "Bonjour ! ";
  bulle1.setAttribute("id", "bulle1");
  bulle1.style.left = 470 + "px";
  bulle1.style.top = 680 + "px";
  bulle1.appendChild(document.createTextNode("N"));
  //newDiv.appendChild(newContent);

  // ajoute le nouvel élément créé et son contenu dans le DOM
  var container = document.getElementById("container"); 
  var currentDiv = document.getElementById('flute');

  container.insertBefore(bulle1, currentDiv);
  //console.log("tessst : ", currentDiv);
  
  
  
}
addElement();*/
var bloc1W = 20;
var bloc1H = 20;

var bulle1 = document.getElementById("bulle1");
bulle1.style.left = 584 + "px";
bulle1.style.top = 347 + "px";
var vitesse1X = 5;
var vitesse1Y = 0;

var bulle2 = document.getElementById("bulle2");
bulle2.style.left = 745 + "px";
bulle2.style.top = 675 + "px";

var bulle3 = document.getElementById("bulle3");
bulle3.style.left = 760 + "px";
bulle3.style.top = 675 + "px";

var bulle4 = document.getElementById("bulle4");
bulle4.style.left = 775 + "px";
bulle4.style.top = 675 + "px";



var tofy = document.getElementById("tofy");
tofy.style.left = 920 + "px";
tofy.style.top = 380 + "px";

var intervalID1;
intervalID1 = window.setInterval(function () {
  var bloc1W = 20;
  var bloc1H = 20;
  var bor1L = parseFloat(bulle1.style.left);
  var bor1R = bor1L + bloc1W;
  var bor1T = parseFloat(bulle1.style.top);
  var bor1B = bor1T + bloc1H;
  //console.log("test : ", bor1L);

  //bor1L + vitesse1X <= 550 ||
  if ( bor1R + vitesse1X >= 888){
    //vitesse1X = -vitesse1X;
    clearInterval(intervalID1);
    tofy.style.display = "block";
    bulle2.style.display = "block";
    bulle3.style.display = "block";
    bulle4.style.display = "block";

    //console.log("vit : ", vitesse1X);
    
  } else if (
    bor1T + vitesse1Y <= 300 ||
    bor1B + vitesse1Y >= 700
  ) {
    console.log("test : ", bor1T);
    vitesse1Y = -vitesse1Y;
  } else {
    //console.log("vit : ", vitesse1Y);
    bulle1.style.left = bor1L + vitesse1X + "px";
    bulle1.style.top = bor1T + vitesse1Y + "px";
  }
}, 200);



var intervalID2;
/*intervalID2 = window.setInterval(function () {
  
  var bloc2W = 20;
  var bloc2H = 20;
  var bor2L = parseFloat(bulle2.style.left);
  var bor2R = bor2L + bloc2W;
  var bor2T = parseFloat(bulle2.style.top);
  var bor2B = bor2T + bloc2H;
  //console.log("test : ", bor1L);
  if (bor2L + vitesse2X <= 550 || bor2R + vitesse2X >= 1000){
    vitesse2X = -vitesse2X;
    console.log("vit : ", vitesse1X);
    
  } else if (
    bor2T + vitesse2Y <= 300 ||
    bor2B + vitesse2Y >= 700
  ) {
    //console.log("test : ", bor2T);
    vitesse2Y = -vitesse2Y;
  } else {
    //console.log("vit : ", vitesse1Y);
    bulle2.style.left = bor2L + vitesse2X + "px";
    bulle2.style.top = bor2T + vitesse2Y + "px";
  }
}, 100);*/
//window.onload = textdefil;

window.addEventListener("load", function(){
  //everything is fully loaded, don't use me if you can use DOMContentLoaded
  textdefil();
  
});


//window.onload = addElement;

function animat() {

}
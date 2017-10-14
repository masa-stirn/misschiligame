 let girl = document.querySelector(".girl");
 let doughnut = document.querySelector(".doughnut");
 let chocolate = document.querySelector(".chocolate");
 let flour = document.querySelector(".flour");
 let sugar = document.querySelector(".sugar");
 let macaron = document.querySelector(".macaron");
 let milk = document.querySelector(".milk");
 let butter = document.querySelector(".butter");
 let egg = document.querySelector(".egg");
 let burger = document.querySelector(".burger");
let chili = document.querySelector(".chili");
let chili2 = document.querySelector(".chili2");
let wrongAudio = document.getElementById("wrong");
let yesAudio = document.getElementById("right");
let blowAudio = document.getElementById("blow");

 function pageLoad() {
     console.log("function: pageLoad")
     let bgsound = document.querySelector("#bgsound");
     //bgsound.play();
 }
 doughnut.addEventListener("click", pickDoughnut)

 function pickDoughnut() {
     girl.classList.add("pickDoughnut");
     setTimeout(pickDoughnutSound, 2000);
 }
function pickDoughnutSound() {
    girl.classList.add("shakeGirlDougnut");
     wrongAudio.play();
     setTimeout(pickDoughnutDone, 2000);
 }
function pickDoughnutDone() {
    chili.classList.remove("chili-def");
    chili.classList.add("hide");
    chili2.classList.add("burnDoughnut");
    blowAudio.play();
    chili2.addEventListener('animationend', hideDougnut)
}

function hideDougnut(){
    doughnut.classList.add("hide");
    setTimeout(chiliHome, 500);
}

function chiliHome(){
    chili.classList.add("chili-def");
    chili.classList.remove("hide");
    chili2.classList.remove("burnDoughnut");
    girl.classList.remove("pickDoughnut");
    girl.classList.remove("shakeGirlDougnut");
}

macaron.addEventListener("click", pickMacaron)

 function pickMacaron() {
     girl.classList.add("pickMacaron");
     setTimeout(pickMacaronSound, 2000);
 }

function pickMacaronSound() {
    girl.classList.add("shakeGirlMac");
     wrongAudio.play();
     setTimeout(pickMacaronDone, 2000);
 }

function pickMacaronDone() {
    chili.classList.remove("chili-def");
    chili.classList.add("hide");
    chili2.classList.add("burnMacaron");
    blowAudio.play();
    chili2.addEventListener('animationend', hideMacaron)
}

function hideMacaron(){
    macaron.classList.add("hide");
    setTimeout(chiliHome2, 500);
}

function chiliHome2(){
    chili.classList.add("chili-def");
    chili.classList.remove("hide");
    chili2.classList.remove("burnMacaron");
     girl.classList.remove("pickMacaron");
    girl.classList.remove("shakeGirlMac");
}

milk.addEventListener("click", pickMilk)

 function pickMilk() {
     girl.classList.add("pickMilk");
     setTimeout(pickMilkDone, 2000);
 }

function pickMilkDone() {
    girl.classList.add("jumpMilk");
    yesAudio.play();
    yesAudio.addEventListener('ended', hideMilk)
}

function hideMilk(){
    milk.classList.add("hide");
    girl.classList.remove("jumpMilk");
    girl.classList.remove("pickMilk");
}

sugar.addEventListener("click", pickSugar)

 function pickSugar() {
     girl.classList.add("pickSugar");
     setTimeout(pickSugarDone, 2000);
 }

function pickSugarDone() {
    girl.classList.add("jumpSugar");
    yesAudio.play();
    yesAudio.addEventListener('ended', hideSugar)
}

function hideSugar(){
    sugar.classList.add("hide");
    girl.classList.remove("pickSugar");
    girl.classList.remove("jumpSugar");
}

egg.addEventListener("click", pickEgg)

 function pickEgg() {
     girl.classList.add("pickEgg");
     setTimeout(pickEggDone, 2000);
 }

function pickEggDone() {
    girl.classList.add("jumpEgg");
    yesAudio.play();
    yesAudio.addEventListener('ended', hideEgg)
}

function hideEgg(){
    egg.classList.add("hide");
    girl.classList.remove("pickEgg");
    girl.classList.remove("jumpEgg");
}

chocolate.addEventListener("click", pickChocolate)

 function pickChocolate() {
     girl.classList.add("pickChocolate");
     setTimeout(pickChocolateDone, 2000);
 }

function pickChocolateDone() {
    girl.classList.add("jumpChocolate");
    yesAudio.play();
    yesAudio.addEventListener('ended', hideChocolate)
}

function hideChocolate(){
    chocolate.classList.add("hide");
    girl.classList.remove("pickChocolate");
    girl.classList.remove("jumpChocolate");
}

flour.addEventListener("click", pickFlour)

 function pickFlour() {
     girl.classList.add("pickFlour");
     setTimeout(pickFlourDone, 2000);
 }

function pickFlourDone() {
    girl.classList.add("jumpFlour");
    yesAudio.play();
    yesAudio.addEventListener('ended', hideFlour)
}

function hideFlour(){
    flour.classList.add("hide");
    girl.classList.remove("pickFlour");
    girl.classList.remove("jumpFlour");
}

butter.addEventListener("click", pickButter)

 function pickButter() {
     girl.classList.add("pickButter");
     setTimeout(pickButterDone, 2000);
 }

function pickButterDone() {
    girl.classList.add("jumpButter");
    yesAudio.play();
    yesAudio.addEventListener('ended', hideButter)
}

function hideButter(){
    butter.classList.add("hide");
    girl.classList.remove("pickButter");
    girl.classList.remove("jumpButter");
}


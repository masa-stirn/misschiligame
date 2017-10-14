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

 function pageLoad() {
     console.log("function: pageLoad")
     let bgsound = document.querySelector("#bgsound");
     //bgsound.play();
 }
 doughnut.addEventListener("click", pickDoughnut)

 function pickDoughnut() {
     girl.classList.add("pickDoughnut");
     setTimeout(pickDoughnutDone, 2000);
 }
function pickDoughnutDone() {
    wrongAudio.play();
    chili.classList.remove("chili-def");
    chili.classList.add("hide");
    chili2.classList.add("burnDoughnut");
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
}

macaron.addEventListener("click", pickMacaron)

 function pickMacaron() {
     girl.classList.add("pickMacaron");
     setTimeout(pickMacaronDone, 2000);
 }

function pickMacaronDone() {
    wrongAudio.play();
    chili.classList.remove("chili-def");
    chili.classList.add("hide");
    chili2.classList.add("burnMacaron");
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


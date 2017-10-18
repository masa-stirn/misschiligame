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


//audio
 let wrongAudio = document.getElementById("wrong");
 let yesAudio = document.getElementById("right");
 let blowAudio = document.getElementById("blow");
 let musicBtn = document.querySelector(".music-button");
let evilAudio = document.getElementById("evil-laugh");

 function pageLoad() {
     console.log("function: pageLoad")
     let bgsound = document.getElementById("bgsound");
     //bgsound.play();
 }
 musicBtn.addEventListener("click", soundOnOff)

 function soundOnOff() {
     bgsound.pause();
 }

 doughnut.addEventListener("click", pickDoughnut)

 function pickDoughnut() {
     girl.classList.add("pickDoughnut");
     setTimeout(pickDoughnutSound, 2000);
 }

 function pickDoughnutSound() {
     girl.classList.add("shakeGirlDougnut");
     wrongAudio.play();
     setTimeout(pickDoughnutDone, 1000);
 }

 function pickDoughnutDone() {
     chili.classList.remove("chili-def");
     chili.classList.add("hide");
     chili2.classList.add("burnDoughnut");
     blowAudio.play();
     chili2.addEventListener('animationend', hideDougnut)
 }

 function hideDougnut() {
     doughnut.classList.add("hide");
     setTimeout(chiliHome, 500);
 }

 function chiliHome() {
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
     setTimeout(pickMacaronDone, 1000);
 }

 function pickMacaronDone() {
     chili.classList.remove("chili-def");
     chili.classList.add("hide");
     chili2.classList.add("burnMacaron");
     blowAudio.play();
     chili2.addEventListener('animationend', hideMacaron)
 }

 function hideMacaron() {
     macaron.classList.add("hide");
     setTimeout(chiliHome2, 500);
 }

 function chiliHome2() {
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

 function hideMilk() {
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

 function hideSugar() {
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

 function hideEgg() {
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

 function hideChocolate() {
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

 function hideFlour() {
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

 function hideButter() {
     butter.classList.add("hide");
     girl.classList.remove("pickButter");
     girl.classList.remove("jumpButter");
 }

let bowl = document.querySelector(".bowl");
    //if(butter.classList.contains("hide")){
    bowl.addEventListener("click", pickbowl);
function pickbowl(){
    let ing = document.querySelectorAll(".hide");
    if(ing.length>1){
    girl.classList.add("pickBowl");
        setTimeout(pickBowlDone, 2000);
    } else {
        wrongAudio.play();
    }
   }

//}
  function pickBowlDone() {
    burger.classList.remove("shakeCSS1");
    burger.classList.add("burgerAttack");
     evilAudio.play();
     evilAudio.addEventListener('ended', chiliSaver)
 }

function chiliSaver() {
     chili.classList.remove("chili-def");
     chili.classList.add("hide");
     chili2.classList.add("burnBurger");
     blowAudio.play();
     chili2.addEventListener('animationend', hideBurger)
 }

function hideBurger() {
     burger.classList.add("hide");
     setTimeout(chiliHome3, 500);
 }

 function chiliHome3() {
     chili.classList.add("chili-def");
     chili.classList.remove("hide");
     chili2.classList.remove("burnBurger");
     setTimeout(ingredientsShow, 500);
 }

function ingredientsShow(){
    butter.classList.remove("hide"); egg.classList.remove("hide"); milk.classList.remove("hide"); chocolate.classList.remove("hide"); sugar.classList.remove("hide"); flour.classList.remove("hide");
    setTimeout(butterFly, 500);
    setTimeout(flourFly, 1000);
    setTimeout(chocoFly, 1500);
    setTimeout(eggFly, 2000);
    setTimeout(sugarFly, 2500);
    setTimeout(milkFly, 3000);
}
function butterFly(){
    butter.classList.add("bowlFly");
    setTimeout(butterHide, 600);
}
function butterHide(){
    butter.classList.add("hide");
}
function flourFly(){
    flour.classList.add("bowlFly");
    setTimeout(flourHide, 400);
}
function flourHide(){
    flour.classList.add("hide");
}
function chocoFly(){
    chocolate.classList.add("bowlFly");
    setTimeout(chocoHide, 600);
}
function chocoHide(){
    chocolate.classList.add("hide");
}
function eggFly(){
    egg.classList.add("bowlFly");
    setTimeout(eggHide, 600);
}
function eggHide(){
    egg.classList.add("hide");
}
function sugarFly(){
    sugar.classList.add("bowlFly");
    setTimeout(sugarHide, 600);
}
function sugarHide(){
    sugar.classList.add("hide");
}
function milkFly(){
    milk.classList.add("bowlFly");
    setTimeout(milkHide, 600);
}
function milkHide(){
    milk.classList.add("hide");
}

 milk.addEventListener("animationend", showCake)

function showCake(){
    let cake = document.querySelector(".cake");
    cake.classList.remove("hide");
    cake.classList.add("cakegrow");
    let sky = document.querySelector(".sky");
    let bg = document.querySelector(".bg");
    sky.classList.remove("sky");
    bg.classList.remove("bg");
    chili.classList.add("hide");
    macaron.classList.add("hide");
    bowl.classList.add("hide");
    doughnut.classList.add("hide");
    girl.classList.add("hide");
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    let yayAudio = document.getElementById("yay");
    yayAudio.play();
    setTimeout(kitchenScene, 600);
}

function kitchenScene(){

}

 pageLoad();

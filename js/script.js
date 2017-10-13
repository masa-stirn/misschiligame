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
let wrongAudio = document.getElementById("wrong");

 function pageLoad() {
     console.log("function: pageLoad")
     let bgsound = document.querySelector("#bgsound");
     //bgsound.play();
 }
 doughnut.addEventListener("click", pickDoughnut)

 function pickDoughnut() {
     console.log("pickDoughnut");
     girl.classList.add("pickDoughnut");
     //if (girl.classList.contains("pickDoughnut")) {
    //let wrongAudio = document.getElementById("wrong");
    //wrongAudio.play();
    // }
     setTimeout(pickDoughnutDone, 2000);
 }
function pickDoughnutDone() {
    wrongAudio.play();
    chili.classList("burn");
}


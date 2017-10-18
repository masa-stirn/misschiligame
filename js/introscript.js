    let girl = document.querySelector(".girlIn");
    let chili = document.querySelector(".chili");

    function pageLoad() {
    girl.classList.add("moveGirl");
    setTimeout(playHiAud, 1600)
    function playHiAud(){
    let hiAudio = document.getElementById("hiAudio");
    hiAudio.play();
    }
    hiAudio.addEventListener("ended", hugAni)
 }
    function hugAni(){
        let hug = document.querySelector(".hug");
        hug.classList.add("hugAnimate");
        girl.classList.add("hide");
        chili.classList.add("hide");
        setTimeout(playBdayAud, 1600)
    function playBdayAud(){
        let bdayAudio = document.getElementById("mumBdayAudio");
    bdayAudio.play();
    setTimeout(HelpMakeCake, 5400)
    }
    }
    function HelpMakeCake(){
        let missMrChili = document.querySelector(".missandmrchili");
        missMrChili.classList.remove("hide");
        let cakeAudio = document.getElementById("makeCakeAudio");
    cakeAudio.play();
        cakeAudio.addEventListener("ended", showRecipe)
    }






pageLoad();

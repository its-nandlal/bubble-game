var bubales = "" ;
var hit = 0 ;
var time = 60 ;
var score = 0 ;
var bgmusic = document.querySelector(".bg-music")
var play = document.querySelector("#play")
var pause = document.querySelector("#Pause")
var musicplay = document.querySelector("#musicplay")
var cltr2 = 0
var bubalShot = document.querySelector("#bubalShot")
var bubal = document.querySelector(".bubal")
var pluspoint = document.querySelector(".pluspoint")
var deckrige = document.querySelector(".deckrige")


function makenewbubal(){
for(var i = 0; i<=215; i++){
    var run = Math.floor(Math.random()*10)
    bubales += `<div class="bubal">${run}</div>`;
}
document.querySelector("#pgbtm").innerHTML = bubales;
}

function getnewhit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hit
}

function runTime(){
    var timer = setInterval(function() {
        if(time>0){
            time--;
            document.querySelector("#timeval").textContent = time
        }
        else{
            clearInterval(timer)
            document.querySelector("#pgbtm").innerHTML = 
            `<div id="pgbtenter">
            <h1 class="pgbtmh1">Game Over</h1>
            <br>
            <div class="gmov" onClick="window.location.reload(true)"> <h1>Resume</h1></div>
            </div>
            `
            
        }
    }, 1000);
}


function newScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score
}
function cutScore(){
    score -= 10;
    document.querySelector("#scoreval").textContent = score
}



document.querySelector("#pgbtm").addEventListener("click", function(dets){
    console.log(dets.target.textContent);
    var number = Number(dets.target.textContent)
    console.log(dets.target.textContent);
    if(hit === number){
        newScore();
        getnewhit();
        makenewbubal();
        bubalShot.play();
        bubalShot.play();
        bubalShot.play();
        bubalShot.play();
        bubalShot.play();
        pluspoint.style.display = "block"
        setTimeout(function(){
            pluspoint.style.display = "none"
        },200)
    }
    else{
        cutScore();
        deckrige.style.display = "block"
        setTimeout(function(){
            deckrige.style.display = "none"
        },200)
        bubalShot.play();
        bubalShot.play();
        bubalShot.play();
        bubalShot.play();
        bubalShot.play();
    }
    
})


musicplay.addEventListener("click", function(){
    if(cltr2 == 0){
        play.style.display = "block" 
        pause.style.display = "none" 
        bgmusic.play();
        cltr2 = 1
        console.log("start");
    }
    else{
        play.style.display = "none" 
        pause.style.display = "block" 
        bgmusic.pause();
        cltr2 = 0
        console.log("end");
    }
})


getnewhit();
runTime();
makenewbubal();
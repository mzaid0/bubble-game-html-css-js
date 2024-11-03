var timer = 60;
var score = 0;
var hitrn=0;

function makeBubble() {
    var clutter = "";

    for (var i = 0; i <= 146; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timeint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        }
        else {
            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over</h1>`;
            document.querySelector("#pbtm").innerHTML = `<h1>Your score is : ${score}</h1>`;
        }
    }, 1000)
}

function hit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clicknum = Number(dets.target.textContent);
    console.log(hitrn);
    if (clicknum === hitrn) {
        increaseScore();
        makeBubble();
        hit();
    }
})


makeBubble();
runTimer();
hit();


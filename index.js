var a = document.getElementById("rock");
var b = document.getElementById("paper");
var c = document.getElementById("scissors");
var ele = document.getElementById("winner");
var chng = document.getElementById("scores");
var rst = document.getElementById("reset");
var plr_scr = document.querySelectorAll(".scr")

var lst = document.getElementById("list");
var cnt = 0;

ele.style.display = "none";
var youScr = 0, cmpScr = 0;

function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;

    let time = hh + ":" + mm + " " + session;

    return time;
}

a.addEventListener("click", function () {
    var x = Math.floor(Math.random() * 3);
    var time = currentTime();
    var winner;
    var run;
    var flag = 1;
    if (x === 0) {
        // console.log("draw");
        ele.style.display = "block";
        ele.innerHTML = "Oh! it a tie";
        winner = "draw";
        flag = 0;
    }
    else if (x === 1) {
        // console.log("looser");
        ele.style.display = "block";
        ele.innerHTML = "Oops! you have lost";
        cmpScr++;
        chng.children[1].innerHTML = cmpScr;
        console.log(cmpScr);
        winner = "Computer";
        run = "paper 🖐️";
    }
    else {
        console.log(youScr);
        ele.style.display = "block";
        ele.innerHTML = "Congrats, you have won";
        youScr++;
        chng.children[0].innerHTML = youScr;
        winner = "User";
        run = "rock 👊";
    }
    if (flag) {
        var list = "🕒 " + time + " " + winner + " wins by " + run;
    }
    else {
        var list = "🕒 " + time + " Draw by" + " rock 👊";
    }
    console.log(list);
    var x = document.createElement("div");
    x.classList.add("score");
    var text = document.createTextNode(list);
    x.appendChild(text);
    lst.prepend(x);
    cnt++;
    change_scr();
});

b.addEventListener("click", function () {
    var x = Math.floor(Math.random() * 3);
    var time = currentTime();
    var winner;
    var run;
    var flag = 1;
    // console.log(x);
    if (x === 0) {
        // console.log("winner");
        winner = "User";
        ele.style.display = "block";
        ele.innerHTML = "Congrats, you have won";
        youScr++;
        chng.children[0].innerHTML = youScr;
        // console.log(youScr);
        run = "paper 🖐️"
    }
    else if (x === 1) {
        // console.log("draw");
        ele.style.display = "block";
        ele.innerHTML = "Oh! it a tie";
        flag = 0;
    }
    else {
        // console.log("loose");
        run = "scissor ✌️"
        winner = "computer"
        ele.style.display = "block";
        ele.innerHTML = "Oops! you have lost";
        cmpScr++;
        chng.children[1].innerHTML = cmpScr;
        // console.log(cmpScr);
    }
    if (flag) {
        var list = "🕒 " + time + " " + winner + " wins by " + run;
    }
    else {
        var list = "🕒 " + time + " Draw by paper 🖐️";
    }
    console.log(list);
    var x = document.createElement("div");
    x.classList.add("score")
    var text = document.createTextNode(list);
    x.appendChild(text);
    lst.prepend(x);
    cnt++;
    change_scr();
});

c.addEventListener("click", function () {
    var x = Math.floor(Math.random() * 3);
    var time = currentTime();
    var winner;
    var run;
    var flag = 1;
    // console.log(x);
    if (x === 0) {
        // console.log("loose");
        ele.style.display = "block";
        ele.innerHTML = "Oops! you have lost";
        cmpScr++;
        chng.children[1].innerHTML = cmpScr;
        run = "rock 👊";
        winner = "computer";
    }
    else if (x === 1) {
        // console.log("winner");
        ele.style.display = "block";
        ele.innerHTML = "Congrats, you have won";
        youScr++;
        chng.children[0].innerHTML = youScr;
        run = "scissor ✌️";
        winner = "User";
    }
    else {
        // console.log("draw");
        ele.style.display = "block";
        ele.innerHTML = "Oh! it a tie";
        flag = 0;
    }
    if (flag) {
        var list = "🕒 " + time + " " + winner + " wins by " + run;
    }
    else {
        var list = "🕒 " + time + " Draw by" + " scissor ✌️";
    }
    console.log(list);
    var x = document.createElement("div");
    x.classList.add("score")
    var text = document.createTextNode(list);
    x.appendChild(text);
    lst.prepend(x);
    cnt++;
    change_scr();
});

rst.addEventListener("click", function () {
    youScr = 0, cmpScr = 0;
    ele.style.display = "none";
    chng.children[0].innerHTML = 0;
    chng.children[1].innerHTML = 0;
    plr_scr[0].children[1].innerHTML = "";
    plr_scr[1].children[1].innerHTML = "";
    plr_scr[0].children[0].innerHTML = "👨 User (Score :  "+youScr + ")";
    plr_scr[1].children[0].innerHTML = "💻 Computer (Score : "+cmpScr + ")";
    lst = document.getElementById("list");
    for (var i = 0; i <= cnt; i++) {
        const element = document.querySelector(".score");
        element.remove();
    }
    cnt = 0;
});


function change_scr() {
    // console.log(plr_scr[0].children[1]);
    plr_scr = document.querySelectorAll(".scr")
    plr_scr[0].children[0].innerHTML = "👨 User (Score :  "+youScr + ")";
    plr_scr[1].children[0].innerHTML = "💻 Computer (Score : "+cmpScr + ")";
    // console.log(youScr + " " + cmpScr);
    if (youScr > cmpScr) {
        plr_scr[0].children[1].innerHTML = "🏆";
    }
    if (cmpScr > youScr) {
        plr_scr[1].children[1].innerHTML = "🏆";
    }
    if (youScr === cmpScr) {
        plr_scr[0].children[1].innerHTML = "";
        plr_scr[1].children[1].innerHTML = "";
    }
}

// change_scr();
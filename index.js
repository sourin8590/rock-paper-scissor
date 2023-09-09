var a = document.getElementById("rock");
var b = document.getElementById("paper");
var c = document.getElementById("scissors");
var ele = document.getElementById("winner");
var chng = document.getElementById("scores");
var rst = document.getElementById("reset");
ele.style.display = "none";
console.log()
var youScr = 0, cmpScr = 0;

a.addEventListener("click", function(){
    var x = Math.floor(Math.random()*3);
    // console.log(x);
    if(x === 0){
        // console.log("draw");
        ele.style.display = "block";
        ele.innerHTML = "Oh! it a tie";
    }
    else if(x === 1) {
        // console.log("looser");
        ele.style.display = "block";
        ele.innerHTML = "Oops! you have lost";
        cmpScr++;
        chng.children[1].innerHTML = cmpScr;
        // console.log(cmpScr);
    }
    else {
        // console.log("winner");
        ele.style.display = "block";
        ele.innerHTML = "Congrats, you have won";
        youScr++;
        chng.children[0].innerHTML = cmpScr;
    }
});

b.addEventListener("click", function(){
    var x = Math.floor(Math.random()*3);
    // console.log(x);
    if(x === 0){
        // console.log("winner");
        ele.style.display = "block";
        ele.innerHTML = "Congrats, you have won";
        youScr++;
        chng.children[0].innerHTML = youScr;
    }
    else if(x === 1) {
        // console.log("draw");
        ele.style.display = "block";
        ele.innerHTML = "Oh! it a tie";
    }
    else {
        // console.log("loose");
        ele.style.display = "block";
        ele.innerHTML = "Oops! you have lost";
        cmpScr++;
        chng.children[1].innerHTML = cmpScr;
    }

});

c.addEventListener("click", function(){
    var x = Math.floor(Math.random()*3);
    // console.log(x);
    if(x === 0){
        // console.log("loose");
        ele.style.display = "block";
        ele.innerHTML = "Oops! you have lost";
        cmpScr++;
        chng.children[1].innerHTML = cmpScr;
    }
    else if(x === 1) {
        // console.log("winner");
        ele.style.display = "block";
        ele.innerHTML = "Congrats, you have won";
        youScr++;
        chng.children[0].innerHTML = youScr;
    }
    else {
        // console.log("draw");
        ele.style.display = "block";
        ele.innerHTML = "Oh! it a tie";
    }

});

rst.addEventListener("click", function(){
    ele.style.display = "none";
    chng.children[0].innerHTML = 0;
    chng.children[1].innerHTML = 0;
});
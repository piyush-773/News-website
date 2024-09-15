var x = document.querySelectorAll("button");
var play_btn = document.getElementById("play");
play_btn.style.display = "none";
var turn = document.getElementById("turn");
var z = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
var a = 0;
var winlist = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
x.forEach((el, index) => {
    el.onclick = () => editTask(index);
});

function editTask(index) {
    if (x[index].innerHTML == "" && a < x.length) {
        x[index].innerHTML = z[a];
        a++;
        turn.innerText = z[a]
        setTimeout(wincheck, 200);
    }
    if (a > x.length - 1) {
        setTimeout(match_draw, 200);
    }
}
function match_draw() {
    alert("match is draw");
    x = [];
    play_btn.style.display = "block";
}
function wincheck() {
    winlist.forEach(item => {
        if (x[item[0]].innerHTML == "X" && x[item[1]].innerHTML == "X" && x[item[2]].innerHTML == "X") {
            alert("x win the match");
            x = [];
            play_btn.style.display = "block";
        }

        if (x[item[0]].innerHTML == "O" && x[item[1]].innerHTML == "O" && x[item[2]].innerHTML == "O") {
            alert("o win the match");
            x = [];
            play_btn.style.display = "block";
        }
    });
}
function play_again() {
    location.reload();
}
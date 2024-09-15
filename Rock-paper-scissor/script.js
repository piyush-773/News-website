const opt = document.querySelectorAll(".rock");
usr = ""
opt.forEach(variable => {
    variable.addEventListener("click", () => { 
        usr=variable.id
        // document.getElementById("user").innerHTML = "<img src=\"/image/" + variable.id + ".png\">";
        timer()
    })
})

function timer() {
    element1 = document.getElementById("user")
    element2 = document.getElementById("computer")
    document.getElementById("user").innerHTML = "<img src=\"/image/rock.png\">";
    document.getElementById("computer").innerHTML = "<img src=\"/image/rock.png\">";
    element1.classList.add("active");
    element2.classList.add("active");
    myVar = setTimeout(shake, 3000);
    document.getElementById("para").innerHTML = "Wait !!";

}

function shake() {
    element1.classList.remove("active");
    element2.classList.remove("active");
    runcode()
}

function runcode() {
    document.getElementById("user").innerHTML = "<img src=\"/image/" + usr + ".png\">";
    lista = ["rock", "paper", "scissors"]
    var x = Math.floor(Math.random() * 3);
    document.getElementById("computer").innerHTML = "<img src=\"/image/" + lista[x] + ".png\">";
    wincheck()
}

function wincheck() {
    var a = document.getElementById("user").innerHTML;
    var b = document.getElementById("computer").innerHTML;
    img1 = "<img src=\"/image/rock.png\">"
    img2 = "<img src=\"/image/paper.png\">"
    img3 = "<img src=\"/image/scissors.png\">"
    // console.log(a+"and"+b)
    if ((a == img1 && b == img2) || (a == img2 && b == img3) || (a == img3 && b == img1)) {
        document.getElementById("para").innerHTML = "Computer won !!";
        console.log("Computer won !!");
    }
    else if ((a == img1 && b == img3) || (a == img2 && b == img1) || (a == img3 && b == img2)) {
        document.getElementById("para").innerHTML = "You won !!";
        console.log("You won !!");
    }
    else {
        document.getElementById("para").innerHTML = "Match draw !!";
        console.log("match draw");
    }
}


const textarea = document.getElementById("input");
const buttons = document.querySelectorAll("#numbers, .op, .ap");
document.getElementById("ad_calc").style.display = "none";
document.getElementById("money").style.display = "none";
document.getElementById("s_calc").style.display = "none";


function calc(){
    document.getElementById("ad_calc").style.display = "none";
    document.getElementById("money").style.display = "none";
    document.getElementById("calc").style.display = "flex";
}
function ad_calc(){
    document.getElementById("ad_calc").style.display = "flex";
    document.getElementById("money").style.display = "none";
    document.getElementById("calc").style.display = "none";
}
function money(){
    document.getElementById("ad_calc").style.display = "none";
    document.getElementById("money").style.display = "flex";
    document.getElementById("calc").style.display = "none";
}
function back(){
    let str = textarea.value;
    let str1=str.slice(0,str.length - 1);
    textarea.value = str1;
}
buttons.forEach(button => {
    button.addEventListener("click", function() {
        const buttonValue = this.innerText;
        if (buttonValue === "=") {
            textarea.value = eval(textarea.value)
        }
        else if (buttonValue === 'AC') {
            textarea.value = '';
        }
         else {
            textarea.value += buttonValue;
        }
    });
});

function more(){
    var ele=document.getElementById("s_calc").style.display;
    if(ele === 'flex'){
        document.getElementById("s_calc").style.display = "none";
        document.getElementById("ad_calc").style.display = "none";
        document.getElementById("money").style.display = "none";
        document.getElementById("a_calc").style.display = "flex";
    }
    else{
        document.getElementById("s_calc").style.display = "flex";
        document.getElementById("ad_calc").style.display = "none";
        document.getElementById("money").style.display = "none";
        document.getElementById("a_calc").style.display = "none";
    }
}
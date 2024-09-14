var Textplace = document.querySelector("#text");
var Inputhere = document.querySelector('#Inputplace');
var button = document.querySelector('#btn');
var count = 1;
function agechecker() {
    if (parseInt(Inputhere.value) >= 18)
        Textplace.innerText = "YESSS VERY MUCH LEGAL INDEED";
    else if (Inputhere.value == "")
        Textplace.innerText = "put a number dumbass";
    else
        Textplace.innerText = "OOHHH NOOOOOO, NOOT LEGALLL, PUT HER BACKK";
    console.log(count++);
}
button.addEventListener("click", agechecker);

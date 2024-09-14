const Textplace = document.querySelector("#text") as HTMLElement
const Inputhere= document.querySelector('#Inputplace') as HTMLInputElement
const button = document.querySelector('#btn') as HTMLButtonElement

let count:number = 1;
function agechecker():void{
    if (parseInt(Inputhere.value) >= 18)
         Textplace.innerText = "YESSS VERY MUCH LEGAL INDEED"
else if (Inputhere.value == "" )
        Textplace.innerText = "put a number dumbass"
    else 
        Textplace.innerText = "OOHHH NOOOOOO, NOOT LEGALLL, PUT HER BACKK"
    console.log(count++)
}
button.addEventListener("click",agechecker)


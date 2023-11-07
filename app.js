const computerChoiseDisplay = document.getElementById("computer-choise");
const userChoiseDisplay = document.getElementById("user-choise");
const resultDisplay = document.getElementById("result"); 

const possibleChoise = document.querySelectorAll("button");

let userChoise
let computerChoise
let result


possibleChoise.forEach(possibleChoise => possibleChoise.addEventListener("click", (e)=>{
    userChoise = e.target.id
    userChoiseDisplay.innerHTML = userChoise

    generateComputerChoise()
    getResult()
}))

function generateComputerChoise(){
    const randomNumber = Math.floor(Math.random()* possibleChoise.length +1);
    if(randomNumber === 1){
        computerChoise = "Tas"
    }
    if(randomNumber === 2){
        computerChoise = "Kagit"
    }
    if(randomNumber === 3){
        computerChoise = "Makas"
    }

    computerChoiseDisplay.innerHTML = computerChoise;
}

function getResult(){
    if(computerChoise==userChoise){
        result = "Berabere"
    }
    if(computerChoise=='tas' && userChoise =='makas'){
        result = "Maalesef.. Kaybettiniz"
    }
    if(computerChoise=='tas' && userChoise =='kagit'){
        result = "Tebrikler.. Kazandınız"
    }
    
    if(computerChoise =='kagit' && userChoise =='makas'){
        result = "Tebrikler.. Kazandınız"
    }
    
    if(computerChoise =='kagit' && userChoise =='tas'){
        result = "Maalesef.. Kaybettiniz"
    }

    if(computerChoise =='makas' && userChoise =='kagit'){
        result = "Maalesef.. Kaybettiniz"
    }

    if(computerChoise =='makas' && userChoise == 'tas'){
        result = "Tebrikler.. Kazandınız"
    }

    resultDisplay.innerHTML = result 
}
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;


var element = document.getElementById("mais");
let bmais = document.getElementById("mais");
element.addEventListener("click", increment);

var element = document.getElementById("menos");
let bmenos = document.getElementById("menos");
element.addEventListener("click", decrement);

function increment(){
    currentNumber  = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber > 0){
        document.getElementById('currentNumber').style.color = 'blue';
    }else if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }
    if(currentNumber <10){
        bmais.disabled = false;
        bmenos.disabled = false;
    }else {
        bmais.disabled = true;
    }
}

function decrement(){
    currentNumber  = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        document.getElementById('currentNumber').style.color = 'red';
    }else if(currentNumber == 0){
        document.getElementById('currentNumber').style.color = 'black';
    }
    if(currentNumber > -10){
        bmenos.disabled = false;
        bmais.disabled = false;
    }else {
        bmenos.disabled = true;
    }
}



let body = document.querySelector('body');
let hexValue = document.getElementById('hexValue');
let changeColorBtn = document.getElementById('colorChange');
let showHexBtn = document.getElementById('showHexBtn');
let hideHexBtn = document.getElementById('hideHexBtn');
let hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

let hexColorValue;

hideHexBtn.style.display = 'none';

changeColorBtn.addEventListener('click', changeColor)

function changeColor(){

    hexColorValue = '#';

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hex.length);
        hexColorValue += hex[random]
    }
    body.style.backgroundColor = hexColorValue;
    hexValue.innerHTML = hexColorValue;
    hexValue.style.display = 'unset'
    hideHexBtn.style.display = 'unset';
    showHexBtn.style.display = 'none';
}

showHexBtn.addEventListener('click', showValue);

function showValue(){
    hideHexBtn.style.display = 'unset';
    showHexBtn.style.display = 'none';
    hexValue.style.display = 'unset';
    hexValue.innerHTML = hexColorValue;
}

hideHexBtn.addEventListener('click', hideValue);

function hideValue(){
    hideHexBtn.style.display = 'none';
    showHexBtn.style.display = 'unset';
    hexValue.style.display = 'unset';
    hexValue.innerHTML = '';
}
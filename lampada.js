
function lampligar() {
        document.getElementById ('lamp').src = '/app/ligada.jpg';  
    }


function lampdesligar() {
    document.getElementById ('lamp').src = '/app/desligada.jpg';
}

function  breakLamp() {
    document.getElementById ('lamp').src = '/app/quebrada.jpg';
    newlampconfig();
}

function newlampconfig() {
    document.getElementById('newlamp').style.display = "inline-block";
    document.getElementById('turnOn').style.display = "none";
    document.getElementById('turnOff').style.display = "none";
}

function newlamp() {
    document.getElementById('lamp').src = '/app/ligada.jpg';
    document.getElementById('newlamp').style.display = "none";
    document.getElementById('turnOn').style.display = "inline-block";
    document.getElementById('turnOff').style.display = "inline-block";
}
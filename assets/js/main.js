let colorRed = document.getElementById('color_red');
let colorGreen = document.getElementById('color_green');
let colorBlue = document.getElementById('color_blue');
// let body = document.getElementById('body');

function changeBackground() {
    console.log(colorRed.value, colorGreen.value, colorBlue.value);
    document.body.style.backgroundColor = 'rgb(' + colorRed.value + ',' + colorGreen.value + ',' + colorBlue.value + ') ';
}
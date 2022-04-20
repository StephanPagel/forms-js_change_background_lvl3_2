let colorRed = document.getElementById('color_red');
let colorGreen = document.getElementById('color_green');
let colorBlue = document.getElementById('color_blue');

function changeBackground() {
    document.body.style.backgroundColor = 'rgb(' + colorRed.value + ',' + colorGreen.value + ',' + colorBlue.value + ') ';
}
console.log('hola from main.js');

//variables
const $body = document.body;
const $root = document.querySelector('#root');
let $button;

let counter = 0;

let rootButton = `<button class="counter">0</button>`
$root.innerHTML = rootButton;

let formField = `<input type="text">`;
$root.innerHTML += formField;

let $unorderedList = `<ul class="list"></ul>`
$root.innerHTML += $unorderedList;

let colors = [];

let addColorToList = color => {
  colors.push(color);
  console.log(colors);
}

let renderColors = colorsArray => {
  let html = '';
  for (let i = 0; i < colorsArray.length; i++) {
    html += `<li>${colorsArray[i]}</li>`
  }
  document.querySelector('.list').innerHTML = html;
}

function handleButtonClick(evt) {
  let targetClass = evt.target.className;
  if (targetClass === 'counter') {
    $button = document.querySelector('.counter');
    counter += 1;
    $button.innerText = counter;
    console.log(counter);
  }
}

let handleInputEnter = evt => {
  if (evt.keyCode === 13) {
    let targetColor = evt.target.value;
    $body.style.backgroundColor = targetColor;
    addColorToList(targetColor);
    renderColors(colors);
    evt.target.value = '';
  }
}

$root.addEventListener('click', handleButtonClick);
$root.addEventListener('keyup', handleInputEnter);

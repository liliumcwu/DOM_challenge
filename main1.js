console.log('all code here');

// Challenge 1
// Add a button inside #root with the number "0"
// Each time the user clicks the button increment the number

var increment = function() {
  num++;
  this.innerHTML = num;
}

var $button = document.createElement('div');
var num = 0;
$button.innerHTML = num;
$button.setAttribute('style', 'text-align: center; background-color: red; font-family: Arial; width: 60px; margin: auto;');
$button.addEventListener('click', increment);
document.getElementById('root').appendChild($button);

// Challenge 2
// Add an input field inside #root
// Every time a user enters the name of a color and hits enter
// Change the body's background to that color
// and append the name of the color to an ordered list

function changeColor(e) {
  var keyCode = e.keyCode;
  console.log('keyCode is ' + keyCode);
  if (keyCode === 13) {
    var colorAssignment = 'background-color: ' + $input.value;
    document.querySelector('body').setAttribute('style', colorAssignment);
    var $listColor = document.createElement('li');
    $listColor.textContent = $input.value
    $listy.appendChild($listColor);
    $input.value = '';
  }
}

var $input = document.createElement('input');
var $listy = document.createElement('ol');
$input.setAttribute('style', 'width: 200px; margin: 20px auto auto auto;');
$input.addEventListener('keyup', changeColor);

document.getElementById('root').appendChild($input);
document.getElementById('root').appendChild($listy);

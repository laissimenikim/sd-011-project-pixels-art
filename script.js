function setColorPalette() {
  const color = document.querySelectorAll('.color');
  const arrColors = ['black', 'red', 'blue', 'yellow'];
  for (let index = 0; index < arrColors.length; index += 1) {
    color[index].style.backgroundColor = arrColors[index];
  }
  document.getElementsByClassName('color')[0].classList.add('selected');
  console.log(color);
}

setColorPalette();

function generatePixels() {
  const board = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    board.appendChild(div);
  }
}

generatePixels();

function clearPixelsBoard() {
  const color = document.querySelectorAll('.pixel');
  for (let index = 0; index < 25; index += 1) {
    color[index].style.backgroundColor = 'white';
  }
}


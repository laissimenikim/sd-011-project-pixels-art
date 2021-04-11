const colorDivs = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
// Requisito 2
function setColorToPalete() {
  for (let index = 0; index < colorDivs.length; index += 1) {
    const colorDivsIDValue = colorDivs[index].id;
    colorDivs[index].style.backgroundColor = colorDivsIDValue;
  }
}
setColorToPalete();
// Requisito 4
const pixelBoardSize = 5;
function setBoardSize(pixels) {
  for (let lineIndex = 1; lineIndex <= pixels; lineIndex += 1) {
    const createLineDivs = document.createElement('div');
    createLineDivs.className = 'line-pixel';
    for (let columnIndex = 1; columnIndex <= pixels; columnIndex += 1) {
      const createDivs = document.createElement('div');
      createDivs.className = 'pixel';
      createLineDivs.appendChild(createDivs);
    }
    pixelBoard.appendChild(createLineDivs);
  }
}
setBoardSize(pixelBoardSize);
// Requisito 7
const colorPaleteDiv = document.querySelector('#color-palette');

function selectColor() {
  colorPaleteDiv.addEventListener('click', (event) => {
    const colorDiv = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      colorDiv.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

selectColor();

// Requisito 8
pixelBoard.addEventListener('click', (event) => {
  const storageColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const evTarget = event.target;
    evTarget.style.backgroundColor = storageColor;
  }
});
// Requisito 9
const clearButton = document.querySelector('#clear-board');

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Requisito 10 e 11
const inputElement = document.getElementById('board-size');
const generateBoard = document.querySelector('#generate-board');

function fixBoxSize() {
  if (inputElement.value < 5) {
    inputElement.value = 5;
    setBoardSize(inputElement.value);
  } else if (inputElement.value > 50) {
    inputElement.value = 50;
    setBoardSize(inputElement.value);
  } else {
    setBoardSize(inputElement.value);
  }
}

generateBoard.addEventListener('click', () => {
  if (!inputElement.value) {
    alert('Board inválido!');
  } else {
    pixelBoard.innerHTML = '';
  }
  fixBoxSize();
});

// Requisito 12
function generateRandomRGB () {
  let rgb;
  rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  return rgb;
}

let colorPick = document.querySelectorAll('.color');
for (let index = 0; index < colorPick.length; index += 1) {
  if (colorPick[index].id !== 'black') {
    colorPick[index].style.backgroundColor = generateRandomRGB();
  }
}

pixelBoard.addEventListener('click', (event) => {
  const storageColor = document.querySelector('.selected').style.backgroundColor;
  if (event.target.className === 'pixel') {
    const evTarget = event.target;
    evTarget.style.backgroundColor = storageColor;
  }
});

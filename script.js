// Finaliza requisito 6, adicionando preto como selected.
 window.onload = function() {
   document.querySelector('.black').classList.add('selected');
}

const lineWidth = 5;
const pixelQuant = 5;  
//Cria o quadro onde ficarão alocados os pixels a serem modificados
function cratePixelBoard() {
  let pixelTable = document.createElement('div');
  pixelTable.id = 'pixel-board';
  document.body.appendChild(pixelTable);
}
cratePixelBoard();

//Cria as linhas para alocação dos 5 quadrados de cores por linha.

function createLine() {
  const pixelTable = document.getElementById('pixel-board');
  for (line = 0; line < lineWidth; line += 1) {
    let lines = document.createElement('div');
    lines.classList.add('line')
    pixelTable.appendChild(lines);
  }
}
createLine();
// Cria os píxeis individuais e os joga dentro da div criado na função anterior. Essa div é a linha.
// Para esta questão, obtive ajuda do aluno Alberto Candido para direcionamento do que fazer
// Foi consultado um negócio:
// https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css
function createPixels() {
  let pixelLine = document.getElementsByClassName('line');
  for (index = 0; index < 5; index += 1) {
    for (let pixels = 0; pixels < pixelQuant; pixels += 1) {
      let createPixels = document.createElement('div');
      createPixels.classList.add('pixel', 'white');
      pixelLine[pixels].appendChild(createPixels);
    }
  }
}
createPixels();

//07 me baseei pelo código do alberto para entender.
function removeClass(event) {
  const deleteClass = document.getElementsByClassName('color');
  for (let index = 0; index < deleteClass.length; index += 1) {
    deleteClass[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function selectColor() {
let colorPallete = document.getElementById('color-palette');
colorPallete.addEventListener('click', removeClass);
}
selectColor();















// function createIndividualPixel() {
//   let divPixelTable = document.getElementById('pixel-board');
//   let AuxDiv = document.createElement('div');
//   divPixelTable.appendChild(AuxDiv);

//   for (let line = 0; line < lineWidth; line += 1){
//     let individualPixel = document.createElement('div');
//     individualPixel.classList.add('pixel');
//     divPixelTable.appendChild(individualPixel)

//   }
  
//   divPixelTable.appendChild(individualPixel);
// }
// createIndividualPixel();
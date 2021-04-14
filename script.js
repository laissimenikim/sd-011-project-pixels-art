let colorPalette = document.querySelector('#color-palette');

let cores = ['black', 'red', 'blue', 'green'];

for(let index = 0; index < cores.length; index += 1){
  let nameCor = cores[index];
  let colorsDiv = document.createElement('div');
  colorPalette.appendChild(colorsDiv);
  colorsDiv.className = 'color';
  colorsDiv.id = nameCor;
  colorsDiv.innerHTML = nameCor;

  if(colorsDiv.innerText.includes('black')){
    colorsDiv.className += ' selected'
  }

}

for(let index = 0; index < cores.length; index += 1){
  let cor = document.getElementById(cores[index]);
  cor.style.backgroundColor = cores[index];
}

let pixelsTable = document.querySelector('#pixel-board');

for(let linha = 0; linha < 5; linha += 1){
  let linhas = document.createElement('tr');
  pixelsTable.appendChild(linhas);
  for(let colunas = 0; colunas < 5; colunas += 1){
    let coluna = document.createElement('td');
    pixelsTable.appendChild(coluna);
    coluna.className = 'pixel';
  }
}
function randomizeSquareColor(e) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  interactions += 1;

  red = Math.floor(red - (red * BLACK_PERCENT * interactions) / 100);
  green = Math.floor(green - (green * BLACK_PERCENT * interactions) / 100);
  blue = Math.floor(blue - (blue * BLACK_PERCENT * interactions) / 100);

  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  if (interactions === 10) interactions = 0;
}

function removeSquareColor(e) {
  e.target.style.backgroundColor = 'white';
}

function hover() {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.addEventListener('mouseenter', randomizeSquareColor);
    square.addEventListener('mouseout', removeSquareColor);
  });
}

function generateGrid(squaresPerSide = 0) {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  interactions = 0;

  while (
    squaresPerSide < 1 ||
    squaresPerSide > 100 ||
    typeof squaresPerSide !== 'number'
  ) {
    squaresPerSide = parseInt(
      prompt(
        'Choose the number of squares per side for the new grid (between 1 and 100):'
      )
    );
  }

  for (let i = 0; i < squaresPerSide; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < squaresPerSide; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    }

    container.appendChild(row);
  }

  // Change square color on hover and add a progressive darkening effect after each interaction
  hover();
}

const SQUARES_PER_SIDE = 16;
const BLACK_PERCENT = 10;
let interactions = 0;

// Create a 16x16 grid layout
generateGrid(SQUARES_PER_SIDE);

const btn = document.querySelector('#btn-grid');
btn.addEventListener('click', generateGrid);

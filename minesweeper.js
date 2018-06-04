const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};
//console.log(generatePlayerBoard(10, 10));


//Creating Bomb board generator
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for (let i = 0; i < numberOfRows; i++) {
    let row = [];
    for (let j = 0; j < numberOfColumns; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced != numberOfBombs) {
    //An updated printBoard() Function
    let randomRowIndex = Math.floor(Math.random() * numberOfRows);
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    if(board[randomRowIndex][randomColumnIndex] != 'B'){
      board[randomRowIndex][randomColumnIndex] = 'B'
      numberOfBombsPlaced++;
    }

  }
  return board;
};
//console.log('--------------------------     -----------------------------')
//console.log(generateBombBoard(10, 10, 2));
//Function to print boards to console
const printBoard = board => {
  //return board.join('|');
  console.log(board.map(row => row.join(' | ')).join('\n'));
};


let playerBoard = generatePlayerBoard(3, 4);
console.log('------------------------------------')

let bombBoard = generateBombBoard(3, 4, 3);
console.log('Player Board: ')
printBoard(playerBoard);
console.log('Bomb Board: ')
printBoard(bombBoard);

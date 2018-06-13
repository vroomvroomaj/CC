class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
      console.log('GAME OVER');
      //this._board.print(this._playerBoard);
      this._board.print(this._board._playerBoard);

    }
    else if(this._board.hasSafeTiles()){
      console.log(`Player WON`);
      this._board.print(this._board._playerBoard);
    }
    else{
      console.log(`Current Board: ${this._board.print(playerBoard)}`);
    }
  }
}




class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }



  get playerBoard() {
    return this._playerBoard;
  }
  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This coin has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 0],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >= 0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  hasSafeTiles() {
    return (this._numberOfTiles !== this._numberOfBombs);
  }

  print(board) {
    //return board.join('|');
    console.log(board.map(row => row.join(' | ')).join('\n'));
    //console.log(board);
  }

  static generatePlayerBoard(numberOfRows, numberOfColumns) {
    let board = [];
    for (let i = 0; i < numberOfRows; i++) {
      let row = [];
      for (let j = 0; j < numberOfColumns; j++) {
        row.push(' ');
      }
      board.push(row);
    }
    return board;
  }

  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
      if (board[randomRowIndex][randomColumnIndex] != 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B'
        numberOfBombsPlaced++;
      }

    }
    return board;
  };


}


//console.log(generatePlayerBoard(10, 10));


//Creating Bomb board generator
//console.log('--------------------------     -----------------------------')
//console.log(generateBombBoard(10, 10, 2));
//Function to print boards to console





/*console.log('------------------------------------')
let bombBoard = generateBombBoard(3, 4, 4);
console.log('Player Board: ')
printBoard(playerBoard);
console.log('Bomb Board: ')
printBoard(bombBoard);



flipTile(playerBoard, bombBoard, 0, 0);
console.log('Updated Player Board: ');
printBoard(playerBoard);
flipTile(playerBoard, bombBoard, 1, 1);*/

const g = new Game(3, 3, 3);
g.playMove(1, 1);
g.playMove(0, 0);
g.playMove(2, 2);

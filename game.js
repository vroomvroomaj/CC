import { Board } from './board';




class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }
  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    console.log('Bomb Board:');
    this._board.print(this._board._bombBoard);
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

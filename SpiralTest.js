let megaMatrix = [
  [ 0, 0 , 0 ,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]];
console.log(megaMatrix);
let x = 1;
let y = 4;
let val = 1;
let rows = 5;
let cols = 6;
console.log(`X = ${x}, Y = ${y}`);
megaMatrix[x][y] = 1;
console.log(megaMatrix);
console.log('-------------------------------------------');
console.log('-------------------------------------------');
for(let i = 0; i< 5; i++){
  for(let j = 0; j< 6; j++){
    //console.log(val);
    megaMatrix[i][j] = val;
    val++;
  }
}
console.log(megaMatrix );
console.log('-------------------------------------------');
console.log('-------------------------------------------');

const checkRight (a,b) => {
if(a < rows )

};

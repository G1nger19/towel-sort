
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let a = [];
  for(let i = 0; i < matrix.length; i++){
    if(i % 2 == 1){
      a = a.concat(matrix[i].reverse());
      continue;
    }
    a = a.concat(matrix[i]);
  }
  return a;
}
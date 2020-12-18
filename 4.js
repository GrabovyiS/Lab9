function scalarMultiplication(matrix,multiplier){
  for (let i = 0; i<matrix.length; i++){
    for (let j = 0; j<matrix[i].length;j++){
      matrix[i][j]*= multiplier;
    }
  }
  console.log(matrix);
}
scalarMultiplication([[1,2,3],[4,5,6],[7,8,9]],3);
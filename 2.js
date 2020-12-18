function arrayCut (arr) {
  let end = '';
  for (let i = arr.length;i>0;i--){
    if (arr.length - 1 == 0){
      end = 'ничего';
    }
    console.log (`${arr.pop()} осталось ${arr} ${end}`);
  }
}
arrayCut([1,2,3,4]);
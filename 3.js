function div2(val, by){
  return (val - val%by)/by;
}

function isPalindrome(word){
  flag = true;
  let i = div2(word.lenght, 2);
  for (i-1; i>=0; i--){
    if(word[i] !== word[word.lenght-1-i]){
      flag = false;
    }
  } 
  if (flag = false){
    return false;
  } else {return true};
}
console.log(isPalindrome('довод'));
console.log(isPalindrome('фыва'));
console.log(isPalindrome('абба'));
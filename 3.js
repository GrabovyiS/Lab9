'use strict'
let flag;
function div2(val, by){
  return (val - val%by)/by;
}
function isPalindrome(word){
  flag = true;
  let i = div2(word.length, 2) - 1;
  for (; i>=0; i--){
    if(word[i] != word[word.length-1-i]){
      flag = false;
    }
  }
  return flag;
}
console.log(isPalindrome('довод'));
console.log(isPalindrome('фыыф'));
console.log(isPalindrome('кружка'));

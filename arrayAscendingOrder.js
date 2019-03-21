const shuffle = require('./shuffler.js');

const primeNum =(n)=>{
  var num;
  var n;
  var i;
  var result=[];
  for (num = 2; num <= n; num++) {

      var notPrime = false;
      for (i = 2; i < num; i++) {
          if (num%i===0) {
              notPrime = true;
          }
      }
      if (notPrime === false) {
        result.push(num);
      }
      }
      var shuffled= shuffle(result);
      return shuffled;

};
console.log(primeNum(100));

var array = primeNum(100);



const sort_prime = (arrayToShuffle)=>{
  var i;
  var j;
  var next;
  for (i=0; i<arrayToShuffle.length  ; i++) {
    for (j=0; j<arrayToShuffle.length; j++) {
      if (arrayToShuffle[j]>arrayToShuffle[j+1]) {
        next =arrayToShuffle[j];
        arrayToShuffle[j]=arrayToShuffle[j+1];
        arrayToShuffle[j+1]=next;
      }
    }
  }
  return arrayToShuffle;
}
sort_prime(array);
console.log(sort_prime(array));

const shuffle = require('./shuffler');

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
      return results;

}
console.log(primeNum(100));

var array = primeNum(100);


var shuffled= shuffle.shuffler(array);
console.log(shuffled);

function sort_prime(array){
  var i;
  var j;
  var next;
  for (i=0; i<array.length  ; i++) {
    for (j=0; j<array.length; j++) {
      if (array[j]>array[j+1]) {
        next =array[j];
        array[j]=array[j+1];
        array[j+1]=next;
      }
    }
  }
  return array;
}
sort_prime(shuffled);
console.log(sort_prime(shuffled));

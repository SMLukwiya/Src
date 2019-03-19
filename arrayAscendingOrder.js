const shuffle = require('./shuffler');//Imports and external function called shuffler to be called during the program

const primeNum =(n)=>{//function prints all prime numbers within a given range of numbers
  var num;
  var n;
  var i;
  var result=[];
  for (num = 2; num <= n; num++) {//iterates through all the numbers in the given range

      var notPrime = false;
      for (i = 2; i < num; i++) {//iterates through a particular number to ensure that it is divisible by only 1 and the number itslef
          if (num%i===0) {
              notPrime = true;
          }
      }
      if (notPrime === false) {
        result.push(num);//pushes all prime numbers to an empty array
      }
      }
      return results;//retruns the array of prime numbers

}
console.log(primeNum(100));//prints all the prime numbers upto 100

var array = primeNum(100);


var shuffled= shuffle.shuffler(array);//declares a variable and assigns it the imported function seen earlier passes the array through it
console.log(shuffled);//prints the result of the process above

function sort_prime(array){//function sorts the shuffled array to make it in ascending order
  var i;
  var j;
  var next;
  for (i=0; i<array.length  ; i++) {
    for (j=0; j<array.length; j++) {
      if (array[j]>array[j+1]) {
        /*iterates through the array multiple times untill all the numbers
        start from the smallest and keeps increasing until the largest
        */
        next =array[j];
        array[j]=array[j+1];
        array[j+1]=next;
      }
    }
  }
  return array;//returns the sorted array in ascending order
}
sort_prime(shuffled);
console.log(sort_prime(shuffled));//prints to the console the the sorted array

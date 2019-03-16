const primeNum =(n)=>{
  var num;
  var n;
  var i;
  var result;
  for (num = 2; num <= n; num++) {

      var notPrime = false;
      for (i = 2; i < num; i++) {
          if (num%i===0) {
              notPrime = true;
          }
      }
      if (notPrime === false) {
          result=console.log(num)
      }
  }
  return "All Prime";
}
primeNum(10);

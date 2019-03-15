const billing = (amount,transactionCharge)=> {
  var bill;
  var message;
  bill = amount-(transactionCharge/100)*amount
  message ="This is what the billed amount is (less transaction charges) ";
  return message  + bill;
}

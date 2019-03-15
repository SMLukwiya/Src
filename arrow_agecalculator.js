const age = (year,month,date)=> {
  var birthDate;
  var otherDate;
  var years;
  birthDate = new Date(year,month,date);

  otherDate = new Date();

  years = (otherDate.getFullYear() - birthDate.getFullYear());

  return "You are "+ years + " years old";
}

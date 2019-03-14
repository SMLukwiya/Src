var birthDate= '08/06/1995'
birthDate = new Date(birthDate);

var otherDate = new Date();

var years = (otherDate.getFullYear() - birthDate.getFullYear());

console.log("You are "+ years+ " years old")

var fullname=prompt("what is your name");
var id=prompt("what is your document type");
var numberid=prompt("what is your number of document type");
var gender=prompt("what is your gender");
var heigh=prompt("what is your heigh");
var booleano=prompt("is true that you live in cartago type 1 true 0 false");
console.log("Hello my name is "+fullname+"");
console.log("my number of "+id+ " is " +numberid+"");
if (gender === "m" || "M" ) {
  console.log("your gender is male");
}
else
if (gender === "f" || "F" ) {
  console.log("your gender is female");
}
console.log("my heigh is "+heigh+ "mts");
 if (booleano === "1") {
   console.log("that you life in cartago");
 }
 if (booleano === "0") {
   console.log("that you do not life in cartago");
 }

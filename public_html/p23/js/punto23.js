


var date1 = prompt("ingrese su primer fecha a calcular YY,MM,DD");

var date2 = prompt("ingrese su segunda fecha a calcular YY,MM,DD");

var a = new Date(date1);
var b = new Date(date2);

var c = a - b;
var days = Math.floor(c / (1000 * 60 * 60 * 24));
var months = days / 30;
var years = days / 365;
console.log("diferencia entre dias" + days);
console.log("diferencias entre meses" + months);
console.log("diferencias entre años" + years); 
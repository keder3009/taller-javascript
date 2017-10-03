var ASTERISCO = "*";
var ESPACIO = "     ";
i = 0;
while (i < 6) {
  ESPACIO = ESPACIO + ASTERISCO;
  console.log(ESPACIO.slice(i));
  i++;
  if (ASTERISCO === "******") {
    var i = 6;
  }
}
$("#div3").hide();
$(document).ready(function () {
    $("#button").click(function () {
        var ASTERISCO = "*";
        var ESPACIO = "-----";
        var i = 0;
while (i < 6) {
  ESPACIO = ESPACIO + ASTERISCO;
        $("#1").append(ESPACIO.slice(i) ,"<br>");
        $("#text").hide();
      i++;
  if (ASTERISCO === "******") {
    var i = 6;
  }
}
        $("#div3").show();


    });
});







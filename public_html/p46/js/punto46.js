var p = 0;
$("#div3").hide();
$(document).ready(function () {
    $("#button").click(function () {
        var npair = $("#operation").val();
  if (npair % 2 === 0){
    $("#div1").hide();
    $("#div3").show();
    $("#1").text("your number " + npair + " is a number pair");
  }
  else {
    $("#div1").hide();
    $("#div3").show();
    $("#1").text("your number " + npair + " is not a number prime");
  }
    });
});





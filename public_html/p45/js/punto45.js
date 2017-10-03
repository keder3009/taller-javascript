var p = 0;
$("#div3").hide();
$(document).ready(function () {
    $("#button").click(function () {
        var nprime = $("#operation").val();
        for (i = 1; i <= nprime; i++) {
            if (nprime % i === 0) {
          p++;
        }
    }
if (p === 2) {
  $("#div1").hide();
  $("#div3").show();
  $("#1").text("your number " + nprime + " is a number prime");
} else {
  $("#div1").hide();
  $("#div3").show();
  $("#1").text("your number " + nprime + " is not a number prime");
}
    });
});



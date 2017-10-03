$("#div3").hide();
$(document).ready(function () {
    $("#button").click(function () {
        var n1 = $("#operation").val();
        var n2 = $("#operation2").val();
        $("#1").text(n1 + n2);
        $("#2").text(n1 - n2);
        $("#3").text(n1 * n2);
        $("#4").text(n1 / n2);
        $("#div3").show();
        $("#div1").hide();
        $("#div2").hide();

    });
});
$("#div3").hide();
$(document).ready(function () {
    $("#button").click(function () {
        var n1 = $("#elevation").val();
        var n2 = $("#elevation2").val();
        $("#1").text(Math.pow(n2, n1));
        var n3 = $("#elevation3").val();
        var n4 = $("#elevation4").val();
        $("#2").text(Math.pow(n3, n4));
        var n5 = $("#multiplication").val();
        var n6 = $("#multiplication2").val();
        $("#3").text(n5 * n6);
        var n7 = $("#division").val();
        var n8 = $("#division2").val();
        $("#4").text(n7 / n8);
        var n9 = $("#division3").val();
        var n10 = $("#division4").val();
        $("#5").text(n9 / n10);
        var n11 = $("#divisionmodule").val();
        var n12 = $("#divisionmodule2").val();
        $("#6").text(n11 % n12);
        $("#div3").show();
        $("#div1").hide();
        $("#div2").hide();

    });
});
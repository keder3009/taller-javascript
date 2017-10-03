var n1=50, n2=10, result;
$(document).ready(function (){
    $("#button").click(function(){
        $("#1").text(Math.pow(n2,n1));
        $("#2").text(Math.pow(n1,n2));
        $("#3").text(n1*n2);
        $("#4").text(n2/n1);
        $("#5").text(n1%n2);
        $("#6").text(n2%n1);
        $("#7").text(n1-n2);
        $("#8").text(n1+n2);
    });
});
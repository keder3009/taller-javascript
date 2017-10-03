$(document).ready(function (){
    $("#button").click(function(){
        var fullname = $("#fullname").val();
        var id = $("#id").val();
        var numberid = $("#numberid").val();
        var gender = $("#gender").val();
        var heigh = $("#heigh").val();
        var booleano = $("#booleano").val();
        $("#1").text("Hello my name is, "+ fullname);
        $("#2").text("My number for "+ id +" is "+ numberid);
        $("#3").text("My gender is, "+ gender);
        $("#4").text("My heigh is, "+ heigh);
        $("#5").text("Its "+ booleano + " that i live in cartago" );
    });
});
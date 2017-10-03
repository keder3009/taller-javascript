$(document).ready(function (){
    $("#button").click(function(){
        var fullname = $("#fullname").val();
        var id = $("#id").val();
        var numberid = $("#numberid").val();
        $("#1").text("hello my name is, "+fullname);
        $("#2").text("my number for "+id+" is "+ numberid);
    });
});
$(document).ready(function () {
    $("#button").click(function () {
        var bonus = 25832000;
        var ne = $("#employes").val();
        var complete1= bonus/ne;
        var h = $("#hours").val();
        var gh=45000;
        var gasoline=20000;
        var complete2= h*gh-gasoline;
        var p=5280, g=12, pg=2.54;
        var complete3= pg*p*g;
        $("#1").text("solution 1: Your employees will have "+complete1+" each one");
        $("#2").text("solution 2: The electrician earns per day "+complete2);
        $("#3").text("solution 3: One mile have "+complete3);
    });
});





//https://www.quackit.com/bootstrap/bootstrap_4/tutorial/bootstrap_modal.cfm






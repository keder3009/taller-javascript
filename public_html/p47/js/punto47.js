$("#div3").hide();
$(document).ready(function () {
    $("#button").click(function () {
        var space = ("");
        var asterisque = ("*");
        var i = 0;
        do {
            space = space + asterisque;
            i++;
            $("#1").append(space ,"<br>");
            $("#text").hide();
            if (space === "******") {
                var i = 6;
            }
        } while (i < 5);
        $("#div3").show();


    });
});







$(document).ready(function () {
    $("#button").click(function () {
var a,b,c,x;
	console.log("RULE OF THREE");
	console.log("Formula ");
	console.log("       A -> B          X = C*B");
	console.log("       C -> X               A");
	console.log("EXAMPLE");
	a=prompt(" Enter your amount: ");
	console.log(" That amount cost you all together a price");
	b=prompt(" Enter your price: ");
	console.log(" But you want to know the price of a greater amount than what was purchased ");
	c=prompt(" Say new amount: ");
	x=c*b/a;
	console.log("The price of your new amount is: "+ x);    
    });
});





//https://www.quackit.com/bootstrap/bootstrap_4/tutorial/bootstrap_modal.cfm






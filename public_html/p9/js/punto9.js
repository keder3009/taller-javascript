var nprime = parseInt(prompt("We will see if the number you enter is a prime number, write your number"));
var p = 0;
for (i = 1; i <= nprime; i++) {
  if (nprime % i === 0) {
    p++;
  }
}
if (p === 2) {
  console.log("your number " + nprime + " is a number prime");
} else {
  console.log("your number " + nprime + " is not a number prime");
}

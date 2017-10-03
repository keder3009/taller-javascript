var i = 0;
var numbers = [];



for (i = 0; i < 10; i++) {
  numbers.push(Number(prompt("type your numbers")));
  var pairnumbers = numbers.filter(function (numero) {
    return numero % 2 === 0;
  });
}
console.log(pairnumbers);


console.log("Pair Numbers Using \'do while\'");
do {
  var pairnumbers = numbers.filter(function (numero) {
    return numero % 2 === 0;
    i++;
  });
} while (i < 10);
console.log(pairnumbers);

console.log("Pair Numbers Using \'while\'");
while (i < 10) {
  var pairnumbers = numbers.filter(function (numero) {
    return numero % 2 === 0;
    i++;
  });
}
console.log(pairnumbers);


var primenumber = [];

console.log("Prime Numbers Using \'for\'");
var primenumbers = [];
for (let num of numbers) {
  let p = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      p++;
    }
  }
  if (p === 2) {
    primenumber.push(num);
  }
}
console.log(primenumber);


console.log("Prime Numbers Using  'do While'");
primenumber = [];
var p = 0;
do {
  var cont = 1;
  var tmp = 0;
  do {
    if (numbers[p] % cont === 0) {
      tmp++;
    }
    cont++;
  } while (cont <= numbers[p])
  if (tmp === 2) {
    primenumber.push(numbers[p]);
  }
  p++;
} while (p < numbers.length)

console.log(primenumber);


console.log("Prime Numbers Using  'While'");
primenumber = [];
var p = 0;
while (p < numbers.length) {
  let cont = 1;
  let tmp = 0;
  while (cont <= numbers[p]) {
    if (numbers[p] % cont === 0) {
      tmp++;
    }
    cont++;
  }
  if (tmp === 2) {
    primenumber.push(numbers[p]);
  }
  p++;
}
console.log(primenumber);


console.log("Sum of pair numbers");
var pairsum = 0;
for (var i = 0; i < pairnumbers.length; i++) {
  pairsum = pairsum + pairnumbers[i];
}
console.log(pairsum);


console.log("Sum of prime numbers");
var primesum = 0;
for (var i = 0; i < primenumber.length; i++) {
  primesum = primesum + primenumber[i];
}
console.log(primesum);


console.log("average of pair numbers");
average = pairsum / primenumber.length;
console.log(average);


console.log("average of prime numbers");
average = primesum / primenumber.length;
console.log(average);
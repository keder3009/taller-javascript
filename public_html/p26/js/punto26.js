function MyFuntion() {
  var complete = prompt("1: adittion\n\
2: substraption\n\
3: multiplication\n\
4: division\n\
0: salir");
  return parseInt(complete);
}

function adittion() {
  var n1 = prompt("type your first number:");
  var n2 = prompt("type your second number");
  result = parseInt(n1) + parseInt(n2);
  console.log('the result of the sum is :' + result);
  vMenu();
}

function substraption() {
  var n1 = prompt("type your first number:");
  var n2 = prompt("type your second number");
  result = parseInt(n1) - parseInt(n2);
  console.log('the result of the subtraction is :' + result);
  vMenu();
}

function multiplicaion() {
  var n1 = prompt("type your first number:");
  var n2 = prompt("type your second number");
  result = parseInt(n1) * parseInt(n2);
  console.log('the multiplication result is :' + result);
  vMenu();
}

function division() {
  var n1 = prompt("type your first number:");
  var n2 = prompt("type your second number");
  result = parseInt(n1) / parseInt(n2);
  console.log('the result of the division is :' + result);
  vMenu();
}
function vMenu() {
  var result = MyFuntion();
  switch (result) {
    case 1:
      adittion();
      break;
    case 2:
      substraption();
      break;
    case 3:
      multiplicaion();
      break;
    case 4:
      division();
      break;

    default:
      console.log("bye");
      break;
  }
}
vMenu();
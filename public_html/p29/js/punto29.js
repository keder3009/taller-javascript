
function MyFuntion() {
  var menu = prompt("1: Add company name and code\n\
2: Search company name\n\
3: Search company code\n\
0: Exit");
  return parseInt(menu);
}

function add_name() {
  let float = 1;
  var bussines = JSON.parse(localStorage.getItem("bussines"));
  do {
    if (bussines === null) {
      bussines = [];
    }
    var name = prompt("name of element");
    var code = prompt("code of element");
    bussines.push({name, code});
    localStorage.setItem("bussines", JSON.stringify(bussines));
    float = parseInt(prompt('Type 1 to add new\n\ type 0 to return'));
  } while (float !== 0)
  vMenu();
}

function search_name() {

  var bussines = JSON.parse(localStorage.getItem("bussines"));
  var search = prompt("enter the product name");
  for (i = 0; i < bussines.lenght; i++)
    ;
  if (search === bussines[i].name) {
    console.log('name found, name: ' + bussines[i].name + "  code: " + bussines[i].code);
  } else {
    alert("not found by the name you want to search for the code?");
  }
  vMenu();
}

function search_code() {

  var bussines = JSON.parse(localStorage.getItem("bussines"));
  var search = prompt("enter the product code");
  for (i = 0; i < bussines.lenght; i++)
    ;
  if (search === bussines[i].code) {
    console.log('code found, code: ' + bussines[i].code + "  name: " + bussines[i].name);
  } else {
    alert("not found by the name you want to search for the name?");
  }
  vMenu();
}

function vMenu() {
  var result = MyFuntion();
  switch (result) {
    case 1:
      add_name();
      break;
    case 2:
      search_name();
      break;
    case 3:
      search_code();
      break;
    case 0:
      console.log("bye");
      op = 1;
      break;
    default:
      MyFuntion();
      break;
  }
}
vMenu();
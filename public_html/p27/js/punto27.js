var op = 0;
var reference = '';

function MyFuntion() {
  var menu = prompt("1: Personal_information\n\
2: Family_Reference\n\
3: Work_reference\n\
4: Professional_profile_description\n\
5: Print_resume\n\
0: Exit");
  return parseInt(menu);
}


function Personal_information() {
  var name = prompt("what is your name: ");
  var lastname = prompt("what is your lastname ");
  var age = prompt("how old are you ");
  var email = prompt(" what is your email");
  var phone = prompt("what is your phone number");
  var address = prompt("what is your address");
  var sex = prompt("what is your gender");

  Personal_information = {
    name,
    lastname,
    age,
    email,
    phone,
    address,
    sex
  };
  vMenu();
}
function date( ) {
}

function Family_Reference() {
  var name = prompt("what is her/his name: ");
  var lastname = prompt("what is her/his lastname ");
  var age = prompt("what is her/his age ");
  var email = prompt(" what is her/his email");
  var phone = prompt("what is her/his phone number");
  var address = prompt("what is her/his address");
  var sex = prompt("what is her/his gender");

  Family_Reference = {
    name,
    lastname,
    age,
    email,
    phone,
    address,
    sex
  };
  vMenu();

  return Family_Reference;
}
//var work_Reference = {};
function work_Reference() {
  var name = prompt("what is your name: ");
  var lastname = prompt("what is your lastname ");
  var age = prompt("how old are you ");
  var email = prompt(" what is your email");
  var phone = prompt("what is your phone number");
  var address = prompt("what is your address");
  var sex = prompt("what is your gender");

  work_Reference = {
    name,
    lastname,
    age,
    email,
    phone,
    address,
    sex
  };
  vMenu();

  return work_Reference;
}
function Professional_profile_description() {
  reference = prompt("type your reference pofessional: ");
  vMenu();
}

function print_resume() {

  console.log("                 personal information                ");
  console.log("\n");
  console.log("            Name:                    " + Personal_information.name);
  console.log("            Lastname:                " + Personal_information.lastname);
  console.log("            Age:                     " + Personal_information.age);
  console.log("            Email:                   " + Personal_information.email);
  console.log("            Phone:                   " + Personal_information.phone);
  console.log("            address:                 " + Personal_information.address);
  console.log("            sex:                     " + Personal_information.sex);
  console.log("\n");
  console.log("\n");
  console.log("                 Family Reference                ");
  console.log("\n");
  console.log("            Name:                    " + Family_Reference.name);
  console.log("            Lastname:                " + Family_Reference.lastname);
  console.log("            Age:                     " + Family_Reference.age);
  console.log("            Email:                   " + Family_Reference.email);
  console.log("            Phone:                   " + Family_Reference.phone);
  console.log("            address:                 " + Family_Reference.address);
  console.log("            sex:                     " + Family_Reference.sex);
  console.log("\n");
  console.log("\n");
  console.log("                 Work_reference                ");
  console.log("\n");
  console.log("            Name:                    " + work_Reference.name);
  console.log("            Lastname:                " + work_Reference.lastname);
  console.log("            Age:                     " + work_Reference.age);
  console.log("            Email:                   " + work_Reference.email);
  console.log("            Phone:                   " + work_Reference.phone);
  console.log("            address:                 " + work_Reference.address);
  console.log("            sex:                     " + work_Reference.sex);
  console.log("\n");
  console.log("\n");
  console.log("                 Professional_profile_description                ");
  console.log("\n");
  console.log(reference);
}

function vMenu() {
  var result = MyFuntion();
  switch (result) {

    case 1:
      Personal_information();
      break;
    case 2:
      Family_Reference();
      break;
    case 3:
      work_Reference();
      break;
    case 4:
      Professional_profile_description();
      break;
    case 5:
      print_resume();
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
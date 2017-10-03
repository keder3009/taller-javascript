var i, num;
var cont = 0;
var number = [];
var flag = true;
function menu() {
  var opt = parseInt(prompt(`Select one options"
  1. Fill arrangement
  2. Find element by sequential search method
  3. Apply bubble sorting method
  4. Apply bidirectional bubble sorting method
  5. Apply insertion sort method
  6. Apply method of sorting by mixing
  7. Apply the ordering method by selection
  8. Print Arrangement.
  0. Exit`));
  return opt;
}
function enter() {
  num = parseInt(prompt("How many numbers do you want to generate?"));
  cont = 0;
  number = new Array();

  for (i = 0; i < num; i++) {
    number[i] = Math.floor((Math.random() * 100));
  }
}
function search() {
  var true_false = false;
  cont = 0;
  var numbusq = parseInt(prompt(" What number do you want to search?  "));
  for (i = 0; i < number.length; i++) {
    if (numbusq === number[i]) {
      true_false = true;
      cont = i;
    }
  }
  if (true_false) {
    console.log(`The item was found ${(cont + 1)}`);
  } else {
    console.log('Item dont was found');
  }
}
function bubble() {
  var aux = 0;
  for (i = 0; i < number.length; i++) {
    for (k = 0; k < number.length; k++) {
      if (number[k] > number[k + 1]) {
        aux = number[k];
        number[k] = number[k + 1];
        number[k + 1] = aux;
      }
    }
  }
}
function order_insert() {
  for (i = 0; i < number.length; i++) {
    for (j = 0; j <= number[j]; j++) {
      var ant = 0;
      if (number[i] < number[j]) {
        ant = number[i];
        number[i] = number[j];
        number[j] = ant;
      }
    }
  }
}
function order_bublebi() {
  var righ, left;
  for (j = 0; j < num; j++) {
    for (i = 0; i < number.length; i++) {
      if (number[i] >= number[i + 1]) {
        righ = number[i];
        number[i] = number[i + 1];
        number[i + 1] = righ;
      }
    }
    for (i = number.length - 1; i > 0; i--) {
      if (number[i] < number[i - 1]) {
        left = number[i];
        number[i] = number[i - 1];
        number[i - 1] = left;
      }
    }
  }
}
function order_mixing() {
  let mergeSort = array => {
    if (array.length < 2) {
      return array;
    }
    let middle = parseInt(array.length / 2) | 0;
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    let merge = (left, right) => {
      let result = [];
      let il = ir = 0;
      while (il < left.length && ir < right.length) {
        result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
      }
      return [...result, ...left.slice(il), ...right.slice(ir)];
    };
    return merge(mergeSort(left), mergeSort(right));
  };
  let result = mergeSort(number);
  number = result;
}
function select() {
  var xxx = arr => {
    for (var j = 0; j < number.length; ++j) {
      var i = iMin = j;
      for (++i; i < number.length; ++i) {
        (arr[ i ] < arr[ iMin ]) && (iMin = i);
      }
      [arr[ j ], arr[ iMin ]] = [arr[ iMin ], arr[ j ]];
    }
    return arr;
  };
  let result = xxx(number);
  number = result;
}
function print2() {
  var info = '';
  number.forEach(function (element) {
    info += element + ' ';
  });
  console.log(info);
}
while (flag === true) {
  var opt = menu();
  switch (opt) {
    case 1:
      enter();
      break;
    case 2:
      search();
      break;
    case 3:
      bubble();
      break;
    case 4:
      order_bublebi();
      break;
    case 5:
      order_insert();
      break;
    case 6:
      order_mixing();
      break;
    case 7:
      select();
      break;
    case 8:
      print2();
      break;
    case 0:
      console.log("Thank you for using our application. Bye !!");
      flag = false;
      break;
    default:
      alert("You must select an option between 0 and 8");
  }
}
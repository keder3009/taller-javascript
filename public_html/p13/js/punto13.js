var x = '*';
var space = '    ';
var z = '';
var f = '';
var t = ' ';
for (var i = 0; i < 13; i++) {
  if (i === 0) {
    console.log(z = space + x);
  }
  if (i >= 1 && i <= 3) {
    if (i === 2) {
      f = z;
    }
    console.log(z = z.slice(1) + x + x);
  }
  if (i === 4) {
    console.log(f);
  }
  if (i === 5) {
    console.log(f);
  }
  if (i >= 6 && i <= 8) {
    console.log(f = f.slice(1) + x + x);
  }
  if (i > 8) {
    console.log(f = t + f.slice(0, -2));
  }
}
function add(num1, num2) {
  console.log(num1, num2);
}
add(12, 13, 45, 89, 78);

function add1(num1, num2) {
  console.log(num1, num2);
  console.log(arguments);
  console.log(arguments[4]);
}
add1(12, 13, 45, 89, 78);

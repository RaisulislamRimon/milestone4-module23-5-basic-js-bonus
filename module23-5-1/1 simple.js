/* for (let i = 1; i <= 10; i++) {
  console.log(i);
} */
/* 
let sum = 0;
// for (let i = 1; i <= 10; i++) {
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);
 */
/* 
let sum = 0;

for (let i = 5; i >= 1; i--) {
  sum += i;
}
console.log(sum);
 */
/* 
function sum(i) {
  console.log(i);
  return i + sum(i - 1);
}

const result = sum(5);
console.log(result);
 */

function sum(i) {
  if (i === 1) {
    return 1;
  }
  return i + sum(i - 1);
  // console.log(i);
  // return i + sum(i - 1);
}

const result = sum(5);
console.log(result);

/* 
function sum(i) {
  console.log(i);
  return i;
}

const result = sum(5);
console.log(result); */

// function sum(i) {}

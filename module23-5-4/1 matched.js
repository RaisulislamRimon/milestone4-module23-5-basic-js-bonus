// the easiest way to find in array is for of loop

const numbers = [45, 65, 23, 98, 19];

// for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// for of loop
for (const number of numbers) {
  console.log(number);
}

const products = [
  { name: "phone", price: 12000 },
  { name: "laptop", price: 20000 },

  { name: "tablet", price: 15000 },
  { name: "watch", price: 5000 },

  { name: "camera", price: 8000 },
  { name: "speaker", price: 6000 },

  { name: "headphone", price: 4000 },
  { name: "charger", price: 1000 },

  { name: "earphone", price: 2000 },
  { name: "powerbank", price: 500 },

  { name: "watch", price: 5000 },
  { name: "charger", price: 1000 },

  { name: "earphone", price: 2000 },
  { name: "powerbank", price: 500 },

  { name: "Watch", price: 5000 },
  { name: "charger", price: 1000 },
];

for (const product of products) {
  console.log(product);
}

function matchedProduct(products, search) {
  const matched = [];
  for (const product of products) {
    // console.log(product.name.includes(search));
    // if (product.name.includes(search)) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProduct(products, "watch");
console.log(result);

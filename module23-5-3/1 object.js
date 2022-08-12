const student = {
  name: "John",
  id: 121,
  address: "Kathmandu",
  isSingle: true,
  friends: ["John", "Jane", "Peter"],
  movies: [
    { name: "no-1", year: "2018" },
    { name: "king khan", year: "2019" },
  ],
  act: function () {
    console.log("I am acting");
  },
  car: {
    brand: "BMW",
    model: "X5",
    price: "$100,000",
    color: "black",
    manufacturer: {
      name: "tesla",
      ceo: "elon musk",
    },
  },
};

console.log(student);
console.log(student.friends);
console.log(student.car);
console.log(student.act);
console.log(student.act()); // undefined
student.act();

// wildcard: every single public thing
// import * as math from "./math";
// This is a "named import" NOT "destructuring"
// Named Import: must be "statically analyzable" (compiler can look and see that it is deterministic)
//    Meaning, we can't do anything variable or conditional around import/export.
// The default export allows you to get something easy from the other files, but you CAN name it funky.
import banana from "./math"; // banana === add, but that's BAD PRACTICE.

const sam = {
  name: "Sam",
  email: "sam@email.com",
  address: {
    city: "Kansas City"
  }
};
// Spread operator for functional programming copying
// Always executes left-to-right
// Spread syntax is a shallow copy (VERY IMPORTANT).
const adrian = {
  ...sam,
  name: "Adrian",
  address: { ...sam.address, city: "Boston" }
};
// Avoid deeply-nested Object structures in React (generally)
console.log(sam);
console.log(adrian);
// Destructing
// shorthand for const address = sam.address.
// Done a lot in React to not repeat object stuff all the time.
const {
  address: { city }
} = sam;
// Removing props from an object via "rest" and spread operator.
const { name, email, ...rest } = sam;
console.log(city);
console.log(rest);

// Array destructing for individual elements in an array.
const cars = [
  { make: "honda", model: "accord" },
  { make: "porsche", model: "911 turbo" },
  { make: "toyota", model: "supra" }
];

// Can skip elements with "just a comma"
const [honda, , thirdCar] = cars;
console.log(honda);
console.log(thirdCar);

// Avoid mutating data structures as React developers
// Predicate = anonymous function that returns a boolean (like in .filter)

// Exercise: use .filter to create an array without Toyota
const notoyota = cars.filter(car => car.make !== "toyota");
const nohonda = cars.filter(function(car) {
  return car.make !== "honda";
});
console.log(notoyota);
console.log(nohonda);
const modelonly = cars
  .filter(car => car.make !== "toyota")
  .map(car => car.model);
console.log(modelonly);

console.log(banana(5, 4));

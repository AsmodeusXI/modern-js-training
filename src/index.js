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

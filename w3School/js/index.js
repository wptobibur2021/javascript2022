function methods() {
  console.log("We are welcome our programming tutorial");
}
// Thsi is arow function declaration below//
const message = () => {
  alert("Hello");
};

/* Function declaration two types */

/* Normal Function declaration*/

function add() {
  let a = 12;
  let b = 15;
  let c = a + b;
  console.log("Sum result: ", c);
}
// function call below
add();

function sum(x, y) {
  let z = 0;
  z = x + y;
  console.log("Sum result two: ", z);
}
// function call below
sum(20, 12);

/* Arrow Function declaration below */

// function without parameters
const sumValue = () => {
  const x = 20;
  const y = 50;
  const z = x + y;
  console.log("Sum result of arrow function: ", z);
};
// function call below
sumValue();

// function with parameters

const addValue = (x, y) => {
  const z = x + y;
  console.log("Sum result of arrow function with parameters: ", z);
};
addValue(40, 12);

/* JavaScript Object declaration below */

const persons = {
  name: "Md Tobibur Rohman",
  study: "BSc in computer science",
  roll: "3402345",
  blood: "A+",
  myInfo: () => {
    console.log("My Name is: ", this.study);
  },
};

// Object Call below
console.log("Person Info: ", persons);
console.log("Roll: ", persons.roll);
// JavaScript String Search
// https://www.w3schools.com/jsref/jsref_obj_string.asp

/* String Method */
const stringA = "Hello, Bangladesh, how are you?";
console.log("String: ", stringA);
console.log("String Length: ", stringA.length);
console.log("Slice String: ", stringA.slice(0, 20));
console.log("Nagative String of Slice:", stringA.slice(-20, -7));
console.log("Slice one parameter pass: ", stringA.slice(0));
console.log("Substring Method: ", stringA.substring(0, 20));
console.log("Substr Method: ", stringA.substr(0, 17));
const strB = "I love my I country";
console.log("Replace String: ", strB);
console.log("String Replace: ", strB.replace("I", "he"));
console.log("UpertoLower Case: ", strB.toUpperCase());
console.log("LowertoUper Case: ", strB.toLocaleLowerCase());
const strTrim = "     I Love Bangladesh      ";
console.log("Trim String : ", strTrim);
console.log("Trim Method Apply: ", strTrim.trim());
console.log("Split Method: ", strB.split(" "));

//

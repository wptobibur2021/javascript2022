/*
Documentation Link....
https://flexiple.com/javascript/foreach-vs-map-javascript/
*/
const arra = [1, 2, 3, 4, 5];
//arra.map((x) => x * x * x);
console.log(
  "ForEach Output: ",
  arra.forEach((x) => {
    x * x;
  })
);
console.log("After forEach Previous Array: ", arra);
/*
    Foreach ব্যবহার করলে আগের অ্যারেকে Mutable ভাবে ব্যবহার করে। 
*/
console.log(
  "Map Output: ",
  arra.map((x) => {
    x * x * x;
  })
);
console.log("After Map Previous Array: ", arra);

/*
    Map ব্যবহার করলে আগের অ্যারেকে Inmutable ভাবে ব্যবহার করে। 
*/

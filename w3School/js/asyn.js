// console.log("Hello");
// let a = 30;
// console.log("A: ", a);

/* Synchronous Example */
// const procesOrder = (customer) => {
//   console.log("Processing order for customer one");
//   var currentTime = new Date().getTime();
//   while (currentTime + 10000 >= new Date().getTime());
//   console.log("Order processed for customer one");
// };
// console.log("Take order for customer one");
// procesOrder();
// console.log("Complete order for customer one");

/* Asynchronous */
const asyProcesOrder = (customer) => {
  console.log("Processing order for customer one");
  setTimeout(() => {
    console.log("Cooking Complete");
  }, 3000);
  console.log("Order processed for customer one");
};
console.log("Take order for customer one");
asyProcesOrder();
console.log("Complete order for customer one");

// let days = [];
// days.push("Sunday", "Monday", "Friday", "Saturday");

// console.log(days);
// days.splice(2, 0, "Tuesday", 5, 6, 7, 8, "Wednesday");
// console.log(days);

// days.splice(3, 5, "Wednesday", "Thursday");
// console.log(days);

// days.pop();
// days.shift();
// days.splice(3, 1, "Wednesday", "Thursday");
// console.log(days);

// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log(
//   days.find(function (findNumber) {
//     // console.log(days);
//     return findNumber === "Wednesday";
//   })
// );

// console.log(days.find((e) => e === "Friday"));

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// const student = {
//   name: String,
//   rollNumber: Number,
//   idNumber: Number | String,

//   courses: [String],

//   address: {
//     city: "Karachi",
//     country: String,
//   },
// };

// const detail = prompt(student.name);

// console.log(detail);

// import PromptSync from "prompt-sync";
// const prompt = PromptSync();

// const num = prompt("Enter Table number");

// for (let i = 1; i < 11; i++) {
//   console.log(num * i);
// }

// for (let i = 0; i < 4; i++) {
//   for (let j = 1; j < 5; j++) {
//     console.log("*");
//   }
// }

// function coffe(withFries) {
//   console.log(`your ${withFries} and coffee ready`);
// }
// coffe("Fries");

// LOCAL FUNCTION EXAMPLE:

// function outerFunction() {
//   function innerFunction() {
//     console.log("I'm an inner function");
//   }

//   innerFunction(); // Output: "I'm an inner function"
// }

// // innerFunction();
// outerFunction()

// function add(a, b) {
//   a + b;
// }
// add(2, 3);

// const doSomething = (cb) => {
//   console.log("1");
//   cb();
// };

// const doSomethin2g = () => {
//   console.log("2");
// };

// const doSomethi3g = (cb3) => {
//   console.log("3");
//   cb3();
// };

// const doSomethi4g = () => {
//   console.log("4");
// };

// doSomething(doSomethin2g);
// doSomethi3g(doSomethi4g);
// doSomethi3g();
// doSomethi4g();

// console.log("First");

// setTimeout(() => {
//     console.log("second")
// }, 3000);

// console.log("third");

// const loginuser = (email, pass) => {
//   setTimeout(() => {
//     // return email;
//     console.log("login user", email);
//   }, 3000);
// };

// const userEmail = loginuser("raza@123", 1234);
// console.log(userEmail)

// const loginuser = (email, pass, callback) => {
//   setTimeout(() => {
//     // return email;
//     callback(email)
//     // console.log("login user", email);
//   }, 3000);
// };

// loginuser("raza@123", 1234, (email) => {
//   console.log(email);
// });

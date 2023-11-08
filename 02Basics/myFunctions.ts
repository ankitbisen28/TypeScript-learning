function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  return { name, email, isPaid };
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let value = addTwo(5);
console.log(value);
getUpper("now");
let userDetails = signUpUser("Ankit", "Ankit@mail.com", true);
console.log(userDetails);

loginUser("ankit", "ankit@mail.com");

// This might be senario

// function getVal(myVal: number): string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 ok";
// }

// Return in arrow function

// const getHello = (s: string): string => {
//   return "hello";
// };

// Typescript automatically detect it's type

// const heros = ["ankit", "bisen", "ramu"];
// const heros = [1, 4, 8];

// heros.map((hero) => {
//   return hero;
// });

// when a funtion not returning anything use void in return placeholder

// function consoleErr (errmsg: string):void {
//   console.log(errmsg);
// }

// use or never in typescript

// function handleErr(errmsg: string): never {
//   throw new Error(errmsg);
// }

export {};

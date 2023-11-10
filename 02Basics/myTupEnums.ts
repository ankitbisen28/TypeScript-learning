let user: (string | number)[] = ["Ankit", 3];

let tUser: [string, number, boolean]; // we can input step by step in linear way.
tUser = ["ankit", 324, true];

let rgb: [number, number, number] = [255, 255, 255]; // you cannot add more number if there is only 3 place then you can only use 3 place.

type nUser = [number, string];

let newUser: nUser = [112, "ankitbisen@gmail.com"];
newUser[1] = "change@mail.com";
// newUser.push(true);// this cannot be pushed because we assigned number and string.

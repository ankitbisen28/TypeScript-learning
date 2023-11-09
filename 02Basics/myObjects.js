// const User = {
//   name: "Ankit",
//   email: "ankitbisen@mail.com",
//   isActive: true,
// };
// function createUser({ name: string, isPaid: boolean }) {}
// let newUser = { name: "ankit", isPaid: true, email: "ankitbisen@mail.com" };
// createUser(newUser);
// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 388 };
// }
// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };
// function createUser(user: User) {
//   return { name: "", email: "", isActive: "" };
// }
// createUser({ name: "", email: "", isActive: true });
// type User = {
//   readonly _id: string; // can't changeable beacuse of read only property
//   name: string;
//   email: string;
//   isActive: boolean;
//   creditCardDetails?: number; // if there is no value it will not throw you error. because we passed ?
// };
// let myUser: User = {
//   _id: "34234",
//   name: "Ankit",
//   email: "ankitbisen@gmail.com",
//   isActive: true,
// };
// myUser._id = "343234"
// type cardNumber = {
//   cardnumber: number;
// };
// type cardDate = {
//   cardDate: number;
// };
// type cardDetails = cardDate &
//   cardNumber & {
//     cvv: number;
// };

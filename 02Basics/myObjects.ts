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

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser(user: User) {
  return { name: "", email: "", isActive: "" };
}

createUser({ name: "", email: "", isActive: true });

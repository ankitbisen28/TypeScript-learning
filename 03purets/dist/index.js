"use strict";
// class User {
//   public email: string;
//   private name: string;
//   #name: string = ""; // this is another way to private a variable
//   city: string = "";
//   constructor(email: string, name: string) {
//     (this.email = email), (this.name = name);
//   }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
        (this.email = email), (this.name = name);
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    set getCourseCount(courseCount) {
        if (courseCount <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseCount;
    }
}
const Ankit = new User("ankitbisen@mail.com", "Ankit");
// Ankit.city = 1;

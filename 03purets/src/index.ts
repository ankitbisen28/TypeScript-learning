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
  protected _courseCount = 1;

  readonly city: string = "";
  constructor(public email: string, public name: string) {
    (this.email = email), (this.name = name);
  }

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  set getCourseCount(courseCount: number) {
    if (courseCount <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseCount;
  }
}

const Ankit = new User("ankitbisen@mail.com", "Ankit");
// Ankit.city = 1;

// Ankit.deleteToken()

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

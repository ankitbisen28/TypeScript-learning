interface User {
  readonly DbId: number; // it will only read only property you cannot change it.
  email: string;
  userId: number;
  googleId?: string; // not required to filled
  //   startTrail : () => string,
  startTrail(): string;
  getCoupon(compounname: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "learner" | "ta";
}

let Ankit: Admin = {
  DbId: 223,
  email: "ankit@gmail.com",
  userId: 332,
  startTrail: () => {
    return "Trail Started";
  },
  getCoupon: (name: "ankit", value: 23) => {
    return 10 + value;
  },
  githubToken: "2342342",
  role: "admin",
};

Ankit.email = "ankit2@gmail.com";
// Ankit.DbId = 3432; // changeable value

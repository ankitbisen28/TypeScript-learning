let score: number | string = 33;
score = 44;
score = "55";
// score = true; // it will throw a error because score expected number or string

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Ankit: Admin | User = {
  username: "ankit",
  id: 532,
};

Ankit = {
  name: "ankit",
  id: 834,
};

function getDbId(id: string | number) {
  console.log(`db id is here${id}`);
}

getDbId(3);
getDbId("3");

// stric check
function getDbId2(id: string | number) {
  // id.toUpperCase(); //this will throw error

  if (typeof id === "string") {
    id.toUpperCase();
  }
}

const data: number[] = [1, 2, 3, 4];
const data2: string[] = ["1", "2", "3", "4"];
const data3: (string | number)[] = ["ankit", 2, 3, "Bisen"]; // this will accept string and number

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment= "crew"; not able to select because we don't have that type

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: string | boolean): string | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: number;
}

identityFour<Bootle>({ brand: "ankit", type: 3 });

function getSearchProducts<T>(products: T[]): T {
  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 5;

  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

const anotherFunction = <T, U extends Database>(
  valOne: T,
  valTwo: U
): object => {
  return {
    valOne,
    valTwo,
  };
};

// anotherFunction(3, {})

interface Quiz {
    name : string, 
    type :string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public card: T[] = [];

    addToCard(products: T){
        this.card.push(products);
    }
}

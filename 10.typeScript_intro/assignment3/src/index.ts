interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}

function getUserType(obj: User | Admin): string {
  return obj.type;
}

let P1: User = {
  type: "user",
  name: "Abc",
  age: 24,
  occupation: "full-stack-web-developer",
};

let P2: Admin = {
  type: "admin",
  name: "Admin",
  age: 24,
  role: "full-stack-web-developer",
};

console.log(getUserType(P1));
console.log(getUserType(P2));

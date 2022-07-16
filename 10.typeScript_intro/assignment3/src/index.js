function getUserType(obj) {
    return obj.type;
}
var P1 = {
    type: "user",
    name: "Abc",
    age: 24,
    occupation: "full-stack-web-developer"
};
var P2 = {
    type: "admin",
    name: "Admin",
    age: 24,
    role: "full-stack-web-developer"
};
console.log(getUserType(P1));
console.log(getUserType(P2));

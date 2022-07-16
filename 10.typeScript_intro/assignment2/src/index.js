var fort = {
    title: "Raigad",
    status: true,
    id: 1
};
console.log(fort);
//2
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
var getName = function (asd) {
    var first_name = asd.first_name, last_name = asd.last_name;
    console.log("".concat(first_name, "_").concat(last_name));
};
var name = {
    first_name: "Abc",
    last_name: "def"
};
getName(name);
var myAddress = {
    houseNumbers: 1,
    street: "GBRoad",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: 400030,
    country: "India"
};
console.log(myAddress);
var myDetail = {
    phones: [9876543210, 8976541230],
    addresses: ["GB road khar", "Mumbai"],
    email: "qwert@gmail.com",
    firstname: "Abc",
    lastname: "def",
    middlename: "qwe"
};
console.log(myDetail);

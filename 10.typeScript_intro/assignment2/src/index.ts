//1 
// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number
interface objectDetails{
    title : string,
    status : boolean,
    id : number
}
const fort : objectDetails = {
    title:"Raigad",
    status: true,
    id: 1
}
console.log(fort)

//2
// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
const getName = ({first_name , last_name} : person): void => {
    console.log(`${first_name}_${last_name}`);
}
interface person {
    first_name: string;
    last_name: string;
}
const name : person = {
    first_name: "Abc",
    last_name: "def"
}
getName(name);


//3
// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types
interface Address{
    houseNumbers: number,
    street: string,
    city: string,
    state: string,
    postalCode: number,
    country: string
}

const myAddress : Address = {
    houseNumbers : 1,
    street: "GBRoad",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: 400030,
    country: "India"
}
console.log(myAddress);


//4
// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional
interface PersonDetails{
    // Prefix optional
    phones: number[],
    addresses : string[],
    email: string | null
    firstname: string,
    lastname: string,
    middlename : string | null
}
const myDetail : PersonDetails={
    phones: [9876543210,8976541230],
    addresses: ["GB road khar", "Mumbai"],
    email: "qwert@gmail.com",
    firstname: "Abc",
    lastname: "def",
    middlename: "qwe"
}
console.log(myDetail)
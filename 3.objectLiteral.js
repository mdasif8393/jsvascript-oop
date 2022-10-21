let firstName = "Shahjalal";
let institute = "Code ABC";
let greet = function (){
    console.log(`${firstName} make programming video for ${institute}`);
}

let platList = "playList";

//object literals
const myObject = {
    firstName,
    institute,
    greet(){
        console.log(`${firstName} make programming video for ${institute}`);
    },
}

myObject[platList] = "Advanced js"

//Keys Values entries
console.log(Object.keys(myObject));
console.log(Object.values(myObject));
console.log(Object.entries(myObject));
console.log(myObject.hasOwnProperty("firstName"));
console.log({a:"s", b:"s", c:"s"})

//
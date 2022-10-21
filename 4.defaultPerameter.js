function details(firstName, lastName = "Rakib", {greet = "Hello", title = "Helloo"} = {}) {
    firstName = firstName ?? "Shah Aziz"
    console.log(firstName, lastName, greet, title);
}

details(0, "Rafi", {greet: "hi", title: "Mr"})
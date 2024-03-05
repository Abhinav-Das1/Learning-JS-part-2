// object= A collection of related properties and/or methods
//         Can represent real world objects (people, products, places)
//         object = {key:value,
//                   function()}

const person1 = {
    firstName: "Naruto", 
    lastName: "Uzumaki",
    age: 33,
    isEmployed : true,
    sayFavWord: function(){console.log("Dattebayo!")},
    eat: () => console.log("I am eating Ramen."),
}

const person2 = {
    firstName: "Sasuke", 
    lastName: "Uchiha",
    age: 33,
    isEmployed : true,
    sayFavWord: function(){console.log("Chikara!")},
    eat: () => console.log("I am eating Onigiri."),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayFavWord();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayFavWord();
person2.eat();
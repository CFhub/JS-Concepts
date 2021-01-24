// ---------- Inheritance in arrays/objects

const initialUsers = ["Dave", "John", "Mike"];

// Bad practice, instead use spread operator [...yourArray]
const currentUsers = initialUsers 

// Like this
const currentUsers = [...initialUsers];

currentUsers.push("Rick", "Mary");

console.log(initialUsers);
console.log(currentUsers);

// ------- Arrow Functions

// -------- Old syntax

// function greeting(name) {
//     console.log("Hello " + name);
//     console.log(`Hey ${name}`);
// }

// greeting("Dave");

// ------- new ES6 arrow syntax  

// const greeting2 = (name) => {
//     return `Hello ${name}`;
// }

// const greet = greeting2("Jennifer");
// console.log(greet);

// Note: if you're returning a single line like above you can also write it like this

// const greeting3 = (name) => `Hello ${name}`;

// console.log(greeting3("Mike"));

// ------------- Deconstructing

// const person = {
//     name: "Mike",
//     lastName: "Brown",
//     age: 27
// };

// const numbers = [1, 2, 3, 4];

// console.log(person.name);
// console.log(numbers[1]);

// const { name, age } = person;
// const [ one, three ] = numbers;

// console.log(age);
// console.log(one);
// console.log(three);

// ----------- Map & Filter

// const users = [
//     {name: "John", age: 32},
//     {name: "Melissa", age: 22},
//     {name: "Steve", age: 19}
// ];

// const mappedUsers = users.map((user) => user.age);

// console.log(users);
// console.log(mappedUsers);

// const filteredUsers = users.filter((user) => user.age === 32);

// console.log(filteredUsers);
// Задача 1 

// for (let i = 0; i < 10 ; i+=2){
//     console.log(i)
// }

// Задача 2

// for (let i = 55; i > 19 ; i--){
//     console.log(i)
// }

// Задача 3
const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log(numbers);
const numbers_squared = [];
for(let i = 0; i < numbers.length; i++){
    numbers_squared.push(numbers[i]**2);
}
console.log(numbers_squared);

// Задача 4
const last_elem = numbers_squared[numbers_squared.length-1];
console.log("last elem", last_elem);

// Задача 5

const user = {
    firstname: "Ivan",
    lastname: "Ivanov",
    age: 20,
    salary: 500
}
const stringObj = `User's name is ${user.firstname} ${user.lastname}. He is ${user.age} year old`;
console.log(stringObj);
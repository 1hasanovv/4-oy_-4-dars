// let firstNum = prompt("1-son kiritng")
// let action = prompt("Qoshmoqchimisiz , Ayirmoqchimisiz , Kopaytirmoqchimisiz , nims qilmoqchisiz?")
// let secondNum = prompt("2-son kiritng")

// switch(action){
//     case "+":
//         alert(firstNum + secondNum)
//     break;
//     case "-":
//         alert(firstNum + secondNum)
//     break;
//     case "*":
//         alert(firstNum + secondNum)
//     break;
//     case "/":
//         alert(firstNum + secondNum)
//     break;
// }

// 1-masala
// let threeDigitNumber = parseInt(prompt("3 xonali son kiriting:"));

// let hundreds = Math.floor(threeDigitNumber / 100); 
// let tens = Math.floor((threeDigitNumber % 100) / 10); 
// let units = threeDigitNumber % 10; 

// let sum = hundreds + units;

// let difference = sum - tens;

// if (difference > 0) {
//     alert(`1- va 3- xonalar yig'indisi 2- xonadan ${difference} ga katta.`);
// } else if (difference < 0) {
//     alert(`1- va 3- xonalar yig'indisi 2- xonadan ${Math.abs(difference)} ga kichik.`);
// } else {
//     alert(`1- va 3- xonalar yig'indisi 2- xonaga teng.`);
// }


// 2-masala
// let number = prompt("Sonni kiriting:");

// let sumOfDivisors = 0;

// for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         sumOfDivisors += i; 
//     }
// }

// alert(`Siz kiritgan ${number} sonning bo'luvchilar yig'indisi: ${sumOfDivisors}`);


// 3-masala

// let arr = [true, "Salom", 23, undefined];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == 'string') {
//         arr[i] = null; 
//     }
// }

// console.log(arr);


// 4-masala
// let arr = [2, 3, 4, 52, 2, 3, 4, 53, 2, 23, 43, 2];

// let maxValue = Math.max(...arr);

// console.log(maxValue);

// 5-masala
// let values = [54, 32, 76, 12, 22];
// let sum = values.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);


// 6-masala
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let modifiedArray = array.map(num => num % 2 == 0 ? num : num);
// console.log(modifiedArray);

// 7-masala
// function calculator(a, b, operation) {
//     switch (operation) {
//         case 'add':
//             return a + b;
//         case 'subtract':
//             return a - b;
//         case 'multiply':
//             return a * b;
//         case 'divide':
//             return a / b;
//         default:
//             return 'Noto\'g\'ri operatsiya';
//     }
// }
// console.log(calculator(10, 5, 'add'));


// 8-masala

// let names = ["Nuriddin", "Shaxboz", "Adham", "Suxrob"];
// let inputName = "Adham"; 
// let exists = names.includes(inputName);
// console.log(exists ? "Bor" : "Yo'q");


// 9-masala
// let users = [
//     { id: 1, age: 20, name: "Nuriddin", gmail: "nuriddin@gmail.com" },
//     { id: 2, age: 15, name: "Komiljon", gmail: "komiljon@gmail.com" },
//     { id: 3, age: 25, name: "Izzatbek", gmail: "izzatbek@gmail.com" }
// ];

// let inputName = "Nuriddin";
// let user = users.find(u => u.name == inputName);
// if (user) {
//     console.log(user);
// } else {
//     console.log("Foydalanuvchi topilmadi");
// }


// 12-masala
// let arr = [23, 54, 21, 76, 23, 87];
// let first = arr[0];
// let last = arr[arr.length - 1];
// let sum = first + last;

// if (sum % 2 === 0) {
//     arr.unshift(sum);
// } else {
//     arr.push(sum);
// }
// console.log(arr);



// 13-masala
// let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNumbers = numbersArray.filter(num => num % 2 === 0);
// let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
// console.log("Juftlar:", evenNumbers);
// console.log("Toqlari:", oddNumbers);


// 14-masala
let originalArray = [8, 7, 6, 5, 4];
let reversedArray = [];
for (let num of originalArray) {
    reversedArray.unshift(num);
}
console.log(reversedArray);














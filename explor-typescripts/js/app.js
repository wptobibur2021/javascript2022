"use strict";
/* Basic Variable Declaration */
console.log('Hello Bangladesh');
const a = 45;
const b = 'Hello';
console.info('Output: ', a);
/* Basic Function */
const add = (a, b) => {
    let c = a + b;
    console.info('Output Sum :', c);
    return c;
};
add(20, 40);
let roll = [60, 40, 12, 4, 5, 6, 48, 7, 90, 30];
const maxNumber = Math.max(...roll);
console.log('Max Number: ', maxNumber);
/* For loop Apply on array and find out Large Number in array */
let largeNum = 0;
for (let i = 0; i <= largeNum; i++) {
    console.log('Compair Number: ', roll[i]);
    if (roll[i] > largeNum) {
        largeNum = roll[i];
        console.log('Large Number: ', largeNum);
    }
}
/* Find Out Array Length */
const arrayLength = roll.length;
console.log('Array Length: ', arrayLength);
/* Object Create */
const userInfo = { name: 'MD Tobibur', id: 3030, ip: 3456, fName: 'Father Name', mName: 'Mother Name' };
console.log('UserName: ', userInfo);
const objectKey = Object.keys(userInfo);
console.log('Object Key: ', objectKey);
const objectValue = Object.seal(userInfo);
console.log('Object Seal: ', objectValue);
/* Base Array */
// const salary: number[] = [50000, 25000, 30000, 20000, 60000, 10000]
const salary = [50000, 25000, 30000, 20000, 60000, 10000];
let indexOf = salary.indexOf(25000);
console.info('Index of: ', indexOf);
/* String Indexof */
const friendLists = ['Md', 'Abdul', 'Rohman', 'Rohim', 'Karim', 'Khan'];
let indexFrindList = friendLists.indexOf('Abdul');
console.info('Friend Index: ', indexFrindList);
// let arrayLength = friendLists.length
console.log('Array Length: ', friendLists.length);
/* If Else Condition */
const num = 5;
const num2 = 50;
const nameUser = '';
/* Apply Condition */
if (num == 5) {
    console.log('This Number of: ', num);
}
else if (nameUser) {
    console.info('Username is: ', nameUser);
}
else {
    console.info('No Output');
}
/* Object Declaration */
const userData = { name: 'Name', age: 20, salary: 40000 };
console.log('UserData Object: ', userData);
const employe = {
    name: 'Md Tobibur Rohman',
    salary: 40000,
    age: 40
};
console.log('Employee Name: ', employe.name);
console.log('Employee Salary: ', employe.salary);
console.log('Employee Age: ', employe.age);
const topPlayer = {
    name: 'Md Tobibur',
    club: 'Abahoni',
    salary: 4000000,
    age: 21,
    wife: 'Yes',
    previousClub: 'Yes'
};
const newPlayer = {
    name: 'Md Tobibur Rohman',
    club: 'Abahoni',
    salary: 400000,
    age: 21,
    previousClub: 'No'
};
console.log('Top Player: ', topPlayer);
console.log('New Player: ', newPlayer);
const wpTobibur = {
    language: 'JavaScript',
    editor: 'PhpStrom',
    expert: 'Php, Laravel, WordPress, React, Node',
    name: 'Md Tobibur Rohman',
    position: 'Web Application Developer',
    age: 35,
    address: 'Dhaka, Bangladesh',
    salary: '400000',
    joiningDate: '09/01/2021'
};
console.log('Developer: ', wpTobibur);
process.stdin.resume();
process.stdin.setEncoding("utf-8");
function print(x) {
    console.log(x);
}
let inputString = "";
let currentLine = 0;
process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});
process.stdin.on("end", () => {
    inputString = inputString.split("\n");
    main();
});
function readline() {
    return inputString[currentLine++];
}
// ************************ Code Start ***************************
function main() {
    var n = parseInt(readline());
    if (n <= 2 || n % 2 !== 0) {
        console.log("NO");
    }
    else {
        console.log("YES");
    }
}

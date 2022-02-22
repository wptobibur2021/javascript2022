function methods() {
    console.log('We are welcome our programming tutorial');
}
// Thsi is arow function declaration below//
const message = () => {
    alert('Hello')
}


/* Function declaration two types */

/* Normal Function declaration*/

function add() {
    let a = 12;
    let b = 15;
    let c = a + b
    console.log('Sum result: ', c)
}
// function call below
add()

function sum(x, y) {
    let z = 0
    z = x + y
    console.log('Sum result two: ', z)
}
// function call below
sum(20, 12)

/* Arrow Function declaration below */

// function without parameters
const sumValue = () => {
    const x = 20;
    const y = 50;
    const z = x + y
    console.log('Sum result of arrow function: ', z)
}
// function call below
sumValue()

// function with parameters

const addValue = (x, y) => {
    const z = x + y
    console.log('Sum result of arrow function with parameters: ', z)
}
addValue(40, 12)

/* JavaScript Object declaration below */

const persons = {
    name: 'Md Tobibur Rohman',
    study: 'BSc in computer science',
    roll: '3402345',
    blood: "A+",
    myInfo: () => {
        console.log('My Name is: ', this.study)
    }
}

// Object Call below
console.log('Person Info: ', persons)
console.log('Roll: ', persons.roll)




//Exercise 1 - Day 2 Slide 

function Calculator () {
    //ask for tow values and remember them in object properties
    this.read = function (x, y) {
        this.x = x
        this.y = y
    }

    //sum of the two props
    this.sum = function () {
        return this.x + this.y
    }

    //mul of the two props
    this.mul = function () {
        return this.x * this.y
    }

};

// function Calculator () {}

// Calculator.prototype = {
//     constructor: Calculator,

//     read: function (x, y) {
//         this.x = x
//         this.y = y
//     },

//     sum: function () {
//         return this.x + this.y
//     },

//     mul: function () {
//         return this.x * this.y
//     }
// }

let myCalcA = new Calculator()
let myCalcB = new Calculator()

myCalcA.read(99, 101)
console.log(myCalcA.sum())
console.log(myCalcA.mul())

//Exercise 2 - Day 2 slide
function Hero (name, occupation) {
    this.name = name
    this.occupation = occupation
}

Hero.prototype = {
    whoAreYou: function () {
        return "My name is " + this.name + " and I am a " + this.occupation;
    }
}

let hero1 = new Hero("Michael Angelo", "Ninja");
console.log(hero1.whoAreYou());

//Exercise 1 - Day 1 
let person = window.prompt("Please enter your name", "Harry Potter");
let isSoccerFan = window.confirm("Do you love soccer?");
if (person != null) {
  let par = document.createElement("p");
  let msg = person + "!";
  if (isSoccerFan) {
    msg += " You love soccer! That is awesome!";
  } else {
    msg += " You do not like soccer! No problem, that's fine!";
  }
  let text = document.createTextNode(msg);
  par.appendChild(text);
  document.body.appendChild(par);
}

//Exercise 2 - Day 1 
//Write a JS for loop that will iterate from 0 to 15......
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(i + " is even");
    } else console.log(i + " is odd");
}

//Exercise 3 - Day 1 
//Create a function sum() that accepts any number of parameters....
function sum () {
    let sum = 0
    i = 0
    while (i < Object.keys(arguments).length) {
        sum += arguments[i]
        i += 1
    }
    return sum;
}

console.log(sum(2,2,2,2,2,5)) //15

//Exercise 4 - Day 1 slide
//Write a JS program to delete the rollno prop
let student = {
    name: "David",
    sclass: "VI",
    rollno: 12
}

console.log(student) // { name: 'David', sclass: 'VI', rollno: 12 }

delete student.rollno

console.log(student) // { name: 'David', sclass: 'VI' }

//Exer 5 - Day 1 slide
//Display the length of object...
console.log(Object.keys(student).length) //2

//Enumeration
count = 0
for (key in student) {
    count += 1 
}
console.log(count) //2

//Exercise 6 - Day 2 Slide
//Write a JS program to sort an array of JS objects...
let library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245}
];

library.sort((a, b) => b.libraryID - a.libraryID)

console.log(library)

// output
// [
//     { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//     {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       libraryID: 3245
//     },
//     { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }
//  ]





    
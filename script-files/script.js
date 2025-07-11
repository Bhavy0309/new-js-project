// Create an object called `person` with `name`, `age`, and `gender` properties.
let person = {
    fName: 'bhavy',
    age: 11,
    gender: 'male'
}
// Access the `name` property from the `person` object.
console.log(person.fName)

// Change the `age` property of `person` to a new value.
person.age = 10

// Add a new property `country` to the `person` object.
person.country = 'USA'

// Delete the `gender` property from the `person` object.
delete person.gender

// Check if the `name` property exists in the `person` object.
console.log(person.fName);

// Loop through all properties in the `person` object using `for...in`.
for (let key in person) {
    console.log(key + ":" + person[key])
}

// Create an empty object called `car` and add `make`, `model`, and `year` properties.
let car = []
car[0] = 'U.S.A'
car[1] = 'Y'
car[2] = 2026

// Create an object `student` with a method `greet()` that returns "Hello".
let student = {
    greet: function (){
        console.log('Hello!')
    }
}
student.greet()

// Use a function to return an object with `title`, `author`, and `year` properties.
let book = {
    author: 'Kazu',
    title: 'Amulet',
    year: 2025
}

function callbook(bookObject){
    return bookObject.author, bookObject.title , bookObject.year 
}
let result = callbook(book)
console.log(result)
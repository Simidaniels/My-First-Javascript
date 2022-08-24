// alert on the webpage
function sayHello()  {
    alert('Hello Mrs blessing')
};

// 1// String, Numbers, Boolean, null, undefined, 
const name = 'John';
const age = 30;



const rating = 4.5;
const IsCool = true;
const x = null;
const y = undefined;
let z;
 
console.log(typeof z);



//concatenation
console.log('My name is ' + name + ' and i am ' + age);
//Template String
const hello = `My name is ${name} and I am ${age}`;
//Template String is recommended in the tutorial



console.log(hello);
const s = 'Hello World!';
console.log(s.toLowerCase())
// HELLO Output will be in small letters
console.log(s.toUpperCase())
// HELLO Output will be in capital letters
console.log(s.substring(0, 5) .toUpperCase());
// The substring is counting the letters one by one.
// and substring depends on the Figure in the bracket as used in line 33.
console.log(s.split(''));
// If you wanna split by letters you would put put empty quotes without a space in the bracket as used in line 36.
// Split a string into substrings using the specified separator and return them as an array.
// Therefore in HELLO WORLD!, we have 12 values and each character in each value including the space.

const d = 'technology, computers, it, code';
// In the tutorial S was used but i had to use D because S has been declared.
// D replace the S in the tutorial to avoid errors in this code.
console.log(d.split(', '));
// D as used in line 42.
// now we have an array of 4 values (we have each word in each array value in the output).


// ARRAYS - Variables that hold multiple values //

const numbers = new Array(1,2,3,4,5);
// we set a variable called numbers and we set it as new Array in line 52.
// When we see the 'new' keyword and then something after it means it's a Constructor.
// Which means we are constructing an Array.
console.log(numbers);
// Another example below
const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
// N.B- In javascript we can have multiple datatypes within the same array.
// we can put a number, a boolean in the array it doesn't affects the code.
console.log(fruits[1]);
// This output is for accessing one of those variable in the array.
// The output was 'oranges' reason is because arrays are zero based.
/* What i mean by arrays are zero based is;
counting the array we have APPLES which is 0, ORANGES which is 1, and PEARS which is 2.*/
fruits[3] = 'grapes';
// Line 67 would added to the array automatically.
// N.B- we can't resign arrays using const.
fruits.push('mangoes');
// If wee wanna add to the end of the array we can use the push method as used in line 69.
fruits.unshift('strawberries');
// and if we want to add to the beginning of the array we can use unshift as used in line 71.
fruits.pop();
// to take the last one off.


// if we want to check if something is an array we could do;
console.log(Array.isArray(fruits));
// To get the index of a certain value we could do;
console.log(fruits.indexOf('oranges'));

// These are the pretty common methods of Arrays //


// OBJECT LITERALS //
// Object literals are basically key value pairs.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
// our output in the console.

console.log(person.firstName, person.lastName, person.hobbies[1], person.address.street);
// Did this my self.

person.email = 'john@gmail.com';
// Adding properties
console.log(person);




// Creating an array of ToDos
// Adding an array of an Object, a Boolean
const todos = [
    {
        id: 1,
        Text: 'Take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        Text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        Text: 'Dentist appt',
        isCompleted: false
    },
];

console.log(todos[1].Text);
// output of todos as usual


const todosJSON = JSON.stringify(todos);
console.log(todosJSON);
// Our output in JSoN format in the console




// For loops
// For loops exists in many different languages.
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
// What is happening up is that the input is gonna run until the '< 10' is true
/* what happened in the output is that it ran (started from 0) it went
did an iteration it got to 1 because of the increment went through again
got to 2 and once it gets to 9 this '< 10' condition is no longer true because
we are saying i < 10. */
// And if we wanted 10 included in the output we could just do i <= 10.
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}
// *The For Loop Number is like naming the output (We could rename it if we want).
// Renaming the 'For Loop Number' does'nt give us any error when i renamed it.
// As the tutorial says we can do whatever we want.


// While Loops
// We also have While loops 
// The difference is that we set the variation outside of the loops
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}
/*
    if you did not increment the 'i++' there would be a non-ever ending loop.
    because the condition i.e(i < 10) would never be met and it would keep looping
    till infinity.
*/
// But if we add the (i++) it would increment it by 1.
// So our output would be from 0 to 9 because we did (i < 10).




// How to loop through arrays while using the for loop
for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].Text);
}
/* todos.length as used above is because length will give us the
number of items in the array */
// Don't forget we could use length in a string and also in an array.

// There are different way to loop through an array
// The for of loop method is similar but much more readable.
for(let todo of todos) {
    console.log(todo.id);
}
//todos is the name of the array while todo could be anything.



// HIGH ORDER ARRAY METHODS
/*
    ForEach (Which just loops through them),
    map(which will allow us to create a new array from an array), and them
    filter(which will allow us to create an array based on a condition).
*/

// for ForEach;
todos.forEach(function(todos) {
    console.log(todos.Text);
})
// These high order array methods take in as a perimeter of function
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

// for Map;
const todoText = todos.map(function(todos) {
    return todos.Text;
});
console.log(todoText);
// map loop`s: through and return an array of just the text values.

// for filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted == true;
});
console.log(todoCompleted);

                    // THE END OF THIS SECTION.
// Move to main(2).js.
// Don't forget you already unlinked this main.js for main(2).js.
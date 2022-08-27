// We unlinked main.js for main(2).js.

                            // CONDITIONALS //

// Starting off with simple basic x statement
// We are creating a variable called X just to test to see if see if x = true.

const x = 20;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}
// for the values of 'x' should be duly noted.
// for the 'else' if x not 10 it would not be true.

const z = 4;
const y = 11;

if(z > 5 || y > 10) {
    console.log('z is more than 5 or y is more than 10');
}
/* 
    for the output in the console if we save we don't get either of the 'z' or 'y',
    because 'z' is not greater than 5 and 'y' is not greater than '10'.
    However if we are to change one of them to be true (const y = 11;) the code will run,
    because one of the const is true (because it's in 'or' [one or the other])
*/
// I changed it to 11 so it can run in the console.
// The 'or' is represented with double piped character '||' as used above.
// 'and' is represented with '&&' as used above.
// In the tutorial my 'z' is 'x'.
// I had to name it 'z' for clearance and i don't want to clear my previous 'x' code.
// To check to see if one of the const are true we are going to use 'or'.





            // TERNARY OPERATOR
            // Letter 'v' would be declared for Ternary Operator //
/*  
    Ternary operator is like a shorthand 'if statement' and it's used a lot to assign
    variables based on condition.
*/
// for example
const v = 10;
// for my 'v' hear the tutorial used 'x', i can't because 'x' has been declared in my code work tree.
// now let's say we want to create a variable called color.
// And we are setting it based on if 'v' is greater than 10.
// The question mark (?) is the TERNARY OPERATOR(it represents then).
// 'else' which is represented with a colon.
const color = v > 10 ? 'red' : 'blue';
console.log(color);
// Blue was displayed in our console this is because 'blue' represents if it's greater than 10.




                                        // SWITCHES
                                // DO NOT IGNORE THIS LINE //
                    // Letter 'w' would be used in SWITCHES with my own example. //
/*
    Another way to evaluate a condition.
    In the tutorial, the guy used the previous example for the switch method.
    Which is 'const x = 11;' and the 'const color = v > 10 ? 'red' : 'blue';'.
    I can't use it because i already declared it in my code.
    I need to avoid errors as possible.
    So I'm gonna have to create my own to run the code.
*/
// I already declared letter 'v', 'x', 'y', 'z' in the code.
// I would be using letter 'w'.
const w = 11;
// 'w' already declaring.
const pigment = w > 10 ? 'green' : 'yellow';
// I also changed my colors to GREEN and YELLOW (red and blue is used in the tutorial).
// We do switches by setting cases.
switch (pigment) {
    case 'green': // if the color is green.
        console.log('pigment is green');
            break;
    case'yellow': // if color is yellow.
        console.log('pigment is yellow');
            break;
    default:
        console.log('pigment is NOT green or yellow'); // if color is not green or yellow.
            break;
}
// If the color is not GREEN or YELLOW the the default will display in the console.
    /*
        FOR THE COLOR EXAMPLE DECLARATIONS IF THE DECLARED IS GREATER THEN IT WILL CONSOLE THE SECOND COLOR.
        BUT I IT'S LESS THAN THE FIGURE IT WILL DISPLAY THE FIRST COLOR.
    */



                            // FUNCTIONS //
// Creating a function with the 'function' keyword.


    //    function addNums(num1 = 1, num2 = 1) {        //i added default numbers.
    //        console.log(num1 + num2);         // if we run this nothing happens because we haven't call the function.
    //        }
    //        addNums(5,5);         // we pass our perimeters here num1 which is '5' and num2 which is '4'.
// we could set default values by adding numbers to the function addNums.
/*
    Even if we do not pass any values in the perimeters, 
    so far we added default number in the function it would run in the console
*/
/* 
    if default number is added and we pass our perimeters by another figures
    it will override the default numbers and console.log the ones in the perimeters.
*/
// for the most part we don't 'console.log' in function we usually 'return' from it.
/*
    function addNums(num1 = 1, num2 = 1) {
        return num1 + num2;   // We return instead of suing the console in this place.
        }
    console.log(addNums(5, 5));
*/
// The easy way to do it is;
const addNums = (num1 = 1, num2 = 1) => num1 + num2;        // We've gotten rid of the curly braces with the equal greater than sign '=>'.
                                                        // so we do'nt need to return any value.
console.log(addNums(5, 5));


// Another way to pass it.
const addNumbs = num1 => num1 + 5;
    console.log(addNumbs(5));
// I had to change the 'addNums' to addNumbs' here.




                                // OBJECT ORIENTED PROGRAMMING //
// We can construct objects using the CONSTRUCTOR FUNCTION.
// There are 2 ways to do this we could use CONSTRUCTOR FUNCTION WITH PROTOTYPES or ES6 CLASSES.

                    // CONSTRUCTOR FUNCTION //
function Person(firstName, lastName, dob) {
    this.firstName = firstName;     // using 'this' will set it to property of the object.
    this.lastName = lastName;
    this.dob = dob;

    /* 
        The date of birth is passed with a string however we can turn it into a date object
        by using the date constructor.
    */

    this.dob = new Date(dob);       // this line wasn't included in the tutorial 
                                    // i made it a reference for better understanding
                                    // of turning date object by using the date constructor.


            // we could run different function for CONSTRUCTOR
// like using return function;
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

/*

                                //now for the ES6 function;
                    // creating a CLASS WITH METHODS(a methods is a function inside if a class).
        class person {
            constructor(firstName, lastName, dob) {
                this.firstName = firstName;
                this.lastName = lastName;
                this.dob = dob;
            }

                getBirthYear() {
                    return this.dob.getFullYear();
                }
                getFullName() {
                    return `${this.firstName} ${this.lastName}`;
                }
            }
            
*/


// Instantiate Object 
const Person1 = new Person('john', 'doe', '4-3-1980');  //dob in string.
const Person2 = new Person('mary', 'smith', '3-6-1970'); // dob in string.
    console.log(Person1); 
    console.log(Person1.getBirthYear());    // Birth year displayed in the console[for the return function].
    console.log(Person1.getFullName());     // fullName displayed in the console[for the return function].








                        // THIS IS MY OWN EXAMPLE //   // PROTOTYPES //

function Color(primary, secondary, intermediate) {
    this.primary = primary;
    this.secondary = secondary;
    this.intermediate = intermediate;

    //using the PROTOTYPES for my example;
    Color.prototype.getFullColor = function() {            //PROTOTYPE function is been used in my example.
        return `${this.primary} ${this.secondary}`;
    }
}



// Instantiate the COLOR object.
const Color1 = new Color('red', 'grey', 'violet');
    console.table(Color1);
    console.log(Color1.getFullColor());

// In the tutorial console.log was used but i used console.table.
// I got the console.table from a page on instagram.
// Using console.table in JS is better for bigger objects and it's good when debugging.

                        // ABOVE IS MY OWN EXAMPLE FOR BETTER UNDERSTANDING //



                    //ES6 also called ES2015//
/*
    With ES6 classes were added to javascript, it's important to know with classes,
    it does the same exact thing under the hood(it adds the method to the prototype).

*/


// main(3).js next.
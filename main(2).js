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

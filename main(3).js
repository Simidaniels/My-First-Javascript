                    // THE DOM (Document Object Model) //
//   console.log(window);
// In the browser we have what's called the WINDOW OBJECT.
// Window object is the parent object of the browser.
// We don't have to do windows.alert for any thing that is in windows.



            // SELECTORS
// Single Element Selector
    // The Document is what is used to select things from the document.

    
//  console.log(document.getElementById('my-form'));

//  console.log(document.querySelector('h1')); 


// jQuery is a single element selector which means even if there is more than 1 'h1' it will only select the first one.
/*
    For a long time people use jQuery which is JS library that made it easy to select
    other things than ID  like classes, tags in the HTML code.
*/



// Multiple Element Selector
// There is also multiple element selector if we wanna select more than one thing.
// By selecting all we use;

//  console.log(document.querySelectorAll('.item'));    // What this gives us is called the NodeList.
                    // Using the querySelectorAll because it you can put in the 'ID', 'class', 'tag' etc.

//  console.log(document.getElementsByClassName('item'));   // I don't have to use '.item' because it's already in getElementByClassName.
    // What this (document.getElementsByClassName) give us is not a NodeList, its an HTML collection.
    // The difference is that an HTML collection, you can't use array methods you have to manually convert it to an array if you wanna run an array methods on it.

// In all document.querySelectorAll is highly recommended.

//      console.log(document.getElementsByTagName('li'));

                                //How to LOOP(ing) through or grabbing each item.
//  const items = document.querySelectorAll('.item');

//   items.forEach((item) => console.log(item)); // The forEach() method takes display() function that displays each element of a students array.




            //  MANIPULATING the DOM (USER INTERFACE)  //

//          const ul = document.querySelector('.items');

    //   ul.remove();    // The whole 'ul' tag will remove.

    //    ul.lastElementChild.remove();   // The last element child would be removed from the 'ul' list items.

    //    ul.firstElementChild.textContent = 'Hello';     // This would change the context of the first elementChild to 'Hello' or anything that has been set to.

    //    ul.children[1].innerText = 'Brad';  //  We can't do it like the first one because we only have the 'first and last child element'
                                            //   and since the 'ul.children[1]' because the arrays always start from 'zero'. which is index(NODE LIST).

  //    ul.lastElementChild.innerHTML = '<h1>Hello</h1>';   // using the innerHTML here is like you embed it by displaying HTML properties.

                        // Changing some styles //

//  const btn = document.querySelector('.btn');

//  btn.style.background = 'green';     // asking WHY we used JS for the background and we did not use the CSS is because:
                                        //  we can have a events in function and make this DYNAMIC like click on one thing
                                        //  and make the color of something else change or the size change or anything at all,
                                        //  so we can manipulate things in the user interface in real time.


                            // EVENTS //
//  btn.addEventListener('click', (e) => {      // When you use the eventListener it takes in the event perimeter.
//  e.preventDefault();     // for preventing the default behavior.
    //      console.log('click');
    //      console.log(e);             // Event Object
//      document.querySelector('#my-form').style.background = '#ccc';
//      document.querySelector('body').classList.add('bg-dark');
//      document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
//  });
















                    // ADDING A USER, GRABBING THE VALUES AND OUTPUT THE USERS //
                // grabbing from the DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#msg');
const userList = document.querySelector('#users');



// Submitting event on the form
myForm.addEventListener('submit', onSubmit);        //submit event.

function onSubmit(e) {
    e.preventDefault();

//  console.log(nameInput.value);   // Using the 'nameInput' only gives the element in the HTML. (but we need the value in the input).
                                    // If we have an input set to a value like 'nameInput' we just put '.value' then it would display the name instead of the actual element in he HTML.
        

                                    // Form Validation
    if (nameInput.value === '' || emailInput.value === '') {          // (Don't Submit form unless both fields are filled out).
        msg.innerHTML = 'please enter all fields';                    // giving user a message to enter fields.
    }  else {
        console.log('success');                                       // Input fields success.
    }
};

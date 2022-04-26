console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Neil ',
  lastName: 'Hanson',
  hasSiblings: true,
  shoeCount: 3,
  favThreeFoods: ['Pot Roast', 'Grilled Cheese', 'Pizza']
  // TODO - add properties here
};
console.log('A little about me:', me);
// Testing to see if var 'me' shows all properties of it.



/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName = me.firstName + me.lastName;
console.log(`Should show my full name if done correctly: ${fullName}!`);
// Testing to see if var 'fullName' adds both object properties together.



/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
console.log(`This should show "pot roast" if done correctly: ${me.favThreeFoods[0]}`);
console.log(`This should show "pizza" if done correctly: ${me.favThreeFoods[me.favThreeFoods.length-1]}`);
// Testing to see if accessing certain oject properties is working properly.



/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log(`Here is how many shoes I currently have: ${me.shoeCount}`);
me.shoeCount += 1;
console.log(`My new shoes just came in the mail! Here's how many shoes I now have: ${me.shoeCount}`);
// Testing to see if changing properties of an object is working properly.



/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'Green';
console.log(`This should show "green" if I added a new property to the 'me' object: ${me.favoriteColor}`);
console.log('This will show the updated "me" with the new "favoriteColor" property:',me);
// Testing to see if the 'favoriteColor' property was added to 'me'.
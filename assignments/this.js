/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding- 'This' keyword defaults to the window object when it isn't specified by .call, .apply, .bind or nothing is to the left of the dot.   Can run 'strict mode' to unbind from or not utilize window object to run an undefined. 
* 2. Implicit Binding- Most common rule, looks to the left of the dot when the function is called and that's what 'this' references. When a function is invoked with the 'new' keyword, 'this' inside the function is bound to the new object that is being constructed. 
* 3. New Binding- Uses Constructor Functions called with 'new' keyword, and creates a brand new object.
* 4. Explicit Binding- Uses .call, .apply, and .bind properties to explicitly state where 'this' is being referenced. .apply is same as .call, but instead of passing in arguments one by one(like .call), it can pass arguments in as an array. .bind also works the same as .call, but returns a brand new function that can be called later. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// let sayLocation = function(){
//     'use strict';
//     console.log(this.location);
// };
// let me = {
//     location: 'Brooklyn'
// };
// sayLocation(); 

// // Principle 2

// // code example for Implicit Binding
// var Human = function(name, location){
//     return {
//         name: name,
//         location: location,
//         sayLocation: function(){
//             console.log(this.location);
//         }
//     }; 
// };
// let shanda = Human('Shanda','Brooklyn');
// shanda.sayLocation();  

// // // Principle 3

// // // code example for New Binding
// function Creature(saying){
//     this.phrase = saying;
// }

// let shadowFax = new Creature('Shadowfax is the Lord of All Horses 🧙🏻‍♂️');

// console.log(shadowFax.phrase);

// // Principle 4

// // code example for Explicit Binding
// // .call ex:
// var sayName = function(){
//     console.log('My name is ' + this.name);
// };

// let frodo ={
//     name: 'Frodo',
//     age: 33
// };
// sayName.call(frodo);

// // .apply ex:
// var sayName = function(lang1, _lang2, _lang3){
//     console.log('My name is ' + this.name + ' ' + 'and I know ' + lang1);
// };

// let frodo ={
//     name: 'Frodo',
//     age: 33
// };
// let languages = ['Elvish', 'Entish', 'Common Speech'];

// sayName.apply(frodo, languages);

// // .bind ex:
// var sayName = function(lang1, _lang2, _lang3){
//     console.log('My name is ' + this.name + ' ' + 'and I know ' + lang1);
// };

// let frodo ={
//     name: 'Frodo',
//     age: 33
// };
// let languages = ['Elvish', 'Entish', 'Common Speech'];
// let newFn = sayName.bind(frodo, languages[0], languages[2]);
// console.log('NEW FUNCTION FOR BIND');
// newFn(); 


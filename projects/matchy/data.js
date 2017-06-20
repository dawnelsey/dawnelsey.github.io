/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "Cat";
animal['name'] = "Larry";
animal.noises = [];
//console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


var noises = [];
noises[0]="bark";
noises.unshift("meow");
noises[2] = 'moo';
noises.push("squeal");
noises.push('roar');
console.log (noises.length);
console.log (noises);
console.log (noises[noises.length -1]);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////


for (var i = 0; i < noises.length; i++){
  animal.noises.push(noises[i]);
}
  console.log (animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      1. Dot Notation 
        2. Bracket notation
 * 2. What are the different ways of accessing elements on arrays?
        1. for loop
        2. index
 *
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
 var animals = [];
 animals.push (animal);
 console.log (animals);


var duck = {
    species: "duck",
    name: "Jerone",
    noises: [ "quack", "hook", "sneeze", "wosh"],
};
animals.push(duck);


var bird = {
    species: "bird",
    name: "Paul",
    noises: [ "talk", "hook", "sneeze", ],
};
animals.push(bird);

var whale = {
    species: "whale",
    name: "David",
    noises: [ "spalsh", "hook", "sneeze", ],
};
animals.push(whale);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Assign the variable friends to an object
var friends = {
    
};

    Math.random(animals);

console.log(friends);
/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}

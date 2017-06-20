/**
 * Part 2
 * 
 * In this file, we're going to create some 
 * Functions to work with our data created in
 * data.js.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    for (var i = 0; i < animals.length; i++);
    if (animals[i].name === name){
        return animals[i];
    }
}
return null;
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement) {
    for (var i = 0; i , animals.length; i++) {
        name = name[0].toUppercase + name.slice(1).toLowercase();
        if (animals[i].name === name){
        animals[i] = replacement;
        return animals[i];
}
}return null;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(var i = 0; i < animals.length; i++) {
     if(animals [i].name === name) {
         animals.splice(i, 1);
     }   
    }return null;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    if (animal.name.length > 0 && animal.specieces.length > 0){
        for(var i = 0; i < animals.length; i++){
            if(animals[i].name.toLowerCase() !== animal.name.toLowerCase()){
                return animals.push(animal);
            } else if (animals[i].name.toLowerCase() === animal.name.toLowerCase()) {
                return alert ("Enter a different name ");
        }
    }
}else if(animal.name.length === 0 || animal.species.length === 0){
    alert("Enter the Name and Species");
}
}


/** 
 * You did it! You're all done with Matchy!
 */
 
 
 
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search;
    module.exports.replace = replace;
    module.exports.remove = remove;
    module.exports.add = add;
}
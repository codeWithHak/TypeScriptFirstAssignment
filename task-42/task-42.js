"use strict";
/*let magicians = ["Dumbledore","Woldermort","Harry Potter"];

let show_magicians = ()=>{
    for (const iterator of magicians) {
        console.log(` ${iterator}`);
        
    }
}


 show_magicians()

let make_great = (str:string)=>{
    for (const iterator of magicians) {
        console.log(`${str}${iterator}`);
    }

    
}

make_great("The Great")*/
Object.defineProperty(exports, "__esModule", { value: true });
function showMagicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Creating an array of magician names
var magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the function to modify magician names
var greatMagicians = makeGreat(magicianNames);
// Calling the function to display modified magician names
showMagicians(greatMagicians);

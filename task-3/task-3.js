"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
// could not able to do it 
var myName = "huzair ahmed khan";
var uppercase = function () {
    return myName.toUpperCase();
};
console.log(uppercase());
var lowercase = function () {
    return myName.toLowerCase();
};
console.log(lowercase());
// let titlecase = () =>{
//      let splitting = myName.split(" ");
//      let capitalizing = splitting.map(myName => myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase());
//      let rejoining = capitalizing.join(" ")
//      return rejoining
// }
var titlecase = function () {
    var splitting = myName.split(" ");
    var capitalizing = splitting.map(function (myName) { return myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase(); });
    var rejoining = capitalizing.join(" ");
    return rejoining;
};
console.log(titlecase());

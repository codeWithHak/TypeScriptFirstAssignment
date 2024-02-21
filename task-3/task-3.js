"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
Object.defineProperty(exports, "__esModule", { value: true });
// could not able to do it 
var myName = "huzAir ahmeD kHaN";
var uppercase = function () {
    return myName.toUpperCase();
};
console.log(uppercase());
var lowercase = function () {
    return myName.toLowerCase();
};
console.log(lowercase());
var titlecase = function () {
    //First we will convert string into an arrray and see where are the white spaces
    var splitting = myName.split(" ");
    var capitalizing = splitting.map(function (myName) { return myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase(); });
    var rejoining = capitalizing.join(" ");
    return rejoining;
};
console.log(titlecase());

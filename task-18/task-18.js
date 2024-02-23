"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var locations = ["winterfell", "maldives", "lords", "harvard university", "the night's watch"];
console.log("Original Locations: ".concat(locations));
var sortedLocations = __spreadArray([], locations, true).sort();
console.log("Sorteed Locations : ", sortedLocations);
console.log("Original Locations: ", locations);
var reversedLocations = __spreadArray([], locations, true).reverse();
console.log("Reversed Locations: ", reversedLocations);
console.log("Original Locations: ", locations);
var againReverse = locations.reverse();
console.log("Deep Reversed: ", againReverse);
console.log("Original array is changed: ", locations);
var againSorted = locations.sort();
console.log('Again Sorted Alphabetically: ', againSorted);
console.log('Original array is alphabetically sorted: ', locations);
var finalReverse = locations.reverse();
console.log('Again Sorted Reverse Alphabetically: ', finalReverse);

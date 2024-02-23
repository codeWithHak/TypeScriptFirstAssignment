const locations:string[] = ["winterfell", "maldives", "lords", "harvard university", "the night's watch"];
console.log(`Original Locations: ${locations}`);
let sortedLocations = [...locations].sort();
console.log("Sorteed Locations : ",sortedLocations);
console.log("Original Locations: ",locations);
let reversedLocations = [...locations].reverse();
console.log("Reversed Locations: ",reversedLocations);
console.log("Original Locations: ",locations);
let againReverse = locations.reverse()
console.log("Deep Reversed: ",againReverse);
console.log("Original array is changed: ",locations);
let againSorted = locations.sort()
console.log('Again Sorted Alphabetically: ',againSorted);
console.log('Original array is alphabetically sorted: ',locations);
let finalReverse = locations.reverse();
console.log('Again Sorted Reverse Alphabetically: ',finalReverse);


export{}
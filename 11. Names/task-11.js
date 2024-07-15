// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// by using foreach
var myFriends = ["Hamza", "Khizar", "Abdullah", "Huzaifa", "Farrukh"];
myFriends.forEach(function (friend) {
    console.log(friend);
});
console.log('\n');
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
console.log('\n');
// by sung forof
for (var _i = 0, myFriends_1 = myFriends; _i < myFriends_1.length; _i++) {
    var friend = myFriends_1[_i];
    console.log(friend);
}
// let myFriends = ["Huzaifa" , "Hamza" , "Khizar"]
// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[1]);
// export{}

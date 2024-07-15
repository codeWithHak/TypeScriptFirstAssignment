// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var myFriends = ["Hamza", "Khizar", "Abdullah", "Huzaifa", "Farrukh"];
for (var _i = 0, myFriends_1 = myFriends; _i < myFriends_1.length; _i++) {
    var friend = myFriends_1[_i];
    console.log("Hello ".concat(friend, " how are you"));
}

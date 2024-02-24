var current_users = ["Huzair", "Huzaifa", "Khizar", "Abdullah", "Hamza"];
var new_users = ["Farrukh", "Talha", "Huzair", "Khizar", "Kashan"];
new_users.map(function (index) {
    if (current_users.indexOf(index) !== -1) {
        console.log("".concat(index, " you need another username"));
    }
    if (current_users.indexOf(index) == -1) {
        console.log("".concat(index, " username available"));
    }
});

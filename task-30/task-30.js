var usernames = ['Huzaifa', 'Abdullah', 'Admin', 'Huzair', 'Khizar'];
for (var index = 0; index < usernames.length; index++) {
    var element = usernames[index];
    if (element == 'Admin') {
        console.log("Hello ".concat(element, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(element, " thanks for logging in"));
    }
}

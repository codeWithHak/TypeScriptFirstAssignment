"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usernames = ['', '', '', '', ''];
for (var index = 0; index < usernames.length; index++) {
    var element = usernames[index];
    if (element == 'Admin') {
        console.log("Hello ".concat(element, ", would you like to see a status report?"));
    }
    else if (element == '') {
        console.log("We need to find some users!");
    }
    else {
        console.log("Hello ".concat(element, " thanks for logging in"));
    }
}

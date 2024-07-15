"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ["Dumbledore", "Woldermort", "Harry Potter"];
var show_magicians = function () {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(" ".concat(magician));
    }
};
var make_great = function (str) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var iterator = magicians_2[_i];
        console.log("".concat(str).concat(iterator));
    }
};
show_magicians();
make_great("The Great");

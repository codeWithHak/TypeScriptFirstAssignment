"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var make_shirt = function (size, msg) {
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "I love TypeScript"; }
    console.log("Size of your shirt is ".concat(size, "\n").concat(msg));
};
make_shirt();
make_shirt("Medium");
make_shirt("Small", "TypeScript is better than JavaScript");

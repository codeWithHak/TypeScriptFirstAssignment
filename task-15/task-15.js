"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["Babar Azam", "Shadab Khan", "Keiani"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var invitation = "Dear ".concat(guest, ", your presence would be greatly appreciated if you could join us.");
    console.log(invitation);
}
console.log("\n".concat(guestList[2], " won't be able to meet us ): \n"));
guestList[2] = "Sadie Sink";
console.log("Nvm we will invite ".concat(guestList[2], " instead\n"));
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    var invitation = "Dear ".concat(guest, ", your presence would be greatly appreciated if you could join us.");
    console.log(invitation);
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guestList = ["Babar Azam", "Shadab Khan", "Zayn Malik", "Saddie Sink"];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    var invitation = "Dear ".concat(guest, ", your presence would be greatly appreciated if you could join us.");
    console.log(invitation);
}
console.log("yohoo guys! I've found a bigger table let's invite some more friends");
guestList.unshift("Khabib Nurmagomedov");
guestList.splice(3, 0, "Conor McGregor");
guestList.push("Imran Khan");
console.log(guestList);
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var guest = guestList_2[_a];
    var invitation = "Dear ".concat(guest, ", your presence would be greatly appreciated if you could join us.");
    console.log(invitation);
}

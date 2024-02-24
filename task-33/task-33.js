var ordinals = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, ordinals_1 = ordinals; _i < ordinals_1.length; _i++) {
    var iterator = ordinals_1[_i];
    if (iterator === 1) {
        console.log("".concat(iterator, "st"));
    }
    else if (iterator === 2) {
        console.log("".concat(iterator, "nd"));
    }
    else if (iterator === 3) {
        console.log("".concat(iterator, "rd"));
    }
    else {
        console.log("".concat(iterator, "th"));
    }
}

var details = function (name, model, damaged, color, seats) {
    return {
        name: name,
        model: model,
        damaged: damaged,
        color: color,
        seats: seats
    };
};
console.log(details("Buggati", "bm600", false, "black", 5));

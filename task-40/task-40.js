var make_album = function (artist, title, tracks) {
    return {
        artist: artist,
        title: title,
        tracks: tracks !== undefined ? tracks : "Not counted",
    };
};
var album1 = make_album("Hashim Nawaz", "Tazaadat", 9);
var album2 = make_album("JJ47", "Talk to you later");
var album3 = make_album("Jokhay", "Therapy", 6);
console.log(album1);
console.log(album2);
console.log(album3);

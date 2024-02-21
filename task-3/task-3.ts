let myName = "huzAir ahmeD kHaN"

let uppercase = () => {
    return myName.toUpperCase()
}
 console.log(uppercase());


let lowercase= () => {
    return myName.toLowerCase()
}
 console.log(lowercase());


let titlecase = () => {

    //First we will convert string into an arrray and see where are the white spaces for that we will use split method and set our parameter to " " empty string and add space in that string so whereever it will see an empty space it will separate that element and return as an item in array 

    let splitting = myName.split(" ");

    //Now that we have every word separated in an array we capitalize the first letter for that we will use map (i don't completely understand map) so it wil iterate throughout our string then we will capitalize the first character of every array item and then we will separate the rest of the array by using substring and conveer it into lowercase.

    let capitalizing = splitting.map(myName => myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase());

    //Now that we have an array where every item is capitalized we will convert it into a string by using join and set the parameter to again " " empty string which has one empty space so it will replicate the array but convert it into string

    let rejoining = capitalizing.join(" ")
    return rejoining
}

console.log(titlecase());






export{}



// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// could not able to do it 

let myName = "huzAir ahmeD kHaN"

let uppercase = () => {
    return myName.toUpperCase()
}
 console.log(uppercase());


let lowercase= () => {
    return myName.toLowerCase()
}
 console.log(lowercase());


// let titlecase = () =>{
//      let splitting = myName.split(" ");
//      let capitalizing = splitting.map(myName => myName.charAt(0).toUpperCase()+myName.slice(1).toLowerCase());
//      let rejoining = capitalizing.join(" ")
//      return rejoining
    
// }


let titlecase = () => {
    let splitting = myName.split(" ");
    let capitalizing = splitting.map(myName => myName.charAt(0).toUpperCase() + myName.substring(1).toLowerCase());
    let rejoining = capitalizing.join(" ")
    return rejoining
}

console.log(titlecase());






export{}



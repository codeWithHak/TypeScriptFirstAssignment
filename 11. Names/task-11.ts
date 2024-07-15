// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.


let myFriends:string[] = ["Hamza","Khizar","Abdullah","Huzaifa","Farrukh"]


// by accessing arrays index
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[1]);
console.log('\n');


// by using foreach loop
myFriends.forEach((friend)=>{
    console.log(friend);
    
})
console.log('\n');


// by using for loop
for (let i=0; i<myFriends.length; i++){
    console.log(myFriends[i]);
    
}
console.log('\n');


// by sung forof loop
for (let friend of myFriends){
    console.log(friend);
    
}

export{}
















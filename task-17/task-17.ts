let guestList = ["Babar Azam", "Shadab Khan","Zayn Malik","Saddie Sink"];
for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation); 
}
console.log("\nyohoo guys! I've found a bigger table let's invite some more friends\n");
guestList.unshift("Khabib Nurmagomedov")
guestList.splice(3,0,"Conor McGregor")
guestList.push("Imran Khan")
console.log(guestList,'\n');
for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation); 
}
console.log(`\nUmm, Ahhh Soryy guys i could not arrange the big table so only two of you can come\n`);

for (let index = guestList.length; index > 2; index--) {
    let remove = guestList.splice(-1)
    console.log(`Sorry ${remove} for wasting your time`);

}
console.log('\n',guestList,'\n');
for (let index = guestList.length; index > 0; index--) {
    let remove = guestList.splice(-1)
    console.log(`Sorry ${remove} for wasting your time`);

}
console.log('\n',guestList);






export{}
let guestList = ["Babar Azam", "Shadab Khan","Zayn Malik","Saddie Sink"];

for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation); 
}
console.log("yohoo guys! I've found a bigger table let's invite some more friends");
guestList.unshift("Khabib Nurmagomedov")
guestList.splice(3,0,"Conor McGregor")
guestList.push("Imran Khan")
console.log(guestList);

for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation); 
}

export{}
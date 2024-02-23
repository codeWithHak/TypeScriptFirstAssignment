let guestList = ["Babar Azam", "Shadab Khan","Keiani"];

for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation);   
}

console.log(`\n${guestList[2]} won't be able to meet us ): \n`);

guestList[2] = "Sadie Sink"

console.log(`Nvm we will invite ${guestList[2]} instead\n`);

for (const guest of guestList) {
    let invitation =`Dear ${guest}, your presence would be greatly appreciated if you could join us.`
    console.log(invitation);   
}
export{}

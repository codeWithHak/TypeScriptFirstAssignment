let current_users = ["Huzair","Huzaifa","Khizar","Abdullah","Hamza"];
let new_users = ["Farrukh","Talha","Huzair","Khizar","Kashan"];

new_users.map((index)=>{
    if(current_users.indexOf(index)!== -1){
        console.log(`${index} you need another username`);
        
    }
     if (current_users.indexOf(index) == -1) {
        console.log(`${index} username available`)}
})


let usernames = ['Huzaifa','Abdullah','Admin','Huzair','Khizar'];
for (let index = 0; index < usernames.length; index++) {
    const element = usernames[index];
    if (element == 'Admin') {
        console.log(`Hello ${element}, would you like to see a status report?`);
        
    }
    else{console.log(`Hello ${element} thanks for logging in`);}
    
    
}

export{}
let sandwich =(...items:string[])=>{
    console.log("Your sandwich has");
    for (const item of items) {
        console.log(`${item}`);
        
    }
    
}

sandwich("Chesee");
sandwich("Chesee","salt")
sandwich("Chesee","salt","pepper")


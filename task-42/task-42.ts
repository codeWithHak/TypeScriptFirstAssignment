let magicians = ["Dumbledore","Woldermort","Harry Potter"];

let show_magicians = ()=>{
    for (const magician of magicians) {
        console.log(` ${magician}`);
        
    }
}


let make_great = (str:string)=>{
    for (const iterator of magicians) {
        console.log(`${str}${iterator}`);        
    }

    
}

make_great("The Great")




export{}
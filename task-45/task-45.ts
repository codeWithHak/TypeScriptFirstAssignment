

let details = (name:string,model:string,damaged:number|string|boolean,
    color:string,
    seats:number)=>{
    return{
        name,
        model,
        damaged,
        color,
        seats
    }
}
console.log(details("Buggati","bm600",false,"black",5));
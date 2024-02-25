let make_album = (artist:string,title:string,tracks?:number) => {
    return {
        artist:artist,
        title:title,
        tracks:tracks !== undefined ? tracks:"Not counted",
    } 

    
        
    
}
let album1 = make_album("Hashim Nawaz","Tazaadat",9)
let album2 = make_album("JJ47","Talk to you later")
let album3 = make_album("Jokhay","Therapy",6)
console.log(album1)
console.log(album2)
console.log(album3)

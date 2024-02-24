let ordinals = [1,2,3,4,5,6,7,8,9]
for (const iterator of ordinals) {
    if(iterator === 1){
        console.log(`${iterator}st`);
    }
    else if (iterator === 2) {
        console.log(`${iterator}nd`);
    }
    else if (iterator === 3) {
        console.log(`${iterator}rd`);
    }
    else  {
        console.log(`${iterator}th`);
    }
}
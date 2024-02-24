// includes method is not working i googled it says i have to make changes in my tsconfig.json in lib or change version to es6 or above but its still dosent work so i used other syntax

let fruits = ["apple","banana","mango","pineapple"]
if (fruits.indexOf("apple")!==-1){
    console.log("Apple is one of my favurite fruits");
    
}

if (fruits.indexOf("banana")!==-1) {
    console.log("Banana is one of my favurite fruits")
}

if (fruits.indexOf("mango") !== -1) {
    console.log("Mango is one of my favurite fruits")
}

if (fruits.indexOf("pineapple")!==-1) {
    console.log("Pineapple is one of my favurite fruits")
}

let fav_fruits = ["grapes", "pomegranate","orange" ];

if (fav_fruits.indexOf("grapes")!==-1){
    console.log(`Yoy really like ${fav_fruits[0]}`);  
}

if (fav_fruits.indexOf("bananas")!==-1){
    console.log(`Yoy really like ${fav_fruits[1]}`);  
}

if (fav_fruits.indexOf("apple")!==-1){
    console.log(`Yoy really like ${fav_fruits[1]}`);  
}

if (fav_fruits.indexOf("pomegranate")!==-1){
    console.log(`Yoy really like ${fav_fruits[1]}`);  
}
if (fav_fruits.indexOf("orange")!==-1){
    console.log(`Yoy really like ${fav_fruits[2]}`);  
}

export{}
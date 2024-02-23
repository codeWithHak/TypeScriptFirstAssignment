interface format  {
    name:string,
    age:number,
    email:string,
    qualification:string,
    profession:string,
    hobby:string,
};

let myInfo:format={
    name:'Huzair Ahmed Khan',
    age:17,
    email:"huzairahmedkhan@gmail.com",
    qualification:"Matriculation",
    profession:"Web Developer",
    hobby:"Cricket",
}

console.log(`My name is ${myInfo.name}\nI am ${myInfo.age} years old\nContact me at ${myInfo.email}\nMy qualification is ${myInfo.qualification} and currently i am in 12th\nI am an aspiring ${myInfo.profession}\nI love tp play ${myInfo.hobby}`);

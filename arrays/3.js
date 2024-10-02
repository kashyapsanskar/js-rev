//object literals
// Object.create
const Jsuser={
    name:"Sanskar",
    age : 22,
    location:"Jaipur",
    email:"gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]



}

console.log(Jsuser['email']); //correct method
Jsuser.email ="KS@GMAIL.COM"
// Object.freeze(Jsuser)
Jsuser.email ="KS@GMAILll.COM"
console.log(Jsuser);


Jsuser.greeting=function(){
    console.log("hello js user");
}
console.log(Jsuser.greeting());
Jsuser.greeting2=function(){
    console.log(`hello js user,${this.name},${this.age}`);
}
console.log(Jsuser.greeting2())



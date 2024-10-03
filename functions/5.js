//arrow functions and this keyword
const user={
    username:"sanskar",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this);
// function chai(){
//     let username1:"hitesh"
//     console.log(`${this.username1}`);
// }
const chai=()=>{
    let username1="hitesh"
    console.log(this);
}
chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));
const addTwo0=(num1,num2)=>
    num1+num2
console.log(addTwo0(3,4));

const addTwo00=(num1,num2)=>(
    num1+num2)
    console.log(addTwo0(3,4));


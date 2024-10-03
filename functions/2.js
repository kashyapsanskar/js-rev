function calculateCartPrice1(...num1){ //rest operator taaki multiple values pass kr na hai

    return num1

}
// console.log(calculateCartPrice1(200,400,500))
function calculateCartPrice2(num2){ 
    return num2

}
// console.log(calculateCartPrice2(200,400,500))
function calculateCartPrice1(val1,val2, ...num1){ //rest operator taaki multiple values pass kr na hai

    return num1

}
// console.log(calculateCartPrice1(200,400,500)) 
const user= {
    username:"sanskar",
    prices:199
}
function handleObject(anyObject){
    console.log(`username is ${user.username} and price is ${user.price}`);
}
handleObject(user)
handleObject({
    username:"sam",
    price:399
})
const myNewArray=[200,400,600]
function returnSecondValue(getArray){
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));



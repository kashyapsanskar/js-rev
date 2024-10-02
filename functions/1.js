function saymyname(){
    console.log("H")
}
// saymyname()

function addTwo(number1,number2){
//    let result=number1+
//    console.log("sanskar");
//    return result
return number1+number2
}

// addTwo(3,4)
// addTwo(3,null)
// addTwo(3,"4")

const result=addTwo(3,5)
// console.log(result);
function login(userrrname="sam"){
    if(!userrrname){
        console.log("enter a username");
        return
    }
    return `${userrrname} just logged in`
}
console.log(login("sanskar")
);




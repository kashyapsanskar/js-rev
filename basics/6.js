//strings can be denoted with single quotes and double quotes
const name="SANSKAR"
const repoCount=50
console.log(name+repoCount+" value ");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Sanskar')
console.log(gameName[0]);
    console.log(gameName.__proto__);
console.log(name[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); //all of this is present what fn to use forcalling different methods of string
const newString= gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-8,4);
console.log(anotherString);
const url="https://hitesh.com/hitesh%20choudharu"
console.log(url.replace('%20','-'))








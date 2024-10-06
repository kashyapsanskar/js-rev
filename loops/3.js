// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}
for(let i=0;i<greetings.length;i++){
    // console.log(`each char is ${greetings[i]}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// const map=new Map()
// map.set{'IN'}

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
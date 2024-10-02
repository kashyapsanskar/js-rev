let myDate=new Date() //instance of the variable myDate if without any arguments then it will return current date and time
console.log(myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
let myCreatedDate=new Date(2023,0,23,5,3);
console.log(myCreatedDate.toDateString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());



let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay()+1);
console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday:"long",
    
})


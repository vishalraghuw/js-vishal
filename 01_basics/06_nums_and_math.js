console.log(Math);
console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.8)) //4

console.log(Math.min(4,3,6,8)) //3
console.log(Math.max(4,3,6,8)) //8

console.log(Math.random()) // give value between 0 and 1
console.log((Math.random()*10))// gives value between 0 to 9 0.088 like also come because of 0.0088
console.log(Math.random()*10+1)//now 0.0088 not some

const min=10;
const max=20;
console.log(Math.floor((Math.random()*(max-min+1))+min))// value between 10 to 20 come
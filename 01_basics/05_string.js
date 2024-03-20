const name = "vishal"
const repoCount = 5

// console.log(name +repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// one more way to decr. string

const gameName = new String('vishal-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newstringOne = `   vishal  `
console.log(newstringOne);
console.log(newstringOne.trim());

const url=`https//vishal.com/vishal%20raghu`;
console.log(url.replace('20','-'));

console.log(url.includes('vishal')) // gives true or false

const st=new String('vishal-raghu-com');
console.log(st.split(`-`));


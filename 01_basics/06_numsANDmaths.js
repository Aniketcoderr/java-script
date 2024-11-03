const score =400
const balance=new Number(100)
console.log(score )//400 will be printed 
console.log(balance )// more defined [Number: 100] will be primted. 
console.log(balance.toString().length);//3
console.log(balance.toFixed(2));//Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. 100.00 will be printed.
const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))/*toPrecision(precision?: number): string
Number of significant digits. Must be in the range 1 - 21, inclusive. 23.9 will be printed*/
const hundreds=1000000
console.log(hundreds.toLocaleString());//1,000,000(values used in US generally)
console.log(hundreds.toLocaleString('en-IN'));//10,00,000(this is according to indian standard )


//++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++
console.log(Math)//Object [Math] {}
console.log(Math.abs(-5))//gives absolute value(+ve) hence output is 5
console.log(Math.round(4.6))//5
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4
console.log(Math.min(4.9,3,2,1))//1
console.log(Math.max(4.9,3,2,1))//4.9
console.log(Math.random());// number,Returns a pseudorandom number between 0 and 1.(0.02011966604120974) to not include 0 we add one and certain scenaris we multiply
console.log ((Math.random()*10) +1);
const min=1
const max=6
console.log(Math.floor(Math.random()*(max-min +1))+min);//this will  always give numbe rbetween 1-6.

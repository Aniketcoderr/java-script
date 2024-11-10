//dates 
let myDate=new Date()
console.log(myDate.toString());//Sat Nov 09 2024 03:47:46 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString())//2024-11-09T03:50:26.820Z
console.log(myDate.toJSON())//2024-11-09T03:52:30.017Z
console.log(myDate.toDateString())//Sat Nov 09 2024
console.log(myDate.toLocaleString())//9/11/2024, 3:59:57 am
console.log(typeof myDate);//object 
let myCreateDate=new Date(2024,0,8)
console.log( myCreateDate.toDateString());//Mon Jan 08 2024
let myCreateDate2=new Date(2024,0,8,5,7,26)
console.log(myCreateDate2.toLocaleString())//1/8/2024, 5:07:26 AM
let Timestamp=Date.now()
console.log(Timestamp);//1731126458643 this is in milisecond
console.log(Math.floor(Date.now()/1000));// 1731239233 this is in seconds  
let newDate=new Date()
console.log(newDate);//2024-11-10T11:47:13.770Z
console.log(newDate.getDate())// will print 10
 console.log(newDate.getMonth())//10 will be printed as mnths starts from 0.
 console.log(newDate.toLocaleString("default",{weekday:"long"}))//sunday will be printed
  

 console.log(newDate.getDay())//0 for sunday 1 foor mon day and so onn.
 let date3= new Date(2024,10,11)
 console.log(date3.getDay())//1 will be printed for  mnday  .
  // to get the exact month and day we can add 1 to the parameters
  console.log(date3.getMonth()+1);// this will  print 11
  

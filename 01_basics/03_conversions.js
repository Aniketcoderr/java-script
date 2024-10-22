let score="33"
console.log(typeof score)
console.log(typeof (score))
//both  will  give output as string and if we let score= 33 than  it will give answer as number(note:-number in smaller case) for both the case .
//suppose, as we know the scoore cannot be in string it can only be i number then we can declare a new variable and we use datatype in capital(eg.Number,Strings).
let valueInNumber =Number(score)
console.log(typeof valueInNumber )/*this will give output as number ..but suppose score is not 33 its like 33ab then  also (valueInNumber =Number(score))
then als this will give answe rin as number but if we check the value using console.log( valueInNumber ) it will give o/p as NaN(not a number)*/
/*other examples like if we have score value as 
1)null then output of let valueInNumber =Number(score)
console.log(typeof valueInNumber ) will be 0.
and if undefined then it is NaN. and if score =true then it will give answer as 1.
and if score ="Aniket " then it will give o/p as NaN.*/
let isLoggedIn=1//instead of true 
let boooleanisLooggedIn =Boolean(isLoggedIn)
console.log(isLoggedIn)//this will print 1
console.log(boooleanisLooggedIn)//this will print true
/*innvestigation study 
putting diffrent values in isLoggedIn
1)""(empty string ) will give output as false
2)"ANiket" this will give o/p as true.*/
let somenumber=33
let stringnumber =String(somenumber)
console.log(somenumber)//will give o/p as 33
console.log(stringnumber)//will give o/p as 33
console.log( typeof stringnumber)//o/p=string
console.log("2">1);//true,(autmatically converted but not a good practice ,we should always comapre same data types)
console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true
/*reasons is that an equality check == and comparisions < > >= <= work diffrently
comparision convert null to  a number treating it as 0. thats why (3)null >=0 is true and (1)null >0 is false*/
// strict check (===) method ,it not only check the value but it checks it strictly which means it checks its datatype too
/*eg:- console.log("2"== 2)//gives ans true as it cnverts auto.
but console.log("2"===2) will give false as it strcit checks the datatype;*/
/*#primitive(call by value):-orginal data ka reference memory me nahi diya jata inko alag  se copy krke diya jata hai jisse j changes hote hai wooh copy me hee hote hai while copying.
1)String
2)number
3)boolean
4)null
5)undefined
6)Symbol:-to make a value as unique.(eg. const id =Symbol('123')
7)bigInt


//non primitivve (Reference type):-ye values wo hai jinka reference memoory me directly humko allocate kiya jata hai .
(*)Arrays, Objects,Functions.*/
//Objects

 /*let my_obj=   {name:"aniket",
    age:20
}
console.log(my_obj)*/
//function stored in a variablee xamples-->const myfunction=function(){}


//-------------------------++++++++++++++++++++++++++++++----------------
// memory =1)stack(Primituve) 2)Heap(non-Pimitive)
/*For primitives the copy is given in the memory 
 let myName="Aniket"
 let myAnothername=myName
  myAnothername="papa"
  console.log(myAnothername)//papa
  console.log(myName)//Aniket
  */

 /*now,lets take an oobject (non-primitive)
  let user1={
    email:"1234@gmail.com",
    upi:"user@ybl"

  }
  let user2=user1//here the referrence is given itself not the copy
  user2.email="aniket@gmail.com"
  console.log(user1)

  console.log(user2)
  output:- { email: 'aniket@gmail.com', upi: 'user@ybl' }
  { email: 'aniket@gmail.com', upi: 'user@ybl' }
  email of both has been Changed as the direct reference is given in the memory 
  */
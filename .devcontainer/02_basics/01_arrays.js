//arrays
const myArr=[0,1,2,3,,4,5,Boolean(0),"aniket"]
console.log(myArr);//[ 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket' ]
 //anoother declaration method
 const myArr2= new Array(1,2,3,4)
 console.log(myArr2[0]);//1
 console.log(myArr2)//[ 1, 2, 3, 4 ]
 //Array methods 
 myArr.push(6)
 console.log(myArr)//[ 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket', 6 ]
 myArr.pop()//no arguments can  be given it just removes the last element'
 console.log(myArr)//[ 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket' ]
 myArr.unshift(12)//it adds the emement at the starting of array
 console.log(myArr)//[ 12, 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket' ]
 myArr .shift()//removes the first element
 console.log(myArr )//[ 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket' ]
 //methods for quetions
 console.log(myArr.includes(9))//false 
 console.log(myArr.indexOf(14))//-1 as it desnt exists
 console.log(myArr.indexOf("aniket"))//8
 //***//
 const newArr=myArr.join()/*join=(method) Array<string | number | boolean | undefined>.join(separator?: string): string
 Adds all the elements of an array into a string, separated by the specified separator string.
 
 @param separator — A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are seperate with a comma.*/
 console.log(newArr)//it will  print an arrays like  string sperated by cmma s 0,1,2,3,,4,5,false,aniket
 ////******/////// 
 console.log("A",myArr)//A [ 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket' ]
 const myn1=myArr.slice(1,3)//includes index 1 but  not 3
 console.log(myn1)//[ 1, 2 ]
 console.log("B",myArr)//B [ 0, 1, 2, 3, <1 empty item>, 4, 5, false, 'aniket' ]
 const myn2=myArr.splice(1,3)//includes index 1 and 3 both but also  manipulates the oorginal array
 console.log(myn2);//[ 1, 2, 3 ]
 console.log("C",myArr)//C [ 0, <1 empty item>, 4, 5, false, 'aniket' ] index 1,2,3 are removed.


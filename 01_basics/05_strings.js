const name="Aniket"
const repoCount=50
//console.log(name+repoCount+"value") will give o/p as Aniket50 value
/*now here is the better and the modern Way in which we use back ticks`` here we have string interpolation in which we make place Holders in which we can directly inject our variables.
eg:*/
console.log(`hello my namm is ${name} and my repo count is ${repoCount}`)//o/phello my namm is Aniket and my repo count is 50
/*another way to represent string*/
const gameName=  new String('Aniket Sharma')
//new keywrd to use objects (string) to enable use of prototypes methods/functions
console.log(gameName)//o/p-->[String: 'Aniket Sharma']
console.log(gameName.length)//13
console.log(gameName[5])//t
console.log(gameName.toUpperCase())//ANIKET SHARMA (orginal string will remain same  )

console.log(gameName.charAt(5))//t
console.log(gameName.indexOf('t'))//5
console.log(gameName.substring(0,4))//Anik
const newString= gameName.substring(0,4)
console.log(newString)//will print Anik
const Anotherstring=gameName.slice(-1,1)
console.log(Anotherstring)
const haha="    aniket     "
console.log(haha)///will print this as it is with spaces
console.log(haha.trim())// will remoove the start and end spaces which are unwanted
const name2=" jojo"
console.log(name2.replace("j","g"))//gojo
console.log(name2.includes('go'))//false

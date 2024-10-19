//to declare variable
const accountId=14453/*const means can  not be changed,here const value is 
 assigned to accuntid in the memory.*/
let accountEmail="aniket@gmail"
var accountPassword="12345"
// to decalre variables we can use let and var but nowadays we use let .
//let was introduced becoz var has its scoping problem (block and functional scope)

accountCity="jaipur"//variables can be declared like this too but this is not a good practice
let accountState;
//accountId=2//node js wont allow to change any const value.hence will give error
console.log(accountId)
accountEmail="123@gmail.com"
accountPassword=212121
accountCity="bengaluru"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*this will give output like this in tabular form
┌─────────┬─────────────────┐
│ (index) │     Values      │
├─────────┼─────────────────┤
│    0    │      14453      │
│    1    │ '123@gmail.com' │
│    2    │     212121      │
│    3    │   'bengaluru'   │
│    4    │    undefined    │
└─────────┴─────────────────┘*/
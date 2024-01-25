// for of loop
// we can add strings inside an array using these "" ["str 1","str 2",""]
// similarly we can add objects inside an array suing curly braces like this [{obj 1},{obj 2},{}]
 
/* const arr=[1,2,3,4]
 for(const num of arr)
  //here num inside for is the local variable constians the indices of the array and arr inside for loop is the object 
 {
 console.log(num)
 }*/

 /*
 const grretings= "hello Bhaiyo" 
 // the for of loop can be used in many cases like array string 
 for( const greet of grretings){
   console.log(greet)
 } */

 //Maps
 const map=new Map()
 map.set('IN',"India") //only put unique value if we put any duplicate value then map ( wont consider that).
 map.set('USA',"America")
 console.log(map);
 for(const [key,value] of map)
 {
   // console.log(key) it will directly print the value
 console.log(key,':-',value) 
}
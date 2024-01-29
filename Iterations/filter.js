// forEach,Filter,Map,reduce concept
/* const coding=["JS","Ruby","Java","Cpp"]

const values= coding.forEach((items)=>{
    console.log(items)
    return items  // it will provide the out put undefined,here the concept of filter comes in to picture
})
console.log(values) */


//filter
/*
const MyNums=[1,2,3,4,5,6,7,8,9]

const NewNums=MyNums.filter((num)=>(num >4)
   //{ return num>4 }  //here we need to write return and then the condition incase of curly braces 
    // but incase of paranthesis don't need to write any return 
)
console.log(NewNums) 

*/

//Map

 /*
 const map=new Map()
 map.set('IN',"India") //only put unique value if we put any duplicate value then map ( wont consider that).
 map.set('USA',"America")
 console.log(map);
 for(const [key,value] of map)
 {
   // console.log(key) it will directly print the value
 console.log(key,':-',value) 
}

*/

 //new use of map

 /*
const mynums=[1,2,3,4,5]

const newnums=mynums.map((num)=> num +10 )
 console.log(newnums)

 */

 // chainning:- incase of chainning we can add multiple method for ex:

 /*
 const arr=[1,2,3,4,5,6,7,8,9,10]

 const new_arr=arr.map((num)=> num* 10) // here the input is simple arr
                  .map((num)=>num+1)  // here the input is num*10
                  .filter((num)=> num>40) //here the input is (num*10)+1
console.log(new_arr)

*/

//Reduce

const array=[1,2,3,4]

//const initialValue=0;

const SumwithInitial =array.reduce(
    (accumulator,currentValue)=>accumulator+currentValue,0);

    console.log(SumwithInitial)
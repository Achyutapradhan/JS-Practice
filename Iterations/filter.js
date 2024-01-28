// forEach,Filter,Map,reduce concept
/* const coding=["JS","Ruby","Java","Cpp"]

const values= coding.forEach((items)=>{
    console.log(items)
    return items  // it will provide the out put undefined,here the concept of filter comes in to picture
})
console.log(values) */
//filter

const MyNums=[1,2,3,4,5,6,7,8,9]

const NewNums=MyNums.filter((num)=>(num >4)
   //{ return num>4 }  //here we need to write return and then the condition incase of curly braces 
    // but incase of paranthesis don't need to write any return 
)
console.log(NewNums) 

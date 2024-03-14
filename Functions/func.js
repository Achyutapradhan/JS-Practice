/* 
function x(){
    console.log("This is a function");
    //** imp qs- this whole code is also called  function statement or function declaration
}
x();
 */

//Function Expression ** imp interview Qs.

/*
var a= function xyz(a,b){
    return a*b;
}

// xyz(2,3) here the function name might be xyz() but we can not call the function by xyz(),
// because we stored the function inside a variable that is a so we have to call the function by 
// the name of that variable i.e a()
console.log(a(2,3)); 
*/

// imp qs:- what is anonymous function?
// Answer is the function without name.
//EX-
/*
(function(){
    console.log("I am anonymous")
});

This won't print any output in the console.
According to the ES6 concept function should have any name or we have to store that without any name.
LIKE:-  

var b= function(){
    console.log("I am anonymous") // anonymous function.
}
b();

*/
/* when we are passing a function to another function that passed function is basically called
callback function 

EX:

function x(y){
    console.log("x");
    y();
}
 x(function y(){ //here this function y is a call back function.
    console.log("y")
})

*/

// garbage Collection and removing eventlistener?
// EventListener are heavy, even if our code is not excutes it forms the clousre eith the parent function,
// and it takes memory thats why we remove the eventlistener when we don't use them
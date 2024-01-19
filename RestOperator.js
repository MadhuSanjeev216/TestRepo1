sum = 0;
/** Write a function which accepts only one argument .
 * But you want to pass a variable  number of  arguments
 * to this function and want the function to return the sum of
 * those provided arguments. */
// const array = [10,20,30,40];
// numberOfArguments = array.length;
// addition(numberOfArguments, array)
// function addition(numberOfArguments, arr){
//     for(let i=0;i<numberOfArguments;i++){
//         sum += arr[i];
//     }
//     return sum
// }
// console.log(`First: ${sum}`);
/** Design a function in such a way using the rest operator that it accepts all provided arguments
 * into a single variable and then add those elements and return their sum */
var sum = 0;
function add(...elements) {
  elements.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(`Second: ${add(10, 20, 30, 40, 50)}`);

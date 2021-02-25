let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//a) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
console.log("*****CONCAT*****");
newArray = holdCabinet1.concat(holdCabinet2);
console.log(newArray);

//b) Print a slice of two elements from each array. Does slice alter the original arrays?
console.log("*****SLICE*****");
holdCabinet1.slice(2);
console.log(holdCabinet1);
holdCabinet2.slice(2);
console.log(holdCabinet2);

//c) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
console.log("*****REVERSE*****");
holdCabinet1.reverse();
console.log(holdCabinet1);
console.log("*****SORT*****");
holdCabinet2.sort();
console.log(holdCabinet2);
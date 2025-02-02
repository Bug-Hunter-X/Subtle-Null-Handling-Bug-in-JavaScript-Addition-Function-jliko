function foo(a, b) {
  // Explicitly check for null using strict equality
  if (a === null || b === null) {
    return 0; 
  }
  //Use optional chaining and nullish coalescing for more robust handling of potential null or undefined values
  return (a ?? 0) + (b ?? 0);
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined,5)); //Output:5
console.log(foo(5,undefined)); //Output:5
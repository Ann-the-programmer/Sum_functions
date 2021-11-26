let arguments = [50, 120, 33];
function summing(x) {
  let sum_of_args = 0;
  for (i of x) {
      sum_of_args += i;
  }
  return sum_of_args;
}

console.log(summing(arguments))
 

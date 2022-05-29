//1. POWER SOLUTION
function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base, exponent-1);

}
power(base, exponent)


//2. FACTORIAL SOLUTION
function factorial(x){
if(x < 0) return 0;
if( x <= 1) return 1;
return x * factorial(x-1);
}


//3. PRODUCT OF ARRAY SOLUTION
function productOfArrary(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArrary(arr.slice(1));
}

//4. RECURSIVE RANGE SOLUTION
function recursiveRange(x){
    if( x === 0) return 0;
    return x + recursiveRange(x-1); 
}

//5. FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
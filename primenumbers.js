let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Anonymous Function
let primes = arr.filter(function(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  });
  console.log("Anonymous Function",primes);
  
  // IIFE
  let primesIIFE = (function(arr) {
    return arr.filter(function(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    });
  })(arr);
  console.log("IIFE",primesIIFE);
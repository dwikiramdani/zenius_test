function Faktorial(x) {
    var range = x;
    var start = 0;
  
    var factorial = x;
    var diff = factorial - 1;
    
    while (start < range) {
      if (diff > 0) {
        factorial = factorial * diff;
      }
      start = start + 1;
      diff = diff - 1;
      var hasil = factorial.toString();
    }
  
    return hasil
  
  }
  
  console.log(Faktorial(5));
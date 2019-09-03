function Prima(n) {
    var array = []
  
    var temp = [];
  
    var limit = Math.sqrt(n);
  
    
    for(var i = 2; i <= n; i++) {
      temp[i] = true;
    }
    
    for(var a = 2; a <= limit; a++) {
        if(temp[a] === true) {
            for(var b = a * a; b < n; b += a) {
              temp[b] = false;
            }
        }
    }
    for(var x = 2; x <= n; x++) {
        if(temp[x] === true) {
          array.push(x);
        }
    }
  
    return array
  }
  
  console.log(Prima(10));
  
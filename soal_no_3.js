function Deret(x) {
    var newArray = [];
  
    var jumlahArray1 = x.length;
  
    var start = 0;
  
    for(var i = 0; i<jumlahArray1; i++){
      start = i
      while(start<jumlahArray1){
        if(x[i] !== x[i+1]){
          newArray.push(x[i])
          start = jumlahArray1
        }
        start = start+1
      }
    }
  
    return newArray;
  }
  
  console.log(Deret([8, 8, 8, 8, 8, 3, 3, 4, 3, 5, 8]));
  
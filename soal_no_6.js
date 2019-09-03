function Rotasi(number, arr) {
    var array = arr;
  
    var lastIndex = arr.length-1;
  
    if(number > 0){
      for(var x = 0; x<number; x++){
        array.push(arr[0])
        array.shift();
      }
    }else{
      for(var y = 0; y>number; y--){
        array.unshift(arr[lastIndex])
        array.pop();
      }
    }
  
    return array
  }
  
  console.log(Rotasi(1, [1,2,3]));
  
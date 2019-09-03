function Irisan(x, y) {
    var array1 = x;
    var array2 = y;
  
    var newArray = [];
  
    var jumlahArray1 = array1.length;
    var jumlahArray2 = array2.length;
  
    var jumlahLoop = 0;
  
    if(jumlahArray1 > jumlahArray2){
      jumlahLoop = jumlahArray2
  }else{
      jumlahLoop = jumlahArray1
  }
  
  for (var i = 0; i < jumlahLoop; i += 1) {
      if(array1[i] == array2[i]){
          newArray.push(array1[i]);
      }
  }
  
  console.log(newArray);

  return newArray
  
  }
  
  console.log(Irisan([1, 2, 3, 4], [5, 6, 7]));
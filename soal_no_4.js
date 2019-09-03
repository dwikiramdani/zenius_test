function Pingpong(x) {
    var number = x;
  
    for(var i = 0; i<=x; i++){
      if(i%3 == 0){
        console.log('ping');
      }else if(i%5 == 0){
        console.log('ping');
      }else{
        console.log(i)
      }
    }
  
  }
  
  console.log(Pingpong(3));
  
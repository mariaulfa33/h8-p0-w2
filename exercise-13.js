

function xo(str) {
var jumlahx= 0
var jumlaho= 0
var hasil;
    for ( i = 0; i < str.length ; i++){
        if (str.charAt(i)=='x'){
          jumlahx++;  
        } else if (str.charAt(i)=='o'){
            jumlaho++;
        } else{
        }
        if (jumlahx===jumlaho){
            hasil = true;
        
        } else {
            hasil = false;
        }
    }
    return hasil
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
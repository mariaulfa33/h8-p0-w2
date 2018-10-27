
//Logic Challenge - Konversi Menit

function konversiMenit(menit) {
    var jam = Math.floor(menit/59)
    var menitsisa;
    var hasil;
    if (menit > 60){
        menitsisa = menit%60;
    } else {
        menitsisa = menit;
    }
    if (menitsisa < 10){
        hasil = jam +":" + '0' + menitsisa;
    } else {
       hasil = jam +":" + menitsisa;
    }
    return hasil
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00
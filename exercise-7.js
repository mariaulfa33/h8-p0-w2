//Menyusun Barisan Bintang


var rows1 = 5;
for (var rows1 = 1; rows1 <= 5  ; rows1 ++){
    console.log('*');
}

//Menyusun Barisan Bintang Dengan Nested Looping


for (var i= 1; i<=5; i ++){
    var rows2 = "";
    for (var j= 1; j <=5; j ++){
        rows2 += '*'
    }
    console.log( rows2);
}



//Menyusun Barisan Tangga Bintang Dengan Nested Looping


for (var i= 1; i<=5 ; i ++){
    var rows3 = "";
    for (var j= 1; j<=i; j ++){
        rows3 += '*'
    }
    console.log( rows3);
}
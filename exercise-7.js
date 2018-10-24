//Menyusun Barisan Bintang

var rows1 = 5; //<----isi disini
var rows1stop = rows1+1;
for (var rows1 = 1; rows1 < rows1stop  ; rows1 ++){
    console.log('*');
}

//Menyusun Barisan Bintang Dengan Nested Looping

var rowsisi = 5; //<----isi disini
for (var i= 1; i<=rowsisi ; i ++){
    var rows2 = "";
    for (var j= 1; j <=rowsisi; j ++){
        rows2 += '*'
    }
    console.log( rows2);
}



//Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rowsisi2= 5;//<----isi disini
for (var i= 1; i<=rowsisi2 ; i ++){
    var rows3 = "";
    for (var j= 1; j<=i; j ++){
        rows3 += '*'
    }
    console.log( rows3);
}
//Melakukan Looping Menggunakan While
console.log();
var kalimat1 = 2;
console.log('LOOPING PERTAMA');
while (kalimat1 < 22) {
    console.log (kalimat1 + ' - I love coding');
    kalimat1 +=2;
}

var kalimat2 = 20;
console.log('LOOPING KEDUA');
while (kalimat2 >0) {
    console.log (kalimat2 + ' - I will become fullstack developer');
    kalimat2 -=2;
}


//Melakukan Looping Menggunakan For
console.log();
console.log('LOOPING PERTAMA')
for (var kalimat3 = 1; kalimat3 <21; kalimat3 ++){
    console.log (kalimat3 + ' - I love coding');
}

console.log('LOOPING KEDUA')
for (var kalimat4 = 20; kalimat4 >0; kalimat4 --){
    console.log(kalimat4 + ' - I will become fullstack developer');
}


//Angka Ganjil dan Genap
console.log();
console.log('GANJIL-GENAP');
for (var counter = 1;  counter <=100; counter ++){
    reminder = counter%2;
    if (reminder===0){
        console.log('GENAP');
    } else{
        console.log('GANJIL');
    }
}

console.log();
console.log('PERULANGAN 2');
for (var counter = 1;  counter <=100; counter +=2){
    reminder = counter%3;
    if (reminder===0){
        console.log(counter + ' kelipatan 3');
    
    }
}


console.log();
console.log('PERULANGAN 5');
for (var counter = 1;  counter <=100; counter +=5){
    reminder = counter%6;
    if (reminder===0){
        console.log(counter + ' kelipatan 6');
    }
}


console.log();
console.log('PERULANGAN 9');
for (var counter = 1;  counter <=100; counter +=9){
    reminder = counter%10;
    if (reminder===0){
        console.log(counter + ' kelipatan 10');
    } 
}

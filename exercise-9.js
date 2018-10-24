
//Tugas 1
function shoutOut(){
    console.log('Halo Function!');
    return ''
}

console.log(shoutOut()) 
    
//Tugas2
function calculateMultiply(num1,num2) {
    return num1 * num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);



//tugas3
function processSentence(name, age, adress, hobby){
console.log ( 'Nama saya ' + name + ', umur saya '+ age + ' tahun, alamat saya di ' + adress + ', dan saya punya hobby yaitu ' + hobby );
return ''
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 




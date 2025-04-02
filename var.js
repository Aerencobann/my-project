let num = 0

console.log( 'num', num);

const arr = new Array(5);
arr.length = 10;
arr.fill(10);
console.log(arr);


const arr = [1, 2, 3];
for ( const value of arr) {
  console.log(value);
}



arr.splice(1, 2)
console.log(typeof arr);
arr.push(4);
arr.pop();
console.log(arr.pop());
arr.unshift(4, 5, 6);
console.log(arr);

for (let i = 0; i < 10; i++) {
  console.log(i);
}



for (let i = 10; i > 0; i--) {
    console.log('i =' + i);
  for (let j = 0; j < 5; j++){
    console.log('j =' + j);
  }
}

const fullname = 'Eren Coban';
const city = 'Ankara';
const yearOfBirth = '1997';

var all = `Benim adim ${fullname}. ${city} yasiyorum. ${(2025-yearOfBirth<=18)? '18 yasinin atindasiniz': '18 yasinin ustundeyim'} yasindayim.`

console.log(all);

let person = {
  name : 'eren',
  lastname : 'COBAN',
  age : 28 ,
  hobbies : ['bisiklet', 'boardgame', 'heartstone'],
}

console.log(person);
console.log(typeof person);


let cars = ['Bmw', 'Mercedes', 'Audi'];

let people = [
  {firstname : 'Eren', lastname : 'COBAN' },
  {firstname : 'Eray', lastname : 'COBAN' },
];
  console.log(people);

  for (let i = 0 ; i < people.length; i++) {
    console.log(people[i].firstname);
  }
  console.log(typeof people);

for (let i in people) {
  console.log(`index : ${i}, value : ${people[i].firstname}`);
}


for (let i = 0; i < cars.length; i++) {
          console.log(cars[i]);
}

people.forEach(function(item ){
        console.log(item.lastname);
})


Function (fonksiyonlar )



function karesinial(sayi){
        return sayi*sayi;
}

let a = karesinial(2); // 4 olarak dondurecek
let b = karesinial(4); // 16 olarak dondurecek

console.log(a);
console.log(b);


function toplam(sayi1, sayi2){
  function karesinial(x){
    return x*x;
  }
  return karesinial(sayi1) + karesinial(sayi2);
}

let sonuc = toplam(2,4);
console.log(sonuc);

const sum = function(a=0 ,b = 0){
  if(typeof a === 'undefined'){
    a = 0 ;
  }
  if(typeof b === 'undefined'){
    b = 0 ;
  }
   var c = a + b;
   return c;
}
console.log(sum(10, 20));
console.log(sum(10));


let val;
alert ('merhaba');
var c = prompt('bir sayi giriniz');

var d = confirm('emin misiniz?');
console.log(d);
val = window;
console.log(val);


//Element Olusturma

 const li = document.createElement

 console.log(li);
//
//
//
//
//
//
//
//
//
//
//
//
//
//

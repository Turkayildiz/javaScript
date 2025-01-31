/* Konu anlatimi:

javascript'te dizi tanimlamamalari dizi oprasnti ile [] yapilir,çeşitli kullanim şekilleri vardir.

Butun dillerde ayni tipten veriler tutan yapiya dizi denir.

*/
var isimler =['ali','veli',"ayse","fatma"];
var sehirler =['adana','ankara','Hatay','Izmir','Istanbul']
var yillar = [2000,2001,2002,2003];

var iller = 'adana,ankara,Hatay,Izmir,Istanbul'; // Bu bir dizi degildir.
// Sadece icindekiler virgul ile ayrilmis bir string'dir

console.log(iller[2]); // Burasi yanlis sonuc verecektir. Dizi degildir cunku.
console.log(isimler);
console.log(sehirler);
console.log(yillar);

//javascript'te siziler 0'dan başlar. Dizi elemanlarina ulasim indis numarasi ile olur 
console.log(sehirler[0]);
console.log(yillar[2]);
console.log(isimler[1]);

// dizi elemanlarina atama yapmak icinde indis numarasi gereklidir

console.log(sehirler[1]);
sehirler[1]='Adiyaman';
console.log(sehirler[1]);

sehirler[1]=123.456;
console.log(sehirler[1]);

var sayilar =[1,2,3,4,5,6,7,8,9];

// veriler uzerinde donguler vasitasiyla işlem yapilabilir.
//sayilar uzerinde işlem yapalim
let sayac=0;
while (sayac<sayilar.length) {
   
    console.log(sayac + " =>"+ sayilar[sayac]);
    
    sayac=sayac+1;
}
sayac=0;

// do ile verilerin gosterimi
console.log('Do while ile dongu');
do {
    console.log(sayac + " =>"+ sayilar[sayac]);
    
    sayac=sayac+1;  
} while (sayac<sayilar.length);

console.log('For ile dizi uzerinde dongu');
for (let index = 0; index < sayilar.length; index++) {
   
    
    console.log(index + " =>"+ sayilar[index]);

}
// for,while,do donguleri kurgulanabilir dongulerdir. ancak in operatoru ile for kullanildiginda 
// Mutlaka elimizde bir dizi yada veri seti olmasi gerekir.
console.log('For dongusu in operatoru ile. Bu in operatorunun kullanilabilmesi icin mutlaka elimizde bir veri seti olmasi şarttir');
for (let sayi in sayilar ){

    console.log(sayi);
}

// foreach kullanimi ve in operatoru ile yapilan lar dongu degildir. Iterasyondur.  
console.log('For each Kullanimi');
sayilar.forEach(p=>console.log(p));
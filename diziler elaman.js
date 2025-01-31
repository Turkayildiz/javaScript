/*

Dizilere eleman eklemek icin push metodu kullanilir

*/

let sehirler =['adana','Adiyaman','Aydin','Ankara'];

// sehirler dizisine yeni eleman
sehirler.push('Balikesir');
console.log(sehirler);

//Unshift=> dizinin basina eleman eklemeye yarar

sehirler.unshift('AAAAA');
console.log(sehirler);
/*
splice() metot
splice() metot diziye hem eleman eklemek için hem de eleman silmek için kullanılır. 
Metodun ilk parametresi işlemin yapılacağı index numarasını, ikinci parametre ise kaç 
elemanın silineceğini belirtir.
*/
sehirler.splice(0,1); //Birinci eleman hangi index baslayacagi ,2. si kac adet silecegini belirtir
console.log(sehirler);
sehirler.splice(3,0,'Bursa'); // 3 . elemanin basina bursa 'yi ekler
console.log(sehirler);

// Diziden Eleman Silmek
//Dizilerden pop(), shift() ve splice() metotlarıyla eleman silebiliriz.
console.log('Dizilerde Silme...');
//pop mevcut dizinin en sonundaki elemani siler
sehirler.pop();
console.log(sehirler);

/*
shift() metot
shift() metot, var olan bir dizinin başından eleman silmeye yarar.
*/
sehirler.shift();
console.log(sehirler);
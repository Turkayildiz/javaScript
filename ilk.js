console.clear();
console.log("Hello World");

// Degisken Tanimlamalari
// var keyword => variable kelimesinin kisaltilmisidir.
// program boyunca geçerlidir. 
// Ecma Script 6 versiyonu ile let keywordu de gelmiştir.
// let keywordu bulundugu scope icerisinde gecerlidir.

var sayi=10,sayi2=20; //sayisal bir deger atildi
console.log(sayi);
sayi ="Ali Veli "; // string atamasi yapildi
sayi2=Date.now();  // DateTime Atamasi
console.log(sayi+sayi2);


/*
   var keywordu ile olabilecek anomalilikler
*/
sehir = "Van"; //var keyword'u olmadan degisken tanimlandi
console.log(sehir);
var sehir  = "Mus"; // Ayni degisken var ile tanimlandi
console.log(sehir);


// let keyword => EmcaScript6 ile hayatimiza girdi
// let tanimlandigi scope icerisinde gecerlidir. 
// scope bitince degiskenin ömrüde biter.
// scope=> süslü parantezler ile belirtilen bölgeye scope denir.
{
    let not1 = 10;
    var not2 = 20;
} 
//console.log(not1);
console.log(not2);
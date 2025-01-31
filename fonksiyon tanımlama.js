/* Metematikteki fonksiyonlara benzer. Ornek olarak.

f(x) = 2x+5;
f(2) = 9;
f(3) = 11;

kdvdahil(x) = x*1.2;
ciplakKdvHesapla(x) = x/1.2;
*/
//Parametre alan ve geriye bir sonuc döndüren bir metoddur
function kdvdahil(x){
    return x*1.2;
}


let sonuc = kdvdahil(100);
console.log(sonuc);
let ciplakKdv=ciplakKdvHesapla(100); 
console.log(ciplakKdv);

// parametre olarak x degeri alan ve geriye bir deger donen fonksiyon
function ciplakKdvHesapla(x){
    return x/1.2;
}
//parametre alan ancak geriye bir deger donmeyen fonksiyon
function kdvHesapla(x){
    console.log("Verilen degerin Kdv Dahil hali:"+(x*1.2));
    console.log("Verilen degerin Kdvsiz hali:"+(x/1.2));
}

kdvHesapla(100);

//fonksiyonlar birden fazla deger alabilir
// ancak birden fazla deger donemez

function Topla(a,b){
    console.log(a+b);
}
function Cikart(a,b){
    console.log(a-b);
}
function Carp(a,b){
    console.log(a*b);
}
function Bolme(a,b){
    console.log(a/b);
}

Topla(3,5);
Cikart(3,5);
Carp(3,5);
Bolme(3,5);
Bolme(3,0); // Burasi Infinity hatasi verir.

function DortIslem(a,b)
{
    return a+b; //return keyword'unu gordugu zaman fonksiyondan cikar.
    //Dolayisi ile asagidaki kodlar anlamsizdir
   console.log('deneme');
   console.log('deneme');
   console.log('deneme');
   console.log('deneme');

}

console.log(DortIslem(3,5));
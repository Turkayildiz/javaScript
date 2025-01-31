// if ifadelerinde birden fazla conditation vberilebilir. Burada matematikteki önermeler geçerlidir.
// && ve , || veya ifade olarak kullanilir.

/* 
p   q   &&   Sonuc 
-- ---  --   -----
T   T          T
T   F          F
F   T          F
F   F          F

p   q    Sonuc (|| Yada) 
-- ---   -----
T   T     T
T   F     T
F   T     T
F   F     F


*/

var suSicakligi = -150;
if(suSicakligi>=100){
    console.log("Su gaz halindedir");
}
else if(suSicakligi>0 && suSicakligi<100)
{
    console.log('Su sivi haldedir');
}
else 
{
    console.log('Su kati haldedir');
}

/*
Eğer bir öğrenci 90'ın üstünde not alırsa , ona A notu verin .
Eğer bir öğrencinin notu 90-75 arasindaysa , ona B notu verin .
Eğer bir öğrencinin notu 65-75 arasinda ise ona C notu verin .
Eğer bir öğrencinin notu 50-65 arasinda ise ona D notu verin .
Eğer bir öğrencinin notu 50'nin  altinda ise ona E notu verin .
*/
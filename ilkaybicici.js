



var ogrenciler = [{isim:"Ilkay", soyIsim:"BICICI", telNo:1234567890, vize1:50, vize2:50, final:50},
    {isim:"Mert", soyIsim:"ELIBOL", telNo:9876543210, vize1:86, vize2:78, final:95},
    {isim:"Melike", soyIsim:"ERKAYA", telNo:654321789, vize1:67, vize2:45, final:50},
    {isim:"Ahmet", soyIsim:"SELCUK", telNo:741852963, vize1:40, vize2:39, final:35}];

for(i in ogrenciler)
{
    console.log(ogrenciler[i].isim);
}

for(let i = 0; i< ogrenciler.length; i++)
{
    console.log(ogrenciler[i].soyIsim);
}

var index = 0;
while(index < ogrenciler.length) 
{
    console.log(`${ogrenciler[index].isim} ${ogrenciler[index].soyIsim} telno'su: ${ogrenciler[index].telNo}`); //console.log(String(ogrenciler[index].telNo)); 
    index++;
}
index = 0;

do 
{
    console.log(`${ogrenciler[index].isim} ${ogrenciler[index].soyIsim} notlari: vize1: ${ogrenciler[index].vize1}, vize2: ${ogrenciler[index].vize2}, final: ${ogrenciler[index].final}`); 
    index++;
}
while(index < ogrenciler.length);
index = 0;
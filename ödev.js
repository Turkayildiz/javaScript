var sınıfad =[ercan,];
var sınıfsoy =[öztürk,];
var sınıftel =[5327124559,];
var sınıfvize =[20,  ];
var sınıffinal =[90,  ];

sayac=0;

console.log('for ile dongu');
for (let index = 0; index < sınıfad.length; index++) {
   
    
    console.log(index + " =>"+ sınıfad[index]);

}

console.log('Do while ile dongu');
do {
    console.log(sayac + " =>"+ sınıfsoy[sayac]);
    
    sayac=sayac+1;  
} while (sayac<sınıfsoy.length);

console.log('while ile dongu');
while (sayac<sınıftel.length) {
   
    console.log(sayac + " =>"+ sınıftel[sayac]);
    
    sayac=sayac+1;
}

console.log('For dongusu in operatoru ile ekrana bastırmak');
for (let sayi in sınıfvize ){

    console.log(sayi);
}

var sınıfad =[ercan,ali,abdullah,Ahmet,ayşegül,begimay,burak,ceren,efe,hakan,halil,ilkay,kadir,mehmet,mert,mert,muhammed,ozan,seda,ayşe,semih,elif,osman,emre,özge,ali,salih,kerim,şahin,şeyma,şeyda,şule,şükran,şükriye,şükrü,ahmed,mol,ozan,seda,ayşe,semih,elif,osman,emre,özge,ali,salih,kerim,şahin,şeyma,şeyda,şule,şükran,şükriye,şükrü,ahmed,mol,kerem,mustafa,irem,berk];
var sınıfsoy =[öztürk,yılmaz,kaymaz,selçuk,şıpar,yazır,ekmekçi,kemal,şahin,çelik,sabit,ilgin,baki,karaköse,eribol,bülbül,salladin,nur,sümbül,akif,öztürk,salih,sakin,şekil,Ssemih,şahin,şeyma,şeyda,şule,şükran,şükriye,şükrü,ahmed,mol,ozan,seda,ayşe,semih,elif,osman,emre,özge,ali,salih,kerim,şahin,şeyma,şeyda,şule,şükran,şükriye,şükrü,ahmed,mol,kerem,mustafa,irem,berk];
var sınıftel =[5327124559,5432749830,5079400915,5424729033,5011503197,5312986834,5332407057,5303789666,5334481201,5453263821,5345458225,5523090847,5399302409,5385483057,5350483319,5382847757,5013705076,5070208968,5075680292,5075754299,5302205064,5303072895,5310134698,5310347880,5312933452,5313015234,5319546739,5324159833,5327254966,5347015213,5350635493,5353944210,5353944210,5363979838,5377887708,5380126937,5383907120,5388659522,5393493822,5398146378,5414129868,5416225672,5418384243,5425715979,5436560824,5437725961,5441056242,5445931483,5458964714,5511725427,5116795318,5528093408,5531659951,5531807858,5537813393,5538772947,5539062530,5544839530,5547043232];  
var sınıfvize =[45,32,64,28,59,35,48,25,15,39,65,17,98,25,34,65,18,85,79,82,98,15,63,25,48,75,48,36,51,24,89,57,65,62,54,15,32,14,24,20,34,20,54,52,71,56,24,30,50,74,97,74,78,65,24,98,64,45,32,48,57,48,47];
var sınıffinal =[65,78,95,85,98,75,45,25,15,39,65,17,98,25,34,65,18,85,79,82,98,15,63,25,48,75,48,36,51,24,89,57,65,62,54,15,32,14,24,20,34,20,54,52,71,56,24,30,50,74,97,74,78,65,24,98,64,45,32,48,57,48,47];

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

console.log('for ile dongu');
for (let index = 0; index < sınıffinal.length; index++) {
   
    
    console.log(index + " =>"+ sınıffinal[index]);

}

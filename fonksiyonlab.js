function kareAl(x){
    console.log('${x} karesi: ${x*x}'); //backtick
    let kare = x*x;
    console.log(x+"karesi:"+kare);
}

function Nothesabı(vize1,vize2,final){
    let ortalama = ((vize1+vize2)/2)*0.3+final*0.7;
    console.log('Ortalama: ${ortalama}');
    if(ortalama>=50){
        console.log("Gectiniz"+ortalama);
    }
    else{
        console.log("Kaldiniz"+ortalama);
    }
}

function alanhesabı(kısakenar,uzunkenar){
    console.log("Alan"+(kısakenar*uzunkenar));
    console.log("çevre"+(kısakenar+uzunkenar));
}
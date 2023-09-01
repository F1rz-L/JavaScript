// let nilai=100;
// let kkm=80;

// if(nilai>kkm){
//     console.log("Lulus");
// }

// else{
//     console.log("Tidak Lulus");
// }

let tanggal=31;
let bulan=12;

let zodiak = "invalid"; 

{
if(bulan==1){
    if(tanggal>0 && tanggal<=19){
        zodiak = "Capricorn";
    }
    if(tanggal>=20 && tanggal <=31){
        zodiak = "Aquarius";
    }
}
if(bulan==2){
    if(tanggal>0 && tanggal<=18){
        zodiak = "Aquarius";
    }
    if(tanggal>=19 && tanggal <=31){
        zodiak = "Pisces";
    }
}
if(bulan==3){
    if(tanggal>0 && tanggal<=20){
        zodiak = "Pisces";
    }
    if(tanggal>=21 && tanggal <=31){
        zodiak = "Aries";
    }
}
if(bulan==4){
    if(tanggal>0 && tanggal<=19){
        zodiak = "Aries";
    }
    if(tanggal>=20 && tanggal <=31){
        zodiak = "Taurus";
    }
}
if(bulan==5){
    if(tanggal>0 && tanggal<=20){
        zodiak = "Taurus";
    }
    if(tanggal>=21 && tanggal <=31){
        zodiak = "Gemini";
    }
}
if(bulan==6){
    if(tanggal>0 && tanggal<=20){
        zodiak = "Gemini";
    }
    if(tanggal>=21 && tanggal <=31){
        zodiak = "Cancer";
    }
}
if(bulan==7){
    if(tanggal>0 && tanggal<=22){
        zodiak = "Cancer";
    }
    if(tanggal>=23 && tanggal<=31){
        zodiak = "Leo";
    }
}
if(bulan==8){
    if(tanggal>0 && tanggal<=22){
        zodiak = "Leo";
    }
    if(tanggal>=23 && tanggal<=31){
        zodiak = "Virgo";
    }
}
if(bulan==9){
    if(tanggal>0 && tanggal<=22){
        zodiak = "Virgo";
    }
    if(tanggal>=23 && tanggal<=31){
        zodiak = "Libra";
    }
}
if(bulan==10){
    if(tanggal>0 && tanggal<=22){
        zodiak = "Libra";
    }
    if(tanggal>=23 && tanggal<=31){
        zodiak = "Scorpio";
    }
}
if(bulan==11){
    if(tanggal>0 && tanggal<=22){
        zodiak = "Scorpio";
    }
    if(tanggal>=23 && tanggal<=31){
        zodiak = "Sagitarius";
    }
}
if(bulan==12){
    if(tanggal>0 && tanggal<=22){
        zodiak = "Sagitarius";
    }
    if(tanggal>=22 && tanggal<=31){
        zodiak = "Capricorn";
    }
}
}

console.log(zodiak);
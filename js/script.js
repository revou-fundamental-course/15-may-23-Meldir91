function pilihPersegi() {
    var pilih = document.getElementById("main");
    pilih.style.display = "block";

    var pilih = document.getElementById("header");
    pilih.style.display = "none";

    var pilih = document.getElementById("homepage");
    pilih.style.display = "none";
}

function pilihPersegipanjang() {
    var pesan = "Maaf, menu Persegi Panjang saat ini sedang dalam tahap pengembangan. Kami bekerja keras untuk memberikan pengalaman terbaik kepada Anda - Terima kasih."
    alert(pesan);
}


function hitungLuas() {
    var sisiLuas = document.getElementById("sisi-luas").value;

    document.getElementById("output-luas").innerHTML = '<span>'+sisiLuas+'</span>';
    console.log(sisiLuas);

    document.getElementById("output-luas2").innerHTML = '<span>'+sisiLuas+'</span>';
    console.log(sisiLuas);

    let a1 = parseInt(sisiLuas);
    let a2 = sisiLuas * sisiLuas;
    
    document.getElementById("result").innerHTML = '<span>'+a2+'</span>';
    console.log(a2);


    // Menampilkan hasil input niai persegi:
    var elemen = document.getElementById("hasilAll");
    elemen.style.display = "block";
    var elemen1 = document.getElementById("btn-reset");
    elemen1.style.display = "block";

    // Menampilkan hasil input niai persegi panjang:
    // var elemen2 = document.getElementById("sisi-luas");
    // elemen2.style.display = "none";
    // var elemen3 = document.getElementById("sisi-luas2");
    // elemen3.style.display = "block";
    // var elemen4 = document.getElementById("btn-hitung");
    // elemen4.style.display = "none";
    // var elemen5 = document.getElementById("btn-hitung2");
    // elemen5.style.display = "block";
    return sisiLuas;
}

 
// function hitungLuas2() {
//     var sisiLuas2 = document.getElementById("sisi-luas2").value;
    
//     document.getElementById("result-akhir").innerHTML = '<span>'+sisiLuas2+'</span>';
//     console.log(sisiLuas2);    

//     return sisiLuas2;
// }

// function selesai() {
//     var a1 = hitungLuas();
//     var a2 = hitungLuas2();
//     var result1 = a1 * a2;

//     document.getElementById("result").innerHTML = '<span>'+result1+'</span>';
//     console.log(result1);
// }

// hitungLuas(function(){
//     hitungLuas2(function(){
//         selesai();
//     });
// });

function resetLuas() {
    document.getElementById("sisi-luas").value = "";

    var elemen = document.getElementById("hasilAll");
    elemen.style.display = "none";
}
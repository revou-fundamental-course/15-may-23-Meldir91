function hitungLuas() {

    var sisiLuas = document.getElementById('sisi-luas').value;
   
    // document.getElementsByClassName('result-luas').style.visibility='visible';

    // var elemenStyle = document.getElementsByClassName('result-luas');

    // for (var i = 0; i < elemenStyle.length; i++) {
    //     elemenStyle.style.visibility = 'visible';
    // }


    document.getElementById('output-luas').innerHTML = '<span>'+sisiLuas+'</span>';

    console.log(sisiLuas);
}

/*button pada file index.html*/
let button = document.getElementById('btn');

/*Mengambil nilai dari variabel*/
button.addEventListener('click', () => {
    const pria = parseInt(document.getElementById('pria').value);
    const wanita = parseInt(document.getElementById('wanita').value);
    const height = parseInt(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let pria_status=false, wanita_status=false, height_status=false, age_status=false, weight_status=false;

    /*Untuk memberikan peringatan bahwa masih terdapat kolom yang kosong*/
    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Isi tinggi badan Anda!';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(age === '' || isNaN(age) || (age <= 0)){
        document.getElementById('age_error').innerHTML = 'Isi umur Anda!';
    }else{
        document.getElementById('age_error').innerHTML = '';
        age_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Isi berat badan Anda!';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    /*Perhitungan kalkulator BMI*/
    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if(bmi < 18.5){
            result.innerHTML = 'BMI : ' + bmi + ', Anda berada dalam kategori kekurangan berat badan.' + ' Cara terbaik untuk menaikkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.'
            + ' Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.';
        }else if(bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = 'Normal : ' + bmi + ', Berat badan Anda berada dalam kategori normal (ideal).' + ' Tetap jaga kesehatan tubuh Anda dengan berolahraga dan mengatur pola makan Anda dengan rutin';
        }else if(bmi >= 25.0 && bmi <= 29.9){
            result.innerHTML = 'Normal : ' + bmi + ', Anda berada dalam kategori kelebihan berat badan.' + ' Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.'
            + ' Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
        }else{
            result.innerHTML = 'Over weight : ' + bmi + ', Anda berada dalam kategori kegemukan (obesitas).' + ' Perlu diperhatikan bahwa dalam kategori ini sangat disarankan untuk menurunkan berat badan.'
            + ' Anda dapat mulai untuk mengatur pola makan dan olahraga yang teratur untuk mengurangi berat badan Anda.';
        }
    }else{
        alert('Terdapat data yang belum diisi');
        result.innerHTML = '';
    }
});
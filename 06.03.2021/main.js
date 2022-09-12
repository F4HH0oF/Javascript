let vijdaLiSe = false;
const tekstID = document.getElementById('tekstID');
const butonZaPokaji  = document.getElementById('butonZaPokaji')

function pokajiSkrii(){
    if(vijdaLiSe){
        tekst.style.visibility = 'hidden';
        butonZaPokaji.textContent = 'Покажи'
        vijdaLiSe = false;
    }
    else{
        tekst.style.visibility ='visible';
        butonZaPokaji.textContent = 'Скрий'
        vijdaLiSe = true;
    }

};


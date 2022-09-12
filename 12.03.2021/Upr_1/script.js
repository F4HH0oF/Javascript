let vijdaLiSe = false;
const tekst = document.getElementById('bananche')
const btnZaPokazvane = document.getElementById('btnZaPokazvane')

function pokajiskrii(){
    if(vijdaLiSe){
        tekst.style.visibility = 'hidden';
        btnZaPokazvane.textContent = "Покажи";
        vijdaLiSe = false;

}

    else{
        tekst.style.visibility = 'visible';
        btnZaPokazvane.textContent = "Скрий";
        vijdaLiSe = true;
    }
        
    



}
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

// document query
$(document).ready(function () {

    // selezione e funzione pulsante avanti
    var selectNext = $('.next > i');
   
    selectNext.click(function () {

        var classeActive = $('.images > img.active');
        
        if (classeActive.hasClass('last')) {
            $('img.first').addClass('active');
            classeActive.removeClass('active');
        } else {
            classeActive.removeClass('active').next('img').addClass('active');
        }

    });

    // selezione e funzione pulsante indietro
    var selectPrev = $('.prev > i');

    selectPrev.click(function() {

        var imgPrev = $('.images > img.active');
        
        if(imgPrev.hasClass('first')) {
            $('img.last').addClass('active');
            imgPrev.removeClass('active');
        } else {
            imgPrev.removeClass('active').prev('img').addClass('active');
        }
    });

});

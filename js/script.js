// Esercizio di oggi: Slider
// Descrizione:
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

    // selezione e funziona pulsante indietro
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














// Bonus:
// i pallini si evidenziano in accordo alla img corrispondente
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// altro esempio: Generiamo i pallini con JS (ma quello che volete liberamente)
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.
// Anche perchè qui come gestire eventi da tastiera dovrò vedermelo li.
// Come vi ho consigliato,  potete partire dal layout base visto in classe,
// vi allego lo zip di partenza.
// Come ulteriore bonus potreste provare altre soluzioni/strutture.
// Come sempre facciamo la richiesta base e solo quello nella cartella principale del repo
// i bonus vanno in sottocartella/e.
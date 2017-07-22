// 1ere ligne
   function etoileUn() {

    $('.etoile-un').animate({
       opacity: 1
    }, 1000);

   }

   function etoileDeux() {
       $('.etoile-deux').animate({
           opacity: 1
       }, 1000);
   }

   function etoileTrois() {
       $('.etoile-trois').animate({
           opacity: 1
       }, 1000);
   }

   function etoileQuatre() {
       $('.etoile-quatre').animate({
           opacity: 1
       }, 1000);
   }

   function etoileCinque()
   {$('.etoile-cinq').animate({
       opacity: 1
   }, 1000);

   }

// 2eme ligne
function etoileHtmlUn() {

    $('.etoile-html-un').animate({
        opacity: 1
    }, 1000);

}

function etoileHtmlDeux() {
    $('.etoile-html-deux').animate({
        opacity: 1
    }, 1000);
}

function etoileHtmlTrois() {
    $('.etoile-html-trois').animate({
        opacity: 1
    }, 1000);
}

function etoileHtmlQuatre() {
    $('.etoile-html-quatre').animate({
        opacity: 1
    }, 1000);
}

function etoileHtmlCinque()
{$('.etoile-html-cinq').animate({
    opacity: 1
}, 1000);

}
// 3eme ligne
function etoileJsUn() {

    $('.etoile-js-un').animate({
        opacity: 1
    }, 1000);

}

function etoileJsDeux() {
    $('.etoile-js-deux').animate({
        opacity: 1
    }, 1000);
}

function etoileJsTrois() {
    $('.etoile-js-trois').animate({
        opacity: 1
    }, 1000);
}

function etoileJsQuatre() {
    $('.etoile-js-quatre').animate({
        opacity: 1
    }, 1000);
}

function etoileJsCinque()
{$('.etoile-js-cinq').animate({
    opacity: 1
}, 1000);

}


// =================================
   $(window).scroll(function () {
       if(pageYOffset >= 1100){
           etoileUn();
           setTimeout(etoileDeux, 400);
           setTimeout(etoileTrois, 600);
           setTimeout(etoileQuatre, 800);
           setTimeout(etoileCinque, 1000);
       }
       if(pageYOffset >= 1400){
           etoileHtmlUn();
           setTimeout(etoileHtmlDeux, 400);
           setTimeout(etoileHtmlTrois, 600);
           setTimeout(etoileHtmlQuatre, 800);
           setTimeout(etoileHtmlCinque, 1000);
       }
       if(pageYOffset >= 1800){
           etoileJsUn();
           setTimeout(etoileJsDeux, 400);
           setTimeout(etoileJsTrois, 600);
           setTimeout(etoileJsQuatre, 800);
           setTimeout(etoileJsCinque, 1000);
       }
   });


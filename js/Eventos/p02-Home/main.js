$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';

// IDIOMA DETECCIÓN
LanguageON = window.location.hash.substring(1)

if (LanguageON != "" ){
    console.log("Idioma: ", LanguageON);
} else {
   LanguageON = "ESP"; 
   console.log("Idioma: Default");
}



var GotoObra = function () {
    window.location.href = '../../secciones/p03-obra/index.html'+'#'+LanguageON;
};

var GotoInterpretacion = function () {
    window.location.href = '../../secciones/p05-interpretacion/index.html'+'#'+LanguageON;
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.html';
};

var GotoBack = function () {
    window.location.href = '../../secciones/p01-presentacion/index.html'+'#'+LanguageON;
};


var Change_idioma_ESP = function () {
    location.reload();
    window.location.href = '../../secciones/p02-home/index.html'+'#'+'ESP';
};


var Change_idioma_ENG = function () {
    location.reload();
    window.location.href = '../../secciones/p02-home/index.html'+'#'+'ENG';
};

var Change_idioma_NAH = function () {
    location.reload();
    window.location.href = '../../secciones/p02-home/index.html'+'#'+'NAH';
};


var closem = function () {
    TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1 });
};

var opensem = function () {
    TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });
    //$(".textos").fadeIn();
};


// Bnt Continuar
$(".btn_continuar").click(function() {
	TweenMax.to("body", 1, {alpha:0, onComplete: GotoHome });
});

$(".btn_back").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoBack});
});


$(".btn_Obra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:   GotoObra });
});


$(".btn_interpretacion").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete: GotoInterpretacion  });
});


var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});
    //TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });

    TweenMax.to(".BloqueA",1.5, {left:"0%",     alpha:1, ease: Sine.easeOut });
    TweenMax.to(".BloqueB",1.5, {left:"33.33%", alpha:1, ease: Sine.easeOut });
    TweenMax.to(".BloqueC",1.5, {left:"66.66%", alpha:1, ease: Sine.easeOut, onComplete: opensem  });
};

InitScreen();


// EVENTOS MENU ===================

$(".btn_open_menu").click(function() {
    TweenMax.to(".menu-General", 0.5, {right:"0%", alpha:1});
    $(".btn_open_menu").hide();
    $(".btn_close_menu").show();
});


$(".btn_close_menu").click(function() {
    TweenMax.to(".menu-General", 0.5, {right:"-11%", alpha:1});
    $(".btn_open_menu").show();
    $(".btn_close_menu").hide();
});


// EVENTOS AYUDA ===================

$(".btn_ayuda").click(function() {
    $(".ayuda-image").fadeIn();   
});

$(".ayuda-image").click(function() {
    $(".ayuda-image").fadeOut();   
});


// EVENTOS SELECT IDIOMA ===================

$(".select_ESP").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ESP });
});

$(".select_ENG").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ENG });
});

$(".select_NAH").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_NAH});
});


}); // =============== onDocumetReady
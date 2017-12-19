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





var ExitScreen = function () {
    window.location.href = 'secciones/p01-presentacion/index.html';
};

var Change_idioma_ESP = function () {
    location.reload();
    window.location.href = '../../secciones/p01-presentacion/index.html'+'#'+'ESP';
};


var Change_idioma_ENG = function () {
    location.reload();
    window.location.href = '../../secciones/p01-presentacion/index.html'+'#'+'ENG';
};

var Change_idioma_NAH = function () {
    location.reload();
    window.location.href = '../../secciones/p01-presentacion/index.html'+'#'+'NAH';
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.html'+'#'+LanguageON;
};



var closem = function () {
    TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1, onComplete: closem });
};


// Bnt Continuar
$(".btn_continuar").click(function() {
	TweenMax.to("body", 1, {alpha:0, onComplete: GotoHome });
});

var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});
    TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });
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
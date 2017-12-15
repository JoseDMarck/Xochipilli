$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';


var ExitScreen = function () {
    window.location.href = 'secciones/p01-presentacion/index.html';
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.html';
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





}); // =============== onDocumetReady
$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

var ExitScreen = function () {
    window.location.href = 'secciones/p01-presentacion/index.html';
};

var closem = function () {
    TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1, onComplete: closem });
};




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
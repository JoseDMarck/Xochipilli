$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';


var GotoObra = function () {
    window.location.href = '../../secciones/p03-obra/index.html';
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.html';
};

var GotoBack = function () {
    window.location.href = '../../secciones/p01-presentacion/index.html';
};



var closem = function () {
    TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1 });
};

var opensem = function () {
    TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });
    //$(".textos").fadeIn();
};


 

$(".btn_home").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome});
});


$(".btn_Obra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoObra });
});



var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});
};

InitScreen();


 


// EVENTOS AYUDA ===================

$(".btn_ayuda").click(function() {
    $(".ayuda-image").fadeIn();   
});

$(".ayuda-image").click(function() {
    $(".ayuda-image").fadeOut();   
});




}); // =============== onDocumetReady
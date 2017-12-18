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



// EVENTOS GALLERIA ===================

var num_total = 3;
var num_init = 1;


$(".next_btn").click(function() {

     if (num_init == 2){
        $(".next_btn").hide();
     }

    if (num_init > 0){
        $(".prev_btn").show();
     }


    if (num_init < 3){
        $(".gal_img").hide();
        $(".gal_txt").hide();

        num_init = num_init + 1;
        console.log("num_init", num_init);
        $(".obra_img_"+num_init).fadeIn();
        $(".gal_txt_"+num_init).fadeIn();
    }
     

});


$(".prev_btn").click(function() {

    if (num_init == 2){
        $(".prev_btn").hide();
     }

    if (num_init > 1){
        $(".gal_img").hide();
        $(".gal_txt").hide();

        num_init = num_init - 1;
        console.log("num_init", num_init);
        $(".obra_img_"+num_init).fadeIn();
        $(".gal_txt_"+num_init).fadeIn();

        $(".next_btn").show();
    }
     

});


}); // =============== onDocumetReady
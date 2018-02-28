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
    window.location.href = '../../secciones/p03-obra/index.html';
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.html' +'#'+LanguageON;
};

var GotoBack = function () {
    window.location.href = '../../secciones/p03-obra/index.html' +'#'+LanguageON;
};

var GotoLectura = function () {
    window.location.href = '../../secciones/p06-lectura-general/index.html' +'#'+LanguageON;
};

var GotoAtavios_sol = function () {
    window.location.href = '../../secciones/p07-atavios-de-sol/index.html' +'#'+LanguageON;
};

var GotoAtavios_tierra = function () {
    window.location.href = '../../secciones/p08-atavios-de-tierra/index.html' +'#'+LanguageON;
};

var GotoAtavios_florido = function () {
    window.location.href = '../../secciones/p09-atavios-floridos/index.html' +'#'+LanguageON;
};

var GotoTrono = function () {
    window.location.href = '../../secciones/p10-trono/index.html' +'#'+LanguageON;
};





var closem = function () {
    TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1 });
};

var opensem = function () {
    TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });
    //$(".textos").fadeIn();
};


 

$(".btn_back").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoBack});
});

$(".btn_home").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome});
});


$(".btn_Obra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoObra });
});


$(".btn_lectura").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoLectura });
});

$(".btn_atavios_tierra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoAtavios_tierra });
});


$(".btn_atavios_florido").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoAtavios_florido });
});

$(".btn_trono").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoTrono });
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


    if (num_init < num_total){
        $(".gal_img").hide();
        $(".gal_txt").hide();

        num_init = num_init + 1;
        console.log("num_init", num_init);
        $(".repres_img_"+num_init).fadeIn();
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
        $(".repres_img_"+num_init).fadeIn();
        $(".gal_txt_"+num_init).fadeIn();

        $(".next_btn").show();
    }
     

});




 

}); // =============== onDocumetReady
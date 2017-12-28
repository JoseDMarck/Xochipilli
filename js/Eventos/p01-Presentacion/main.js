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


// EVENTOS GALLERIA ===================

var num_total = 4;
var num_init;
var num_gal;


$(".btn_close").click(function() {
    $(".PopUpSlider").fadeOut();
});

$(".open_popUp").click(function() {
  
  valor_hp = $(this).attr('class').split(' ')[1];
    console.log(valor_hp);

    if( valor_hp == "btn_L-1-1" ){
        num_gal = 1;
        num_init = 1;
    }

    if( valor_hp == "btn_L-1-2" ){
        num_gal = 1;
        num_init = 2;
    }

    if( valor_hp == "btn_L-1-3" ){
        num_gal = 1;
        num_init = 3;
    }

    if( valor_hp == "btn_L-1-4" ){
        num_gal = 1;
        num_init = 4;
    }

    // para mostrar el btn de prev
    if (num_init < 2 ){
        $(".btn_prev").hide();
    }
    else{
        $(".btn_prev").show();
    }

    // para mostrar el btn de next
    if (num_init < 4  ){
        $(".btn_next").show();
    }
    else{
         $(".btn_next").hide();
    }

      $(".Textos").hide();
      $(".PopUpSlider").fadeIn();
      $(".seccion-m-"+num_init).fadeIn();

});


$(".btn_next").click(function() {
     if (num_init == 3){
        $(".btn_next").hide();
     }

    if (num_init > 0){
        $(".btn_prev").show();
     }


    if (num_init < num_total){
        $(".gal_img").hide();
        $(".gal_desc_LG").hide();

        num_init = num_init + 1;
        console.log("num_init", num_init);
        $(".Textos").hide();
        $(".seccion-m-"+num_init).fadeIn();

         
    }
});

$(".btn_prev").click(function() {

    if (num_init == 2){
        $(".btn_prev").hide();
     }

    if (num_init > 1){
        $(".gal_img").hide();
        $(".gal_desc_LG").hide();

        num_init = num_init - 1;
        console.log("num_init", num_init);
        $(".Textos").hide();
        $(".seccion-m-"+num_init).fadeIn();

        $(".btn_next").show();
    }
     

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
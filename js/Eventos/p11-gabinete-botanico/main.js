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
    window.location.href = '../../secciones/p05-interpretacion/index.html' +'#'+LanguageON;;
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
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome });
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

var num_total = 12;
var num_init;
var num_gal;


$(".btn_hotspots-GB").click(function() {

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

    if( valor_hp == "btn_L-1-5" ){
        num_gal = 1;
        num_init = 5;
    }

    if( valor_hp == "btn_L-1-6" ){
        num_gal = 1;
        num_init = 6;
    }

    if( valor_hp == "btn_L-1-7" ){
        num_gal = 1;
        num_init = 7;
    }

    if( valor_hp == "btn_L-1-8" ){
        num_gal = 1;
        num_init = 8;
    }

    if( valor_hp == "btn_L-1-9" ){
        num_gal = 1;
        num_init = 9;
    }

    if( valor_hp == "btn_L-1-10" ){
        num_gal = 1;
        num_init = 10;
    }

    if( valor_hp == "btn_L-1-11" ){
        num_gal = 1;
        num_init = 11;
    }

    if( valor_hp == "btn_L-1-12" ){
        num_gal = 1;
        num_init = 12;
    }


  

    // para mostrar el btn de prev
    if (num_init < 2 ){
        $(".btn_prev").hide();
    }
    else{
        $(".btn_prev").show();
    }

    // para mostrar el btn de next
    if (num_init < 12  ){
        $(".btn_next").show();
    }
    else{
         $(".btn_next").hide();
    }

    $(".PopUpSlider").fadeIn();
    $(".imagen-GB-"+num_gal+"-"+num_init).fadeIn();
    $(".desc-"+num_gal+"-"+num_init).fadeIn();

});



$(".btn_next").click(function() {
     if (num_init == 11){
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
        $(".imagen-GB-"+num_gal+"-"+num_init).fadeIn();
        $(".desc-"+num_gal+"-"+num_init).fadeIn();

         
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
        $(".imagen-GB-"+num_gal+"-"+num_init).fadeIn();
        $(".desc-"+num_gal+"-"+num_init).fadeIn();

        $(".btn_next").show();
    }
     

});


$(".btn_close").click(function() {
    $(".PopUpSlider").fadeOut();
    $(".gal_img").hide();
    $(".gal_desc_LG").hide();
    num_init = 1;
    
});


// =============== FUNCIONALIDAD PARA EL ZOOM

$(function () {
    var viewer = ImageViewer({zoomValue:160});
    $('.full_btn').click(function () {
        var imgSrc = "../../images/p04-representaciones/full_img"+num_init+".jpg",
        highResolutionImage = $(this).data('high-res-img');
        viewer.show(imgSrc, highResolutionImage);
    });
}); 



}); // =============== onDocumetReady
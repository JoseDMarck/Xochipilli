$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';

// IDIOMA DETECCIÓN
LanguageON = window.location.hash.substring(1)
console.log("Idioma Inicial: ", LanguageON);

if (LanguageON != "" ){
    
    if( LanguageON == "ENG" ){
        console.log("Idioma: ", LanguageON);
       /* $(".btn_Glosario").addClass("btn_GlosarioENG");
        $(".btn_Referencias").addClass("btn_ReferenciasENG");
        $(".btn_Creditos").addClass("btn_CreditosENG");
        $(".ayuda-image").addClass("ayuda-image-ENG");*/
    }

    if( LanguageON == "NAH" ){
        console.log("Idioma: ", LanguageON);
        /*$(".btn_Glosario").addClass("btn_GlosarioNAH");
        $(".btn_Referencias").addClass("btn_ReferenciasNAH");
        $(".btn_Creditos").addClass("btn_CreditosNAH");
        $(".ayuda-image").addClass("ayuda-image-NAH");*/
    } 

   

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


var GotoGabineteBotanico = function () {
    window.location.href = '../../secciones/p11-gabinete-botanico/index.html'+'#'+LanguageON;
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
    //TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1 });
};

var opensem = function () {
    //TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });
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

$(".btn_gabinete_botanico").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:   GotoGabineteBotanico });
});



$(".btn_interpretacion").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete: GotoInterpretacion  });
});


var InitScreen = function () {

    // Al iniciar el Body
    TweenMax.to("body", 3, {alpha:1});

    // Para efecto de ayuda
    TweenMax.to(".Ayuda", 0.5, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0, rotation:360,  ease: Circ.easeOut, onComplete: 
        close = function(){

            CloseAyudaOnInitEvent = setTimeout(function(){ 
                TweenMax.to(".Ayuda", 0.3, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20, rotation:180, ease: Circ.easeOut})
                move_screen_buttos();
            }, 5000);
            
        }   
    })


   
    move_screen_buttos = function(){
        TweenMax.to(".btn_obra", 1, {alpha:1, y:272 });
        TweenMax.to(".btn_interpretacion", 1, {alpha:1, y: 421 });
        TweenMax.to(".btn_gabinete", 1, {alpha:1, y: 570 });
        
    }
  
    
    
    //TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });



    /*TweenMax.to(".BloqueA",1.5, {left:"0%",     alpha:1, ease: Sine.easeOut });
    TweenMax.to(".BloqueB",1.5, {left:"33.33%", alpha:1, ease: Sine.easeOut });
    TweenMax.to(".BloqueC",1.5, {left:"66.66%", alpha:1, ease: Sine.easeOut, onComplete: opensem  });*/
};


InitScreen();





// EVENTOS MENU ===================

/*$(".btn_open_menu").click(function() {
    TweenMax.to(".menu-General", 0.5, {right:"0%", alpha:1});
    $(".btn_open_menu").hide();
    $(".btn_close_menu").show();
});


$(".btn_close_menu").click(function() {
    TweenMax.to(".menu-General", 0.5, {right:"-11%", alpha:1});
    $(".btn_open_menu").show();
    $(".btn_close_menu").hide();
});*/


// EVENTOS AYUDA ===================


$(".btn_ayuda").click(function() {
    TweenMax.to(".Ayuda", 0.5, { alpha: 1, width:1920, height:1080, x:0, y:0, rotation:360, ease: Circ.easeOut});    
});

$(".Ayuda").click(function() {
    TweenMax.to(".Ayuda", 0.3, {alpha: 1, width:0, height:0, x:275, y: -20, rotation:180,   ease: Circ.easeOut});    
    clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
    move_screen_buttos();
});





$(".btn_obra").click(function() {

});



 


// EVENTOS SELECT IDIOMA ===================

/*$(".select_ESP").click(function(event) {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ESP });
    LanguageON = null;
    event.stopPropagation();
});

$(".select_ENG").click(function(event) {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ENG });
    LanguageON = null;
    event.stopPropagation();
});

$(".select_NAH").click(function(event) {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_NAH});
    LanguageON = null;
    event.stopPropagation();
});*/


// EVENTOS GALLERIA ===================

/*var num_total = 4;
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
     

}); */



}); // =============== onDocumetReady
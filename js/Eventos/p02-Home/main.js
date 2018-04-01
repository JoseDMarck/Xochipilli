$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';

// IDIOMA DETECCIÓN
LanguageON = window.location.hash.substring(1)
console.log("Idioma Inicial: ", LanguageON);

if (LanguageON != "" ){

    if( LanguageON == "ESP" ){
        console.log("Idioma: ", LanguageON);
        $(".btn_idioma_es").addClass("btn_idioma_es_on");

    } 
    
    if( LanguageON == "ENG" ){
        console.log("Idioma: ", LanguageON);
        $(".btn_idioma_en").addClass("btn_idioma_en_on");
        
      
    }

    if( LanguageON == "NAH" ){
        console.log("Idioma: ", LanguageON);
        $(".btn_idioma_na").addClass("btn_idioma_na_on");
        
       
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
    window.location.href = '../../index.html'
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


$(".btn_obra").click(function() {
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


$(".btn_ayuda-m").click(function() {
    TweenMax.to(".AyudaMenus", 0.5, { alpha: 1, width:1920, height:1080, x:0, y:0, rotation:360, ease: Circ.easeOut});    
});

$(".AyudaMenus").click(function() {
    TweenMax.to(".AyudaMenus", 0.3, {alpha: 1, width:0, height:0, x:275, y: -20, rotation:180,   ease: Circ.easeOut});    
});





 


 


// EVENTOS SELECT IDIOMA ===================

$(".btn_idioma_es").click(function(event) {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ESP });
    LanguageON = null;
    event.stopPropagation();
});

$(".btn_idioma_en").click(function(event) {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ENG });
    LanguageON = null;
    event.stopPropagation();
});

$(".btn_idioma_na").click(function(event) {
    TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_NAH});
    LanguageON = null;
    event.stopPropagation();
});


 


}); // =============== onDocumetReady
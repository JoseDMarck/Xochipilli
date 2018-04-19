$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.php';

// FUNCION PARA DETECTAR LOS PARAMETROS DE LA URL 
var urlParams;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

// IDIOMA DETECCIÓN VARIABLES
LanguageON = urlParams["idioma"];



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
    window.location.href = '../../secciones/p03-obra/index.php'+'?idioma='+LanguageON;
};

var GotoInterpretacion = function () {
    window.location.href = '../../secciones/p05-interpretacion/index.php'+'?idioma='+LanguageON;
};


var GotoGabineteBotanico = function () {
    window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+LanguageON;
};

var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.php';
};

var GotoBack = function () {
    window.location.href = '../../index.php'
};


var Change_idioma_ESP = function () {
    location.reload();
    window.location.href = '../../secciones/p02-home/index.php'+'?idioma='+'ESP';
};


var Change_idioma_ENG = function () {
    location.reload();
    window.location.href = '../../secciones/p02-home/index.php'+'?idioma='+'ENG';
};

var Change_idioma_NAH = function () {
    location.reload();
    window.location.href = '../../secciones/p02-home/index.php'+'?idioma='+'NAH';
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

$(".btn_gabinete").click(function() {
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
        TweenMax.to(".btn_obra", 1, {alpha:1, y:372 });
        TweenMax.to(".btn_interpretacion", 1, {alpha:1, y: 521 });
        TweenMax.to(".btn_gabinete", 1, {alpha:1, y: 670 });
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
    TweenMax.to(".Ayuda", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0, rotation:360, ease: Circ.easeOut});    
});

$(".Ayuda").click(function() {
    TweenMax.to(".Ayuda", 0.8, {alpha: 1, width:0, height:0, x:275, y: -20, rotation:180,   ease: Circ.easeOut});    
    clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
    move_screen_buttos();
});


$(".btn_ayuda-m").click(function() {
    TweenMax.to(".AyudaMenus", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0, rotation:360, ease: Circ.easeOut});    
});

$(".AyudaMenus").click(function() {
    TweenMax.to(".AyudaMenus", 0.8, {alpha: 1, width:0, height:0, x:275, y: -20, rotation:180,   ease: Circ.easeOut});    
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
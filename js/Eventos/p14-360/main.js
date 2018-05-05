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
helpHomeStatus = urlParams["helpHomeStatus"];

 
if (LanguageON != "" ){
    
        if( LanguageON == "ESP" ){
            //$(".btn_idioma_es_General").addClass("btn_idioma_es_on_General");
        } 
        
        if( LanguageON == "ENG" ){
            //$(".btn_idioma_en_General").addClass("btn_idioma_en_on_General");
        }
    
        if( LanguageON == "NAH" ){
            //$(".btn_idioma_na_General").addClass("btn_idioma_na_on_General");
        } 
    
       
    } else {
       LanguageON = "ESP"; 
       console.log("Idioma: Default");
    }

  
    

// EVENTOS SELECT IDIOMA ===================
var GotoObra = function () {
    window.location.href = '../../secciones/p03-obra/index.php'+
    '&helpHomeStatus='+helpHomeStatus
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
};

var GotoBack = function () {
    window.location.href = '../../secciones/p12-gabinete-botanico/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus 
};


var GotoInterpretacion = function(){
    window.location.href = '../../secciones/p05-interpretacion/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
}


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


$(".btn_inicio_General").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome});
});



$(".btn_Obra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoObra });
});


$(".btn_cerrar").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoInterpretacion });
});








var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});

 

     // Para efecto de ayuda
     /*TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0, rotation:360,  ease: Circ.easeOut, onComplete: 
        close = function(){

            CloseAyudaOnInitEvent = setTimeout(function(){ 
                TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20, rotation:180, ease: Circ.easeOut})
            }, 5000);
            
        }   
    })*/

};


InitScreen();


// EVENTOS AYUDA ===================
$(".btn_ayuda_General").click(function() {
    TweenMax.to(".ayuda-image", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0, rotation:360, ease: Circ.easeOut});    
});

$(".ayuda-image").click(function() {
    TweenMax.to(".ayuda-image", 0.8  , {alpha: 1, width:0, height:0, x:275, y: -20, rotation:180,   ease: Circ.easeOut});    
    clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
});


 



}); // =============== onDocumetReady
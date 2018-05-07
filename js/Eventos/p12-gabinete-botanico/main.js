$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.php';
num_flor = null; 
num_xo = null; 
num_na = null; 
num_do = null;
total_g = null;
get_atavio = null;
current_Gal = null;

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
            console.log("Idioma: ", LanguageON);
            $(".btn_idioma_es_General").addClass("btn_idioma_es_on_General");
    
        } 
        
        if( LanguageON == "ENG" ){
            console.log("Idioma: ", LanguageON);
            $(".btn_idioma_en_General").addClass("btn_idioma_en_on_General");
            
          
        }
    
        if( LanguageON == "NAH" ){
            console.log("Idioma: ", LanguageON);
            $(".btn_idioma_na_General").addClass("btn_idioma_na_on_General");
        } 
    
       
    } else {
       LanguageON = "ESP"; 
       console.log("Idioma: Default");
    }

    var Change_idioma_ESP = function () {
        
        if(urlParams["back"] != null ){
            location.reload();
            window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+'ESP'+'&back=' + "florido"+
            '&helpHomeStatus='+helpHomeStatus;
        }else{
            location.reload();
            window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+'ESP'+
            '&helpHomeStatus='+helpHomeStatus;
        }
        
       
    };
    
    
    var Change_idioma_ENG = function () {
       

        if(urlParams["back"] != null ){
            location.reload();
            window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+'ENG'+'&back=' + "florido"+
            '&helpHomeStatus='+helpHomeStatus
        }else{
            location.reload();
            window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+'ENG'+
            '&helpHomeStatus='+helpHomeStatus
        }


    };
    
    var Change_idioma_NAH = function () {
       

        if(urlParams["back"] != null ){
            location.reload();
            window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+'NAH'+'&back=' + "florido"+
            '&helpHomeStatus='+helpHomeStatus
        }else{
            location.reload();
            window.location.href = '../../secciones/p12-gabinete-botanico/index.php'+'?idioma='+'NAH'+
            '&helpHomeStatus='+helpHomeStatus
        }
    };
    

    // EVENTOS SELECT IDIOMA ===================

    $(".btn_idioma_es_General").click(function(event) {
        TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ESP });
        LanguageON = null;
        event.stopPropagation();
    });

    $(".btn_idioma_en_General").click(function(event) {
        TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_ENG });
        LanguageON = null;
        event.stopPropagation();
    });

    $(".btn_idioma_na_General").click(function(event) {
        TweenMax.to("body", 1, {alpha:0, onComplete: Change_idioma_NAH});
        LanguageON = null;
        event.stopPropagation();
    });


var GotoObra = function () {
    window.location.href = '../../secciones/p03-obra/index.php'+
    '&helpHomeStatus='+helpHomeStatus
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
};

var GotoBack = function () {

if(urlParams["back"] != null ){
    window.location.href = '../../secciones/p11-atavio-florido/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
}else{
    window.location.href = '../../secciones/p02-home/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
}


};


var GotoDetalleFlor = function(){
    

    if(urlParams["back"] != null ){
        window.location.href = '../../secciones/p13-detalle-flor/index.php' +
        '?idioma='+LanguageON + 
        '&idflor='+ num_flor + 
        '&num_xo='+ num_xo +
        '&num_na='+ num_na +
        '&num_do='+ num_do +
        '&total_g=' + total_g+
        '&back=' + "florido"+
        '&current_Gal='+current_Gal+
        '&pos_xo_init='+pos_xo_init+
        '&pos_na_init='+pos_na_init+
        '&pos_do_init='+pos_do_init+
        '&helpHomeStatus='+helpHomeStatus


    }else{
        window.location.href = '../../secciones/p13-detalle-flor/index.php' +
        '?idioma='+LanguageON + 
        '&idflor='+ num_flor + 
        '&num_xo='+ num_xo +
        '&num_na='+ num_na +
        '&num_do='+ num_do +
        '&total_g=' + total_g+
        '&current_Gal='+current_Gal+
        '&pos_xo_init='+pos_xo_init+
        '&pos_na_init='+pos_na_init+
        '&pos_do_init='+pos_do_init+
        '&helpHomeStatus='+helpHomeStatus
    }


   

    
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



$(".goToDetalleFlor").click(function() {
    num_flor = $(this).attr('class').split(' ')[2];
    num_xo = $(this).attr('class').split(' ')[3];
    num_na = $(this).attr('class').split(' ')[4];
    num_do = $(this).attr('class').split(' ')[5];
    total_g = $(this).attr('class').split(' ')[6];
    current_Gal = $(this).attr('class').split(' ')[7];

    pos_xo_init = $(this).attr('class').split(' ')[8];
    pos_na_init = $(this).attr('class').split(' ')[9];
    pos_do_init = $(this).attr('class').split(' ')[10];

    console.log("num_xo", num_xo);
    console.log("num_na", num_na);
    console.log("num_do", num_do);
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoDetalleFlor });
});


var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});

     // Para efecto de ayuda
     /*TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0,   ease: Circ.easeOut, onComplete: 
        close = function(){

            CloseAyudaOnInitEvent = setTimeout(function(){ 
                TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20, ease: Circ.easeOut})
            }, 8000);
        }   
    }) */


    $(".ayuda-image").click(function() {
        TweenMax.to(".ayuda-image", 0.8  , {alpha: 1, width:0, height:0, x:275, y: -20, ease: Circ.easeOut});    
        //clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
    });


};


InitScreen();


// EVENTOS AYUDA ===================
$(".btn_ayuda_General").click(function() {
    TweenMax.to(".ayuda-image", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0,   ease: Circ.easeOut});    
});


 

 





}); // =============== onDocumetReady
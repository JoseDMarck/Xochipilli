$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';

// IDIOMA DETECCIÓN
LanguageON = window.location.hash.substring(1)

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
        location.reload();
        window.location.href = '../../secciones/p05-interpretacion/index.html'+'#'+'ESP';
    };
    
    
    var Change_idioma_ENG = function () {
        location.reload();
        window.location.href = '../../secciones/p05-interpretacion/index.html'+'#'+'ENG';
    };
    
    var Change_idioma_NAH = function () {
        location.reload();
        window.location.href = '../../secciones/p05-interpretacion/index.html'+'#'+'NAH';
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


var GotoSeniorFlores = function(){
    window.location.href = '../../secciones/p07-senior-flores/index.html' +'#'+LanguageON;
}

var GotoPedestal = function(){
    window.location.href = '../../secciones/p08-pedestal/index.html' +'#'+LanguageON;
}


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
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome});
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


$(".btn_senior_flores").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoSeniorFlores });
});

$(".btn_pedestal").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoPedestal });
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

     // Para efecto de ayuda
     TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0, rotation:360,  ease: Circ.easeOut, onComplete: 
        close = function(){

            CloseAyudaOnInitEvent = setTimeout(function(){ 
                TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20, rotation:180, ease: Circ.easeOut})
            }, 5000);
            
        }   
    })

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
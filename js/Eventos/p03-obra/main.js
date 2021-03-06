$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.php';
var num_total_G = 4;

 

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
console.log("helpHomeStatus", helpHomeStatus);



//PARA RECUPERAR GALERIA EN VALORES

if(urlParams["curImg"] != null){
    
    
    num_init_G = urlParams["curImg"];

    Number(num_init_G)
    console.log("num_init_G", num_init_G);

    if (num_init_G > 0){
        $(".next_btn_obra").show();
    }

    if (num_init_G <= 4 && num_init_G > 1  ){
        $(".prev_btn_obra").show();
    }

    if (num_init_G > 3){
        $(".next_btn_obra").hide();
     }



    $(".gal_img_G").hide();
    $(".gal_img_G_"+num_init_G).fadeIn();


} else{
    num_init_G = 1;
    
}



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
    

var GotoObra = function () {
    window.location.href = '../../secciones/p03-obra/index.php';
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
    
};

var GotoBack = function () {
    window.location.href = '../../secciones/p01-presentacion/index.php'+'helpHomeStatus=1';
};

var GotoRepresentaciones  = function () { 
    window.location.href = '../../secciones/p04-representaciones/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus
};

var closem = function () {
    TweenMax.to(".menu-General", 1, {right:"-11%", alpha:1 });
};

var opensem = function () {
    TweenMax.to(".menu-General", 1, {right:"0%", alpha:1, onComplete: closem });
    //$(".textos").fadeIn();
};



var Change_idioma_ESP = function () {
    location.reload();
    window.location.href = '../../secciones/p03-obra/index.php'+'?idioma='+'ESP'+'&curImg='+num_init_G+
    '&helpHomeStatus='+helpHomeStatus 
};


var Change_idioma_ENG = function () {
    location.reload();
    window.location.href = '../../secciones/p03-obra/index.php'+'?idioma='+'ENG'+'&curImg='+num_init_G+
    '&helpHomeStatus='+helpHomeStatus 
};

var Change_idioma_NAH = function () {
    location.reload();
    window.location.href = '../../secciones/p03-obra/index.php'+'?idioma='+'NAH'+'&curImg='+num_init_G+
    '&helpHomeStatus='+helpHomeStatus 
};


 

$(".btn_inicio_General").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome});
});

$(".btn_back").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome });
});


$(".btn_Obra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoObra });
});






$(".btn_otrasPres").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoRepresentaciones});
});






var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});

     // Para efecto de ayuda
       // Para efecto de ayuda
    /*if(helpObraStatus != 1){
        TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0,  ease: Circ.easeOut, onComplete: 
            close = function(){

                CloseAyudaOnInitEvent = setTimeout(function(){ 
                    TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20,  ease: Circ.easeOut})
                }, 8000);
                


            }   
        })
    }*///helpObraStatus


         
    $(".ayuda-image").click(function() {
        TweenMax.to(".ayuda-image", 0.8  , {alpha: 1, width:0, height:0, x:275, y: -20, ease: Circ.easeOut});    
        //clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
    });


};





InitScreen();

// EVENTOS AYUDA ===================
$(".btn_ayuda_General").click(function() {
    TweenMax.to(".ayuda-image", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0, ease: Circ.easeOut});    
});




// EVENTOS GALLERIA ===================




$(".next_btn_obra").click(function() {

     if (num_init_G == 3){
        $(".next_btn_obra").hide();
     }

    if (num_init_G > 0){
        $(".prev_btn_obra").show();
    }


    if (num_init_G < num_total_G){
        $(".gal_img_G").hide();
        $(".gal_txt_G").hide();

        num_init_G = Number(num_init_G) + 1;
         
        $(".gal_img_G_"+num_init_G).fadeIn();
        $(".gal_txt_G_"+num_init_G).fadeIn();
    }
     

});


$(".prev_btn_obra").click(function() {

    if (num_init_G == 2){
        $(".prev_btn_obra").hide();
    }

    if (num_init_G > 1){
        $(".gal_img_G").hide();
        $(".gal_txt_G").hide();

        num_init_G = Number(num_init_G) - 1;
        console.log("num_init_G_", num_init_G);
        $(".gal_img_G_"+num_init_G).fadeIn();
        $(".gal_txt_G_"+num_init_G).fadeIn();

        $(".next_btn_obra").show();
    }
     
});


// =============== FUNCIONALIDAD PARA EL ZOOM

$(function () {
    var viewer = ImageViewer({zoomValue:160});
    $('.full_btn, .gal_img_G').click(function () {
        var imgSrc = "../../images/p03-obra/full_img"+num_init_G+".png",
        highResolutionImage = $(this).data('high-res-img');
        viewer.show(imgSrc, highResolutionImage);

        $(".ayuda-image-toca").fadeIn(); // LUPITA **** 
    });
}); 



$(".ayuda-image-toca").click(function(event) {
    $(".ayuda-image-toca").fadeOut();
    event.stopPropagation();
})


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









}); // =============== onDocumetReady
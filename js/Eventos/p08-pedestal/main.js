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
        window.location.href = '../../secciones/p08-pedestal/index.php'+'?idioma='+'ESP';
    };
    
    
    var Change_idioma_ENG = function () {
        location.reload();
        window.location.href = '../../secciones/p08-pedestal/index.php'+'?idioma='+'ENG';
    };
    
    var Change_idioma_NAH = function () {
        location.reload();
        window.location.href = '../../secciones/p08-pedestal/index.php'+'?idioma='+'NAH';
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
    window.location.href = '../../secciones/p03-obra/index.php';
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.php' +'?idioma='+LanguageON;
};

var GotoBack = function () {
    window.location.href = '../../secciones/p05-interpretacion/index.php' +'?idioma='+LanguageON;;
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


$(".btn_inicio_General").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoHome});
});



$(".btn_Obra").click(function() {
    TweenMax.to("body", 1, {alpha:0, onComplete:  GotoObra });
});



var InitScreen = function () {
    TweenMax.to("body", 3, {alpha:1});

     // Para efecto de ayuda
     TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0,   ease: Circ.easeOut, onComplete: 
        close = function(){

            CloseAyudaOnInitEvent = setTimeout(function(){ 
                TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20, ease: Circ.easeOut})
            }, 8000);


            $(".ayuda-image").click(function() {
                TweenMax.to(".ayuda-image", 0.8  , {alpha: 1, width:0, height:0, x:275, y: -20,   ease: Circ.easeOut});    
                clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
            });
            
            
        }   
    })


};


InitScreen();


// EVENTOS AYUDA ===================
$(".btn_ayuda_General").click(function() {
    TweenMax.to(".ayuda-image", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0,  ease: Circ.easeOut});    
});



 

 

// EVENTOS GALLERIA HP ===================

var num_total_HP = null;
var num_init_HP;
var num_gal_HP;


$(".btn_hotspots-LG").click(function() {

    valor_hp = $(this).attr('class').split(' ')[1];
    console.log(valor_hp);


    //Bloque imagenes N. 1
    if( valor_hp == "btn_L-1-1_HP" ){
        num_gal_HP = 1;
        num_init_HP = 1;
        num_total_HP = 2; 
    }

    if( valor_hp == "btn_L-1-2_HP" ){
        num_gal_HP = 1;
        num_init_HP = 2;
        num_total_HP = 2; 
    }

  

    //Bloque imagenes N. 2    
    if( valor_hp == "btn_L-2-1_HP" ){
        num_gal_HP = 2;
        num_init_HP = 1;
        num_total_HP = 2; 
    }

    if( valor_hp == "btn_L-2-2_HP" ){
        num_gal_HP = 2;
        num_init_HP = 2;
        num_total_HP = 2; 
    }

   

    //Bloque imagenes N. 3    
    if( valor_hp == "btn_L-3-1_HP" ){
        num_gal_HP = 3;
        num_init_HP = 1;
        num_total_HP = 3; 
    }

    if( valor_hp == "btn_L-3-2_HP" ){
        num_gal_HP = 3;
        num_init_HP = 2;
        num_total_HP = 3; 
    }

    if( valor_hp == "btn_L-3-3_HP" ){
        num_gal_HP = 3;
        num_init_HP = 3;
        num_total_HP = 3; 
    }

    //Bloque imagenes N. 4    
    if( valor_hp == "btn_L-4-1_HP" ){
        num_gal_HP = 4;
        num_init_HP = 1;
        num_total_HP = 1; 
    }
 
 


    if( num_init_HP  == num_total_HP){
        $(".btn_next_HP").hide();
    }
        

    // para mostrar el btn de prev
    if (num_init_HP < 2 ){
        $(".btn_prev_HP").hide();
    }
    else{
        $(".btn_prev_HP").show();
    }


    // para mostrar el btn de NEXT
    if (num_init_HP < num_total_HP ){
        $(".btn_next_HP").show();
    }
    else{
        $(".btn_next_HP").hide();
    }

    


    $(".PopUpSlider_HP").fadeIn();
    $(".imagen-P-"+num_gal_HP+"-"+num_init_HP).fadeIn();
    $(".desc-"+num_gal_HP+"-"+num_init_HP).fadeIn();

});



$(".btn_next_HP").click(function() {
     
    if (num_init_HP == num_total_HP - 1){
        $(".btn_next_HP").hide();
     }

    if (num_init_HP > 0){
        $(".btn_prev_HP").show();
     }


    if (num_init_HP < num_total_HP){

        num_init_HP = num_init_HP + 1;

        $(".gal_img").hide();
        $(".gal_desc_LG").hide();

        
        console.log("num_init_HP", num_init_HP);
        $(".imagen-P-"+num_gal_HP+"-"+num_init_HP).fadeIn();
        $(".desc-"+num_gal_HP+"-"+num_init_HP).fadeIn();
         
    }
});


$(".btn_prev_HP").click(function() {

    if (num_init_HP == 2){
        $(".btn_prev_HP").hide();
     }

    if (num_init_HP > 1){
        $(".gal_img").hide();
        $(".gal_desc_LG").hide();

        num_init_HP = num_init_HP - 1;
        console.log("num_init_HP", num_init_HP);
        $(".imagen-P-"+num_gal_HP+"-"+num_init_HP).fadeIn();
        $(".desc-"+num_gal_HP+"-"+num_init_HP).fadeIn();

        $(".btn_next_HP").show();
    }
     

});


$(".btn_close_HP").click(function() {
    $(".PopUpSlider_HP").fadeOut();
    $(".gal_img").hide();
    $(".gal_desc_LG").hide();
    num_init_HP = 1;
    num_total_HP = null;
     
    
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
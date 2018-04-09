$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.html';
pos_xo = null;
pos_na = null;
pos_do = null;

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
id_flor = urlParams["idflor"];
id_num_xo = urlParams["num_xo"];
id_num_na = urlParams["num_na"];
id_num_do = urlParams["num_do"];
id_total_g = urlParams["total_g"]

//Valores inicales galeria;
var num_total_G = Number(id_num_xo);
var num_init_G = 1;


//PARA LA POSICIÓN DE LAS IMAGENES EN LAS GALERIAS 


//Flor numero 1
if(id_flor == 0 ){
    pos_xo = 0;
    pos_na = 1;
    pos_do = 2;
}


if (LanguageON != "" ){
    
        if( LanguageON == "ESP" ){
            console.log("Idioma: ", LanguageON);
            console.log("id_flor", id_flor);
            
            console.log("id_num_xo", id_num_xo);
            console.log("id_num_na", id_num_na);
            console.log("id_num_do", id_num_do);
            console.log("id_total_g", id_total_g);
            


            $(".btn_idioma_es_General").addClass("btn_idioma_es_on_General");
    
        } 
        
        if( LanguageON == "ENG" ){
            console.log("Idioma: ", LanguageON);
            console.log("id_flor", id_flor);
            $(".btn_idioma_en_General").addClass("btn_idioma_en_on_General");
            
          
        }
    
        if( LanguageON == "NAH" ){
            console.log("Idioma: ", LanguageON);
            console.log("id_flor", id_flor);
            $(".btn_idioma_na_General").addClass("btn_idioma_na_on_General");
        } 
    
       
    } else {
       LanguageON = "ESP"; 
       console.log("Idioma: Default");
    }

    var Change_idioma_ESP = function () {
        location.reload();
        window.location.href = '../../secciones/p13-detalle-flor/index.html'+'?idioma='+'ESP' + '&idflor='+ id_flor; 
    };
    
    
    var Change_idioma_ENG = function () {
        location.reload();
        window.location.href = '../../secciones/p13-detalle-flor/index.html'+'?idioma='+'ENG' + '&idflor='+ id_flor; 
    };
    
    var Change_idioma_NAH = function () {
        location.reload();
        window.location.href = '../../secciones/p13-detalle-flor/index.html'+'?idioma='+'NAH' + '&idflor='+ id_flor; 
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
    window.location.href = '../../secciones/p02-home/index.html' +'?idioma='+LanguageON;
};

var GotoBack = function () {
    window.location.href = '../../secciones/p12-gabinete-botanico/index.html' +'?idioma='+LanguageON;;
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
//<div class="obra_img_G_1 gal_img_G_1 gal_img_G"></div>



for (i = 0; i < id_total_g; i++) { 
    console.log("i-", i);
    $( ".ContendorGaleria" ).append('<div class="flor_'+id_flor+'_img_G_'+i+'_'+LanguageON+' gal_img_G_'+i+' gal_img_G"></div>');
}



if (num_init_G == 1){
    $(".next_btn_obra").hide();
} else{
    $(".next_btn_obra").show();
    
}


$(".next_btn_obra").click(function() {

     if (num_init_G == num_total_G){
       $(".next_btn_obra").hide();
     }

    if (num_init_G > 0){
        $(".prev_btn_obra").show();
     }


    if (num_init_G  <= num_total_G ){
        $(".gal_img_G").hide();
        $(".gal_txt_G").hide();

        num_init_G = num_init_G + 1;
        console.log("num_init_G_", num_init_G);
        console.log("num_total_G", num_total_G);
        
        $(".gal_img_G_"+num_init_G).fadeIn();
    }
     

});


$(".prev_btn_obra").click(function() {
    
         if (num_init_G == num_total_G){
            $(".prev_btn_obra").hide();
         }
    
        if (num_init_G > 1){
            $(".gal_img_G").hide();
            $(".gal_txt_G").hide();
    
            num_init_G = num_init_G - 1;
            console.log("num_init_G_", num_init_G);
            $(".gal_img_G_"+num_init_G).fadeIn();
    
            $(".next_btn_obra").show();
        }
         
    });
 



// BOTONES SECCIONS GALERIA 

// EN XOCHIPILLI
$(".btn_en_xochipili").addClass("btn_en_xochipili_on"); // on init 
$(".btn_en_xochipili").click(function() {
    num_init_G = pos_xo;
    num_total_G = Number(id_num_xo);
    console.log("num_total_G", num_total_G);

    $(".gal_img_G").hide();
    $(".gal_img_G_"+pos_xo).fadeIn();

    // PARA EL BOTON DE NEXT
    if (num_total_G == 1){
        $(".next_btn_obra").hide();
    }
    else{
        $(".next_btn_obra").show();
    }

    //PARA EL BOTON DE PREV
    if (num_init_G <= 2){
        $(".prev_btn_obra").hide();
    }

    

    $(".btn_en_xochipili").addClass("btn_en_xochipili_on");
    $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on");
    $(".btn_en_documentos").removeClass("btn_en_documentos_on");
});


// EN NATURALEZA
$(".btn_en_naturaleza").click(function() {
    num_init_G = pos_na;    
    num_total_G = Number(id_num_na);
    console.log("num_total_G", num_total_G);


    $(".gal_img_G").hide();
    $(".gal_img_G_"+pos_na).fadeIn();
    
    if (num_total_G == 1){
        $(".next_btn_obra").hide();
    }
    else{
        $(".next_btn_obra").fadeIn();
    }

     //PARA EL BOTON DE PREV
     if (num_init_G <= 2){
        $(".prev_btn_obra").hide();
    }

    $(".btn_en_naturaleza").addClass("btn_en_naturaleza_on");
    $(".btn_en_xochipili").removeClass("btn_en_xochipili_on");    
    $(".btn_en_documentos").removeClass("btn_en_documentos_on");
});

// EN DOCUMENTOSS
$(".btn_en_documentos").click(function() {
    num_init_G = pos_do;    
    num_total_G = Number(id_num_do);
    console.log("num_init_G", num_init_G);    
    console.log("num_total_G", num_total_G);
   

    $(".gal_img_G").hide();
    $(".gal_img_G_"+pos_do).fadeIn();

    // PARA EL BOTON DE NEXT
    if (num_total_G == 1){
        $(".next_btn_obra").hide();
    }
    else {
        $(".next_btn_obra").show();
    }

     //PARA EL BOTON DE PREV
     if (num_init_G <= 2){
        $(".prev_btn_obra").hide();
    }

    $(".btn_en_documentos").addClass("btn_en_documentos_on");
    $(".btn_en_xochipili").removeClass("btn_en_xochipili_on");
    $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on");
});




}); // =============== onDocumetReady
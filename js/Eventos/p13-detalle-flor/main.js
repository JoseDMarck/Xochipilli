$( document ).ready(function() {
    

/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */

HomeURL = '../../index.php';
pos_xo_init = null;
pos_na_init = null;
pos_do_init = null;
pos_xo_end = null;
pos_na_end = null;
pos_do_end = null;
on_init = null;
on_end = null;




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
current_Gal = urlParams["current_Gal"];
pos_xo_init = urlParams["pos_xo_init"];
pos_na_init = urlParams["pos_na_init"];
pos_do_init = urlParams["pos_do_init"];


id_flor = urlParams["idflor"];
id_num_xo = urlParams["num_xo"];
id_num_na = urlParams["num_na"];
id_num_do = urlParams["num_do"];
id_total_g = urlParams["total_g"]

//Valores inicales galeria;



if(id_num_xo != 0){
var num_total_G = Number(id_num_xo);
var num_init_G = 0;
} 
else{
    var num_total_G = Number(id_num_na);
    var num_init_G = 0;

    $(".btn_en_xochipili").hide();

    $(document).ready(function(){
        //$( ".btn_en_naturaleza").trigger("click");
    });
}

console.log("num_total_G: ", num_total_G);



//PARA LA POSICIÓN DE LAS IMAGENES EN LAS GALERIAS 


//Flor numero 1
if(id_flor == 0 ){

    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 1;
    num_init_G_na = pos_na_init;
    pos_na_end = 3;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 4;
    num_init_G_do = pos_do_init;
    pos_do_end = 6;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_1_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_1_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_1_NAH");
    }

}

//Flor numero 2
if(id_flor == 1 ){
    /*pos_xo_init = 0;
    pos_xo_end = 4;

    pos_na_init = 5;
    pos_na_end = 9;

    pos_do_init = 10;
    pos_do_end = 17*/

    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 4;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 5;
    num_init_G_na = pos_na_init;
    pos_na_end = 9;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 10;
    num_init_G_do = pos_do_init;
    pos_do_end = 17;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_2_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_2_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_2_NAH");
    }
}

//Flor numero 3
if(id_flor == 2 ){
    
    /*pos_xo_init = 0;
    pos_xo_end = 2;

    pos_na_init = 3;
    pos_na_end = 4;

    pos_do_init = 5;
    pos_do_end = 7;*/


    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 2;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 3;
    num_init_G_na = pos_na_init;
    pos_na_end = 4;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 5;
    num_init_G_do = pos_do_init;
    pos_do_end = 7;

    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_3_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_3_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_3_NAH");
    }
}

//Flor numero 4
if(id_flor == 3 ){
    /*pos_xo_init = 0;
    pos_xo_end = 0;

    pos_na_init = 1;
    pos_na_end = 1;

    pos_do_init = 2;
    pos_do_end = 9;*/


    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 1;
    num_init_G_na = pos_na_init;
    pos_na_end = 1;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 2;
    num_init_G_do = pos_do_init;
    pos_do_end = 9;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_4_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_4_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_4_NAH");
    }
}

//Flor numero 5
if(id_flor == 4 ){
    /*pos_xo_init = 0;
    pos_xo_end = 7;

    pos_na_init = 8;
    pos_na_end = 12;

    pos_do_init = 13;
    pos_do_end = 23;*/

    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 7;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 8;
    num_init_G_na = pos_na_init;
    pos_na_end = 12;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 13;
    num_init_G_do = pos_do_init;
    pos_do_end = 23;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_5_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_5_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_5_NAH");
    }
}

//Flor numero 6
if(id_flor == 5 ){

    /*pos_na_init = 0;
    pos_na_end = 0;

    pos_do_init = 1;
    pos_do_end = 5;*/


   
    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 0;
    num_init_G_na = pos_na_init;
    pos_na_end = 0;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 1;
    num_init_G_do = pos_do_init;
    pos_do_end = 5;

    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_6_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_6_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_6_NAH");
    }
}

//Flor numero 7
if(id_flor == 6 ){


    /*pos_na_init = 0;
    pos_na_end = 1;

    pos_do_init = 2;
    pos_do_end = 7;*/


    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 0;
    num_init_G_na = pos_na_init;
    pos_na_end = 1;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 2;
    num_init_G_do = pos_do_init;
    pos_do_end = 7;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_7_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_7_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_7_NAH");
    }
}

//Flor numero 8
if(id_flor == 7 ){


    /*pos_na_init = 0;
    pos_na_end = 2;

    pos_do_init = 3;
    pos_do_end = 6;*/



    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 0;
    num_init_G_na = pos_na_init;
    pos_na_end = 2;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 3;
    num_init_G_do = pos_do_init;
    pos_do_end = 6;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_8_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_8_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_8_NAH");
    }
}

//Flor numero 9
if(id_flor == 8 ){

    /*pos_na_init = 0;
    pos_na_end = 1;

    pos_do_init = 2;
    pos_do_end = 11;*/


    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 0;
    num_init_G_na = pos_na_init;
    pos_na_end = 1;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 2;
    num_init_G_do = pos_do_init;
    pos_do_end = 11;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_9_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_9_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_9_NAH");
    }

}

//Flor numero 10
if(id_flor == 9 ){


    /*pos_na_init = 0;
    pos_na_end = 0;

    pos_do_init = 1;
    pos_do_end = 5;*/


    pos_xo_init = Number( urlParams["pos_xo_init"] );
    pos_xo_start = 0;
    num_init_G_xo = pos_xo_init;
    pos_xo_end = 0;

    pos_na_init = Number( urlParams["pos_na_init"] );
    pos_na_start = 0;
    num_init_G_na = pos_na_init;
    pos_na_end = 0;

    pos_do_init = Number( urlParams["pos_do_init"] );
    pos_do_start = 1;
    num_init_G_do = pos_do_init;
    pos_do_end = 5;


    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_10_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_10_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_10_NAH");
    }
}


//Flor numero 11
if(id_flor == 10 ){


    pos_na_init = 0;
    pos_na_end = 1;

    pos_do_init = 2;
    pos_do_end = 5;

    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_11_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_11_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_11_NAH");
    }
}


//Flor numero 12
if(id_flor == 11 ){


    pos_na_init = 0;
    pos_na_end = 0;

    pos_do_init = 1;
    pos_do_end = 2;

    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_12_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_12_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_12_NAH");
    }
}

//Flor numero 13
if(id_flor == 12 ){

    pos_na_init = 0;
    pos_na_end = 1;

    pos_do_init = 2;
    pos_do_end = 4;

    if(LanguageON == "ESP"){
        $(".ficha").addClass("ficha_13_ESP");
    }

    if(LanguageON == "ENG"){
        $(".ficha").addClass("ficha_13_ENG");
    }

    if(LanguageON == "NAH"){
        $(".ficha").addClass("ficha_13_NAH");
    }
}



/* CURRENT GALE 2 */
if(current_Gal == 1){
    
        $(document).ready(function(){
            $( ".btn_en_xochipili" ).trigger( "click" );
        });
    
} // CURRENT GAL 2


/* CURRENT GALE 2 */
if(current_Gal == 2){

    $(document).ready(function(){
        $( ".btn_en_naturaleza" ).trigger( "click" );
    });

} // CURRENT GAL 2


if(current_Gal == 3){
        $(document).ready(function(){
            $( ".btn_en_documentos" ).trigger( "click" );
        });
} // CURRENT GAL 2




on_init = pos_xo_init;
on_end = pos_xo_end;

console.log("")


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
          
        

        if(urlParams["back"] != null ){
            location.reload();
            window.location.href = '../../secciones/p13-detalle-flor/index.php'+'?idioma='+'ESP'+
            '&idflor='+ id_flor +
            '&num_xo='+ id_num_xo +
            '&num_na='+ id_num_na +
            '&num_do='+ id_num_do +
            '&total_g=' + id_total_g+
            '&back=' + "florido"+
            '&current_Gal='+current_Gal+
            '&pos_xo_init='+num_init_G_xo+
            '&pos_na_init='+num_init_G_na+
            '&pos_do_init='+num_init_G_do+
            '&helpHomeStatus='+helpHomeStatus;         

        
        } else{
            
            location.reload();
            window.location.href = '../../secciones/p13-detalle-flor/index.php'+'?idioma='+'ESP'+
            '&idflor='+ id_flor +
            '&num_xo='+ id_num_xo +
            '&num_na='+ id_num_na +
            '&num_do='+ id_num_do +
            '&total_g=' + id_total_g+
            '&current_Gal='+current_Gal+
            '&pos_xo_init='+num_init_G_xo+
            '&pos_na_init='+num_init_G_na+
            '&pos_do_init='+num_init_G_do+
            '&helpHomeStatus='+helpHomeStatus;              

        }


    };
    
    
    var Change_idioma_ENG = function () {
       
        
        if(urlParams["back"] != null ){
            location.reload();
            window.location.href = '../../secciones/p13-detalle-flor/index.php'+'?idioma='+'ENG'+
            '&idflor='+ id_flor +
            '&num_xo='+ id_num_xo +
            '&num_na='+ id_num_na +
            '&num_do='+ id_num_do +
            '&total_g=' + id_total_g+    
            '&back=' + "florido"+
            '&current_Gal='+current_Gal+
            '&pos_xo_init='+num_init_G_xo+
            '&pos_na_init='+num_init_G_na+
            '&pos_do_init='+num_init_G_do+
            '&helpHomeStatus='+helpHomeStatus;     

        
        } else{
            
            location.reload();
            window.location.href = '../../secciones/p13-detalle-flor/index.php'+'?idioma='+'ENG'+
            '&idflor='+ id_flor +
            '&num_xo='+ id_num_xo +
            '&num_na='+ id_num_na +
            '&num_do='+ id_num_do +
            '&total_g=' + id_total_g+
            '&current_Gal='+current_Gal+
            '&pos_xo_init='+num_init_G_xo+
            '&pos_na_init='+num_init_G_na+
            '&pos_do_init='+num_init_G_do+
            '&helpHomeStatus='+helpHomeStatus;   
        }



    };
    
    var Change_idioma_NAH = function () {
        
         
        if(urlParams["back"] != null ){
            location.reload(); 
            window.location.href = '../../secciones/p13-detalle-flor/index.php'+'?idioma='+'NAH'+
            '&idflor='+ id_flor +
            '&num_xo='+ id_num_xo +
            '&num_na='+ id_num_na +
            '&num_do='+ id_num_do +
            '&total_g=' + id_total_g+ 
            '&back=' + "florido"+
            '&current_Gal='+current_Gal+
            '&pos_xo_init='+num_init_G_xo+
            '&pos_na_init='+num_init_G_na+
            '&pos_do_init='+num_init_G_do+
            '&helpHomeStatus='+helpHomeStatus;        

        
        } else{
            
            location.reload(); 
            window.location.href = '../../secciones/p13-detalle-flor/index.php'+'?idioma='+'NAH'+
            '&idflor='+ id_flor +
            '&num_xo='+ id_num_xo +
            '&num_na='+ id_num_na +
            '&num_do='+ id_num_do +
            '&total_g=' + id_total_g+
            '&current_Gal='+current_Gal+
            '&pos_xo_init='+num_init_G_xo+
            '&pos_na_init='+num_init_G_na+
            '&pos_do_init='+num_init_G_do+
            '&helpHomeStatus='+helpHomeStatus;   
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
    '&helpHomeStatus='+helpHomeStatus;
};


var GotoHome = function () {
    window.location.href = '../../secciones/p02-home/index.php' +'?idioma='+LanguageON+
    '&helpHomeStatus='+helpHomeStatus;
};

var GotoBack = function () {
    

    if(urlParams["back"] != null ){
        window.location.href = '../../secciones/p12-gabinete-botanico/index.php' +'?idioma='+LanguageON+'&back=' + "florido"+
        '&helpHomeStatus='+helpHomeStatus; 
        
    } else{
        window.location.href = '../../secciones/p12-gabinete-botanico/index.php' +'?idioma='+LanguageON+
        '&helpHomeStatus='+helpHomeStatus;
    }


    
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
     /*TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:1920, height:1080, alpha: 1, x:0, y:0,   ease: Circ.easeOut, onComplete: 
        close = function(){

            CloseAyudaOnInitEvent = setTimeout(function(){ 
                TweenMax.to(".ayuda-image", 0.8, {alpha: 1, width:0, height:0, alpha: 0, x:275, y: -20, ease: Circ.easeOut})
            }, 8000);


          
            
        }   
    }) */

    $(".ayuda-image").click(function() {
        TweenMax.to(".ayuda-image", 0.8  , {alpha: 1, width:0, height:0, x:275, y: -20,  ease: Circ.easeOut});    
        //clearTimeout(CloseAyudaOnInitEvent); // Limpiamos el timer de 5 segundos
    });


};


InitScreen();


// EVENTOS AYUDA ===================
$(".btn_ayuda_General").click(function() {
    TweenMax.to(".ayuda-image", 0.8, { alpha: 1, width:1920, height:1080, x:0, y:0, ease: Circ.easeOut});    
});


// EVENTOS GALLERIA ===================
//<div class="obra_img_G_1 gal_img_G_1 gal_img_G"></div>

for (i = 0; i < id_total_g; i++) { 
    console.log("i-", i);
    $( ".ContendorGaleria" ).append('<div class="flor_'+id_flor+'_img_G_'+i+'_'+LanguageON+' gal_img_G_'+i+' gal_img_G"></div>');
}


if (id_num_xo < 2){
    $(".next_btn_obra").hide();
} else{
    $(".next_btn_obra").show();

}
 






//CHECK CURRENT GAL 
// EN XOCHIPILLI




//$(".btn_en_xochipili").addClass("btn_en_xochipili_on"); // on init 



$(".btn_en_xochipili").click(function() {
    

    $(".next_btn_obra_na").hide();
    $(".prev_btn_obra_na").hide();

    $(".next_btn_obra_do").hide();
    $(".prev_btn_obra_do").hide();


    current_Gal = 1;
    //num_init_G = pos_na_init;    
    num_total_G = Number(id_num_xo);
    on_init = pos_xo_init;
    on_end = pos_xo_end;
 


    $(".gal_img_G").hide();
    $(".gal_img_G_"+ num_init_G_xo).fadeIn();
    
    if (num_init_G_xo == 1){
        $(".next_btn_obra_xo").hide();
    }
    else{
        $(".next_btn_obra_xo").show();
    }

    //PARA EL BOTON DE PREV
    if(num_init_G_xo > pos_xo_start ){
        $(".prev_btn_obra_xo").show();
    }else{
        $(".prev_btn_obra_xo").hide();
    }

    if(num_init_G_xo < pos_xo_end){
        $(".next_btn_obra_xo").show();
    }else{
        $(".next_btn_obra_xo").hide();
    }



    if(LanguageON == "ESP"){
        $(".btn_en_xochipili").addClass("btn_en_xochipili_on");
        $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on");
        $(".btn_en_documentos").removeClass("btn_en_documentos_on");    
    }

    if(LanguageON == "ENG"){
        $(".btn_en_xochipili").addClass("btn_en_xochipili_on_ENG");
        $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on_ENG");
        $(".btn_en_documentos").removeClass("btn_en_documentos_on_ENG");    
    }

    if(LanguageON == "NAH"){
        $(".btn_en_xochipili").addClass("btn_en_xochipili_on_NAH");
        $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on_NAH");
        $(".btn_en_documentos").removeClass("btn_en_documentos_on_NAH");    
    }
       

});



$(".next_btn_obra_xo").click(function() {
    
        if (num_init_G_xo  < on_end  ){
            $(".gal_img_G").hide();
            num_init_G_xo = num_init_G_xo + 1;
            console.log("num_init_G_xo", num_init_G_xo);
            console.log("on_end", on_end);

            console.log("num_total_G", num_total_G);
            $(".gal_img_G_"+num_init_G_xo).fadeIn();
        }
         
        if (num_init_G_xo == on_end ){
            $(".next_btn_obra_xo").hide();
        }
     
         if (num_init_G_xo > 0){
             $(".prev_btn_obra_xo").show();
         }
    
    
    });
    
    
    $(".prev_btn_obra_xo").click(function() {
    
            if (num_init_G_xo > pos_xo_start ){
                $(".gal_img_G").hide();
                $(".gal_txt_G").hide();
        
                num_init_G_xo = num_init_G_xo - 1;
                console.log("num_init_G_", num_init_G);
                $(".gal_img_G_"+num_init_G_xo).fadeIn();
        
                $(".next_btn_obra_xo").show();
            }
    
            console.log("num_init_G", num_init_G);
            console.log("num_total_G", num_total_G);
    
             if (num_init_G_xo == pos_xo_start){
                $(".prev_btn_obra_xo").hide();
             }
             
    });



// EN NATURALEZA
$(".btn_en_naturaleza").click(function() {

    $(".next_btn_obra_do").hide();
    $(".prev_btn_obra_do").hide();

    $(".next_btn_obra_xo").hide();
    $(".prev_btn_obra_xo").hide();

    current_Gal = 2;
    //num_init_G = pos_na_init;    
    num_total_G = Number(id_num_na);
    on_init = pos_na_init;
    on_end = pos_na_end;
 


    $(".gal_img_G").hide();
    $(".gal_img_G_"+ num_init_G_na).fadeIn();
    
    if (num_init_G_na == 1){
        $(".next_btn_obra_na").hide();
    }
    else{
        $(".next_btn_obra_na").show();
    }

    //PARA EL BOTON DE PREV
    if(num_init_G_na > pos_na_start ){
        $(".prev_btn_obra_na").show();
    }else{
        $(".prev_btn_obra_na").hide();
    }

    if(num_init_G_na < pos_na_end){
        $(".next_btn_obra_na").show();
    }else{
        $(".next_btn_obra_na").hide();
    }



    if(LanguageON == "ESP"){
        $(".btn_en_naturaleza").addClass("btn_en_naturaleza_on");
        $(".btn_en_xochipili").removeClass("btn_en_xochipili_on");    
        $(".btn_en_documentos").removeClass("btn_en_documentos_on");   
    }

    if(LanguageON == "ENG"){
        $(".btn_en_naturaleza").addClass("btn_en_naturaleza_on_ENG");

        $(".btn_en_xochipili").addClass("btn_en_xochipili_ENG");  
        $(".btn_en_xochipili").removeClass("btn_en_xochipili_on_ENG"); 
        
        
        $(".btn_en_documentos").addClass("btn_en_documentos_ENG");     
        $(".btn_en_documentos").removeClass("btn_en_documentos_on_ENG");     
    }

    if(LanguageON == "NAH"){
        $(".btn_en_naturaleza").addClass("btn_en_naturaleza_on_NAH");

        $(".btn_en_xochipili").addClass("btn_en_xochipili_NAH");  
        $(".btn_en_xochipili").removeClass("btn_en_xochipili_on_NAH"); 
        
        
        $(".btn_en_documentos").addClass("btn_en_documentos_NAH");     
        $(".btn_en_documentos").removeClass("btn_en_documentos_on_NAH");     
    }

});


$(".next_btn_obra_na").click(function() {
    
        if (num_init_G_na  < on_end  ){
            $(".gal_img_G").hide();
            num_init_G_na = num_init_G_na + 1;
            console.log("num_init_G_na", num_init_G_na);
            console.log("on_end", on_end);

            console.log("num_total_G", num_total_G);
            $(".gal_img_G_"+num_init_G_na).fadeIn();
        }
         
        if (num_init_G_na == on_end ){
            $(".next_btn_obra_na").hide();
        }
     
         if (num_init_G_na > 0){
             $(".prev_btn_obra_na").show();
         }
    
    
    });
    
    
    $(".prev_btn_obra_na").click(function() {
    
            if (num_init_G_na > pos_na_start ){
                $(".gal_img_G").hide();
                $(".gal_txt_G").hide();
        
                num_init_G_na = num_init_G_na - 1;
                console.log("num_init_G_", num_init_G);
                $(".gal_img_G_"+num_init_G_na).fadeIn();
        
                $(".next_btn_obra_na").show();
            }
    
            console.log("num_init_G", num_init_G);
            console.log("num_total_G", num_total_G);
    
             if (num_init_G_na == pos_na_start){
                $(".prev_btn_obra_na").hide();
             }
             
        });
     
    
    
    
    // BOTONES SECCIONS GALERIA 



// EN DOCUMENTOSS
$(".btn_en_documentos").click(function() {


    $(".next_btn_obra_na").hide();
    $(".prev_btn_obra_na").hide();

    $(".next_btn_obra_xo").hide();
    $(".prev_btn_obra_xo").hide();

    current_Gal = 3;

   //num_init_G = pos_na_init;    
   num_total_G = Number(id_num_do);
   on_init = pos_do_init;
   on_end = pos_do_end;

   $(".gal_img_G").hide();
   $(".gal_img_G_"+ num_init_G_do).fadeIn();


   
   if (num_init_G_do == 1){
       $(".next_btn_obra_do").hide();
   }
   else{
       $(".next_btn_obra_do").fadeIn();
   }

   //PARA EL BOTON DE PREV
   if(num_init_G_do > pos_do_start ){
       $(".prev_btn_obra_do").show();
   }else{
       $(".prev_btn_obra_do").hide();
   }

   if(num_init_G_do < pos_do_end){
       $(".next_btn_obra_do").show();
   }else{
       $(".next_btn_obra_do").hide();
   }


    if(LanguageON == "ESP"){
        $(".btn_en_documentos").addClass("btn_en_documentos_on");
        $(".btn_en_xochipili").removeClass("btn_en_xochipili_on");
        $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on"); 
    }

    if(LanguageON == "ENG"){
        $(".btn_en_documentos").addClass("btn_en_documentos_on_ENG");
        
        
        $(".btn_en_xochipili").addClass("btn_en_xochipili_ENG");
        $(".btn_en_xochipili").removeClass("btn_en_xochipili_on_ENG");
        
        
        $(".btn_en_naturaleza").addClass("btn_en_naturaleza_ENG");
        $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on_ENG");
    }


    if(LanguageON == "NAH"){
        $(".btn_en_documentos").addClass("btn_en_documentos_on_NAH");
        
        
        $(".btn_en_xochipili").removeClass("btn_en_xochipili_on_NAH");
        $(".btn_en_xochipili").addClass("btn_en_xochipili_NAH");
        
        
        $(".btn_en_naturaleza").addClass("btn_en_naturaleza_NAH");
        $(".btn_en_naturaleza").removeClass("btn_en_naturaleza_on_NAH");
    }

});


$(".next_btn_obra_do").click(function() {
    
        if (num_init_G_do  < on_end  ){
            $(".gal_img_G").hide();
            num_init_G_do = num_init_G_do + 1;
            console.log("num_init_G_na", num_init_G_do);
            console.log("on_end", on_end);

            console.log("num_total_G", num_total_G);
            $(".gal_img_G_"+num_init_G_do).fadeIn();
        }
         
        if (num_init_G_do == on_end ){
            $(".next_btn_obra_do").hide();
        }
     
         if (num_init_G_do > 0){
             $(".prev_btn_obra_do").show();
         }
    
    
    });
    
    
    $(".prev_btn_obra_do").click(function() {
    
            if (num_init_G_do > pos_do_start ){
                $(".gal_img_G").hide();
                $(".gal_txt_G").hide();
        
                num_init_G_do = num_init_G_do - 1;
                console.log("num_init_G_", num_init_G);
                $(".gal_img_G_"+num_init_G_do).fadeIn();
        
                $(".next_btn_obra_do").show();
            }
    
            console.log("num_init_G", num_init_G);
            console.log("num_total_G", num_total_G);
    
             if (num_init_G_do == pos_do_start){
                $(".prev_btn_obra_do").hide();
             }
             
        });
     




}); // =============== onDocumetReady
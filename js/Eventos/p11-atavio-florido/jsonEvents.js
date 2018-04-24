$( document ).ready(function() {
   
  
if (LanguageON == "ESP"){


// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_atavios_floridos_ESP.descripcion; 


 
}


 
if (LanguageON == "ENG"){

// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_atavios_floridos_ENG.descripcion; 




$(".btn_otrasPres").addClass("btn_otrasPres_ENG");
$(".btn_conservacion").addClass("btn_conservacion_ENG");
$(".btn_glosario").addClass("btn_glosario_ENG");
$(".btn_referencias").addClass("btn_referencias_ENG");
$(".btn_creditos").addClass("btn_creditos_ENG");


$(".ayuda-image").addClass("ayuda-image-florido_ENG");

$(".btn_ayuda_General").addClass("btn_ayuda_General_ENG");
$(".btn_back").addClass("btn_back_ENG");
$(".btn_inicio_General").addClass("btn_inicio_General_ENG");

$(".btn_close_HP").addClass("btn_close_HP_ENG");

$(".titulo_Atavio_Florido").addClass("titulo_Atavio_Florido_ENG");

$(".btn_go_to_gabinete").addClass("btn_go_to_gabinete_ENG");


}

if (LanguageON == "NAH"){

    // TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_NAH.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_atavios_floridos_NAH.descripcion; 

    $(".btn_otrasPres").addClass("btn_otrasPres_NAH");
    $(".btn_conservacion").addClass("btn_conservacion_NAH");
    $(".btn_glosario").addClass("btn_glosario_NAH");
    $(".btn_referencias").addClass("btn_referencias_NAH");
    $(".btn_creditos").addClass("btn_creditos_NAH");

    $(".ayuda-image").addClass("ayuda-image-florido_NAH");
    $(".btn_ayuda_General").addClass("btn_ayuda_General_NAH");
    $(".btn_back").addClass("btn_back_NAH");
    $(".btn_inicio_General").addClass("btn_inicio_General_NAH");

    $(".btn_close_HP").addClass("btn_close_HP_NAH");

    $(".titulo_Atavio_Florido").addClass("titulo_Atavio_Florido_NAH");
    $(".btn_go_to_gabinete").addClass("btn_go_to_gabinete_NAH");



 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
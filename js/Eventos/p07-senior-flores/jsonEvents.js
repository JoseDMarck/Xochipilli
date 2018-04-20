$( document ).ready(function() {
   
  
if (LanguageON == "ESP"){
    document.getElementById("descripcion").innerHTML =  obj_senior_flores_ESP.descripcion; 
}


 
if (LanguageON == "ENG"){

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_senior_flores_ENG.descripcion; 


$(".titulo").addClass("titulo_ENG");

$(".ayuda-image").addClass("ayuda-image_ENG");
$(".btn_ayuda_General").addClass("btn_ayuda_General_ENG");
$(".btn_back").addClass("btn_back_ENG");
$(".btn_inicio_General").addClass("btn_inicio_General_ENG");



$(".btn_otrasPres").addClass("btn_otrasPres_ENG");
$(".btn_conservacion").addClass("btn_conservacion_ENG");
$(".btn_glosario").addClass("btn_glosario_ENG");
$(".btn_referencias").addClass("btn_referencias_ENG");
$(".btn_creditos").addClass("btn_creditos_ENG");


$(".ayuda-image").addClass("ayuda-image_ENG");
$(".btn_ayuda_General").addClass("btn_ayuda_General_ENG");
$(".btn_back").addClass("btn_back_ENG");
$(".btn_inicio_General").addClass("btn_inicio_General_ENG");

$(".btn_close_HP").addClass("btn_close_HP_ENG");
 
}

if (LanguageON == "NAH"){

    $(".titulo").addClass("titulo_NAH");

    $(".btn_otrasPres").addClass("btn_otrasPres_NAH");
    $(".btn_conservacion").addClass("btn_conservacion_NAH");
    $(".btn_glosario").addClass("btn_glosario_NAH");
    $(".btn_referencias").addClass("btn_referencias_NAH");
    $(".btn_creditos").addClass("btn_creditos_NAH");

    $(".ayuda-image").addClass("ayuda-image_NAH");
    $(".btn_ayuda_General").addClass("btn_ayuda_General_NAH");
    $(".btn_back").addClass("btn_back_NAH");
    $(".btn_inicio_General").addClass("btn_inicio_General_NAH");

    $(".btn_close_HP").addClass("btn_close_HP_NAH");




// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_senior_flores_NAH.descripcion; 

 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
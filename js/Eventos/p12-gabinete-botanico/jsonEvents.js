$( document ).ready(function() {
   
  
if (LanguageON == "ESP"){


// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_gabinete_BO_ESP.descripcion; 



}


 
if (LanguageON == "ENG"){

// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_gabinete_BO_ENG.descripcion; 
$(".btn_otrasPres").addClass("btn_otrasPres_ENG");
$(".btn_conservacion").addClass("btn_conservacion_ENG");
$(".btn_glosario").addClass("btn_glosario_ENG");
$(".btn_referencias").addClass("btn_referencias_ENG");
$(".btn_creditos").addClass("btn_creditos_ENG");



$(".btn_ayuda_General").addClass("btn_ayuda_General_ENG");
$(".btn_back").addClass("btn_back_ENG");
$(".btn_inicio_General").addClass("btn_inicio_General_ENG");


$(".titulo").addClass("titulo_ENG");
$(".ayuda-image").addClass("ayuda-image_ENG");

$(".imagen_1_es").addClass("imagen_1_en");
$(".imagen_2_es").addClass("imagen_2_en");
$(".imagen_3_es").addClass("imagen_3_en");
$(".imagen_4_es").addClass("imagen_4_en");
$(".imagen_5_es").addClass("imagen_5_en");
$(".imagen_6_es").addClass("imagen_6_en");
$(".imagen_7_es").addClass("imagen_7_en");
$(".imagen_8_es").addClass("imagen_8_en");
$(".imagen_9_es").addClass("imagen_9_en");
$(".imagen_10_es").addClass("imagen_10_en");
$(".imagen_11_es").addClass("imagen_11_en");
$(".imagen_12_es").addClass("imagen_12_en");
$(".imagen_13_es").addClass("imagen_13_en");

}



if (LanguageON == "NAH"){

    // TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_NAH.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_gabinete_BO_NAH.descripcion; 
$(".btn_otrasPres").addClass("btn_otrasPres_NAH");
$(".btn_conservacion").addClass("btn_conservacion_NAH");
$(".btn_glosario").addClass("btn_glosario_NAH");
$(".btn_referencias").addClass("btn_referencias_NAH");
$(".btn_creditos").addClass("btn_creditos_NAH");



$(".btn_ayuda_General").addClass("btn_ayuda_General_NAH");
$(".btn_back").addClass("btn_back_NAH");
$(".btn_inicio_General").addClass("btn_inicio_General_NAH");

$(".titulo").addClass("titulo_NAH");
$(".ayuda-image").addClass("ayuda-image_NAH");


 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
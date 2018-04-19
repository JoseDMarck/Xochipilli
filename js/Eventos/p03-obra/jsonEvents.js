$( document ).ready(function() {
   

 // IDIOMA ESPAÑOL 
 

if (LanguageON == "ESP"){

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ESP.descripcion; 

// Textos Galerias
/*document.getElementById("gal_txt_1").innerHTML = obj_ESP.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ESP.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ESP.galeria[0].texto_3; 
document.getElementById("gal_txt_4").innerHTML = obj_ESP.galeria[0].texto_4; */



}


 // IDIOMA INGLÉS 
 
if (LanguageON == "ENG"){


    $(".ayuda-image").addClass("ayuda-image_ENG");
    $(".btn_ayuda_General").addClass("btn_ayuda_General_ENG");
    $(".btn_back").addClass("btn_back_ENG");
    $(".btn_inicio_General").addClass("btn_inicio_General_ENG");
    $(".titulo").addClass("titulo_ENG");
    
    $(".obra_img_G_1").addClass("obra_img_G_1_ENG");


    $(".btn_otrasPres").addClass("btn_otrasPres_ENG");
    $(".btn_conservacion").addClass("btn_conservacion_ENG");
    $(".btn_glosario").addClass("btn_glosario_ENG");
    $(".btn_referencias").addClass("btn_referencias_ENG");
    $(".btn_creditos").addClass("btn_creditos_ENG");


// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ENG.descripcion; 

// Textos Galerias
/*document.getElementById("gal_txt_1").innerHTML = obj_ENG.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ENG.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ENG.galeria[0].texto_3; 
document.getElementById("gal_txt_4").innerHTML = obj_ENG.galeria[0].texto_4; */





}


// IDIOMA NAH
if (LanguageON == "NAH"){

    $(".ayuda-image").addClass("ayuda-image_NAH");
    $(".btn_ayuda_General").addClass("btn_ayuda_General_NAH");
    $(".btn_back").addClass("btn_back_NAH");
    $(".btn_inicio_General").addClass("btn_inicio_General_NAH");
    $(".titulo").addClass("titulo_NAH");


    $(".obra_img_G_1").addClass("obra_img_G_1_NAH");

    $(".btn_otrasPres").addClass("btn_otrasPres_NAH");    
    $(".btn_conservacion").addClass("btn_conservacion_NAH");
    $(".btn_glosario").addClass("btn_glosario_NAH");
    $(".btn_referencias").addClass("btn_referencias_NAH");
    $(".btn_creditos").addClass("btn_creditos_NAH");

    
// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_NAH.descripcion; 

// Textos Galerias
/*document.getElementById("gal_txt_1").innerHTML = obj_NAH.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_NAH.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_NAH.galeria[0].texto_3; 
document.getElementById("gal_txt_4").innerHTML = obj_NAH.galeria[0].texto_4; */




} // END NAH




}); // =============== onDocumetReady
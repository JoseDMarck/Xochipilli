$( document ).ready(function() {
   

 // IDIOMA ESPAÑOL 
 

if (LanguageON == "ESP"){


// TITULO OBRA
document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ESP.descripcion; 

// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_ESP.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ESP.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ESP.galeria[0].texto_3; 
document.getElementById("btn_otrasPres").innerHTML = obj_ESP.btn_otrasPres;


}


 // IDIOMA INGLÉS 
 
if (LanguageON == "ENG"){

// TITULO OBRA
document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ENG.descripcion; 

// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_ENG.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ENG.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ENG.galeria[0].texto_3; 
document.getElementById("btn_otrasPres").innerHTML = obj_ENG.btn_otrasPres;


}


// IDIOMA NAH
if (LanguageON == "NAH"){

    // TITULO OBRA
document.getElementById("titulo").innerHTML = obj_NAH.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_NAH.descripcion; 

// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_NAH.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_NAH.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_NAH.galeria[0].texto_3; 
document.getElementById("btn_otrasPres").innerHTML = obj_NAH.btn_otrasPres;


} // END NAH




}); // =============== onDocumetReady
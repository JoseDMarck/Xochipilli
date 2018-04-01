$( document ).ready(function() {
   

 // IDIOMA ESPAÑOL 
 

if (LanguageON == "ESP"){

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ESP.descripcion; 

// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_ESP.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ESP.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ESP.galeria[0].texto_3; 

}


 // IDIOMA INGLÉS 
 
if (LanguageON == "ENG"){


// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ENG.descripcion; 

// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_ENG.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ENG.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ENG.galeria[0].texto_3; 


}


// IDIOMA NAH
if (LanguageON == "NAH"){


// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_NAH.descripcion; 

// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_NAH.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_NAH.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_NAH.galeria[0].texto_3; 


} // END NAH




}); // =============== onDocumetReady
$( document ).ready(function() {
    
// TITULO OBRA
document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ESP.descripcion; 


// Textos Galerias
document.getElementById("gal_txt_1").innerHTML = obj_ESP.galeria[0].texto_1; 
document.getElementById("gal_txt_2").innerHTML = obj_ESP.galeria[0].texto_2; 
document.getElementById("gal_txt_3").innerHTML = obj_ESP.galeria[0].texto_3; 


}); // =============== onDocumetReady
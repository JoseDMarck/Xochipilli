$( document ).ready(function() {
   

 // IDIOMA ESPAÑOL 
 

if (LanguageON == "ESP"){


// TITULO OBRA
document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ESP.descripcion; 

// Titulos para los botones
document.getElementById("titulo_btn_1").innerHTML = obj_ESP.titulos_btns[0].figura_1; 
document.getElementById("titulo_btn_2").innerHTML = obj_ESP.titulos_btns[0].figura_2; 
document.getElementById("titulo_btn_3").innerHTML = obj_ESP.titulos_btns[0].figura_3; 
document.getElementById("titulo_btn_4").innerHTML = obj_ESP.titulos_btns[0].figura_4; 

 


}


 // IDIOMA INGLÉS 
 
if (LanguageON == "ENG"){

// TITULO OBRA
document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_ENG.descripcion; 

// Titulos para los botones
document.getElementById("titulo_btn_1").innerHTML = obj_ENG.titulos_btns[0].figura_1; 
document.getElementById("titulo_btn_2").innerHTML = obj_ENG.titulos_btns[0].figura_2; 
document.getElementById("titulo_btn_3").innerHTML = obj_ENG.titulos_btns[0].figura_3; 
document.getElementById("titulo_btn_4").innerHTML = obj_ENG.titulos_btns[0].figura_4; 
 


}


// IDIOMA NAH
if (LanguageON == "NAH"){

    // TITULO OBRA
document.getElementById("titulo").innerHTML = obj_NAH.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("descripcion").innerHTML = obj_NAH.descripcion; 

// Titulos para los botones
document.getElementById("titulo_btn_1").innerHTML = obj_NAH.titulos_btns[0].figura_1; 
document.getElementById("titulo_btn_2").innerHTML = obj_NAH.titulos_btns[0].figura_2; 
document.getElementById("titulo_btn_3").innerHTML = obj_NAH.titulos_btns[0].figura_3; 
document.getElementById("titulo_btn_4").innerHTML = obj_NAH.titulos_btns[0].figura_4; 
 
 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
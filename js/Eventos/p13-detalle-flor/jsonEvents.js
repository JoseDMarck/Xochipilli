$( document ).ready(function() {
   
  
if (LanguageON == "ESP"){


// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("titulo").innerHTML = obj_gabinete_ESP.flores[id_flor].titulo; 
document.getElementById("titulo_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].title; 
document.getElementById("texto_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].txt; 

document.getElementById("titulo_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].title; 
document.getElementById("texto_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].txt; 

document.getElementById("titulo_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].title; 
document.getElementById("texto_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].txt; 




 


// Titulos para los botones
/*document.getElementById("titulo_btn_1").innerHTML = obj_ESP.titulos_btns[0].figura_1; 
document.getElementById("titulo_btn_2").innerHTML = obj_ESP.titulos_btns[0].figura_2; 
document.getElementById("titulo_btn_3").innerHTML = obj_ESP.titulos_btns[0].figura_3; 
document.getElementById("titulo_btn_4").innerHTML = obj_ESP.titulos_btns[0].figura_4; */

// Para las descripciones
/*document.getElementById("gal_desc-1-1").innerHTML = obj_ESP.desc_gal[0].descripcion_1_1; 
document.getElementById("gal_desc-1-2").innerHTML = obj_ESP.desc_gal[0].descripcion_1_2; 
document.getElementById("gal_desc-1-3").innerHTML = obj_ESP.desc_gal[0].descripcion_1_3; 
document.getElementById("gal_desc-1-4").innerHTML = obj_ESP.desc_gal[0].descripcion_1_4; 

document.getElementById("gal_desc-2-1").innerHTML = obj_ESP.desc_gal[0].descripcion_2_1; 
document.getElementById("gal_desc-2-2").innerHTML = obj_ESP.desc_gal[0].descripcion_2_2; 
document.getElementById("gal_desc-2-3").innerHTML = obj_ESP.desc_gal[0].descripcion_2_3; 
document.getElementById("gal_desc-2-4").innerHTML = obj_ESP.desc_gal[0].descripcion_2_4; 

document.getElementById("gal_desc-3-1").innerHTML = obj_ESP.desc_gal[0].descripcion_3_1; 
document.getElementById("gal_desc-3-2").innerHTML = obj_ESP.desc_gal[0].descripcion_3_2; 
document.getElementById("gal_desc-3-3").innerHTML = obj_ESP.desc_gal[0].descripcion_3_3; 
document.getElementById("gal_desc-3-4").innerHTML = obj_ESP.desc_gal[0].descripcion_3_4; 

document.getElementById("gal_desc-4-1").innerHTML = obj_ESP.desc_gal[0].descripcion_4_1; 
document.getElementById("gal_desc-4-2").innerHTML = obj_ESP.desc_gal[0].descripcion_4_2; 
document.getElementById("gal_desc-4-3").innerHTML = obj_ESP.desc_gal[0].descripcion_4_3; 
document.getElementById("gal_desc-4-4").innerHTML = obj_ESP.desc_gal[0].descripcion_4_4; */

 
}


 
if (LanguageON == "ENG"){

// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("titulo").innerHTML = obj_gabinete_ENG.flores[id_flor].titulo; 

// Titulos para los botones
/*document.getElementById("titulo_btn_1").innerHTML = obj_ENG.titulos_btns[0].figura_1; 
document.getElementById("titulo_btn_2").innerHTML = obj_ENG.titulos_btns[0].figura_2; 
document.getElementById("titulo_btn_3").innerHTML = obj_ENG.titulos_btns[0].figura_3; 
document.getElementById("titulo_btn_4").innerHTML = obj_ENG.titulos_btns[0].figura_4; */

// Para las descripciones
/*document.getElementById("gal_desc-1-1").innerHTML = obj_ENG.desc_gal[0].descripcion_1_1; 
document.getElementById("gal_desc-1-2").innerHTML = obj_ENG.desc_gal[0].descripcion_1_2; 
document.getElementById("gal_desc-1-3").innerHTML = obj_ENG.desc_gal[0].descripcion_1_3; 
document.getElementById("gal_desc-1-4").innerHTML = obj_ENG.desc_gal[0].descripcion_1_4; 

document.getElementById("gal_desc-2-1").innerHTML = obj_ENG.desc_gal[0].descripcion_2_1; 
document.getElementById("gal_desc-2-2").innerHTML = obj_ENG.desc_gal[0].descripcion_2_2; 
document.getElementById("gal_desc-2-3").innerHTML = obj_ENG.desc_gal[0].descripcion_2_3; 
document.getElementById("gal_desc-2-4").innerHTML = obj_ENG.desc_gal[0].descripcion_2_4; 

document.getElementById("gal_desc-3-1").innerHTML = obj_ENG.desc_gal[0].descripcion_3_1; 
document.getElementById("gal_desc-3-2").innerHTML = obj_ENG.desc_gal[0].descripcion_3_2; 
document.getElementById("gal_desc-3-3").innerHTML = obj_ENG.desc_gal[0].descripcion_3_3; 
document.getElementById("gal_desc-3-4").innerHTML = obj_ENG.desc_gal[0].descripcion_3_4; 

document.getElementById("gal_desc-4-1").innerHTML = obj_ENG.desc_gal[0].descripcion_4_1; 
document.getElementById("gal_desc-4-2").innerHTML = obj_ENG.desc_gal[0].descripcion_4_2; 
document.getElementById("gal_desc-4-3").innerHTML = obj_ENG.desc_gal[0].descripcion_4_3; 
document.getElementById("gal_desc-4-4").innerHTML = obj_ENG.desc_gal[0].descripcion_4_4;  */


}

if (LanguageON == "NAH"){

    // TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_NAH.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("titulo").innerHTML = obj_gabinete_NAH.flores[id_flor].titulo; 

// Titulos para los botones
/*document.getElementById("titulo_btn_1").innerHTML = obj_NAH.titulos_btns[0].figura_1; 
document.getElementById("titulo_btn_2").innerHTML = obj_NAH.titulos_btns[0].figura_2; 
document.getElementById("titulo_btn_3").innerHTML = obj_NAH.titulos_btns[0].figura_3; 
document.getElementById("titulo_btn_4").innerHTML = obj_NAH.titulos_btns[0].figura_4; */


// Para las descripciones
/*document.getElementById("gal_desc-1-1").innerHTML = obj_NAH.desc_gal[0].descripcion_1_1; 
document.getElementById("gal_desc-1-2").innerHTML = obj_NAH.desc_gal[0].descripcion_1_2; 
document.getElementById("gal_desc-1-3").innerHTML = obj_NAH.desc_gal[0].descripcion_1_3; 
document.getElementById("gal_desc-1-4").innerHTML = obj_NAH.desc_gal[0].descripcion_1_4; 

document.getElementById("gal_desc-2-1").innerHTML = obj_NAH.desc_gal[0].descripcion_2_1; 
document.getElementById("gal_desc-2-2").innerHTML = obj_NAH.desc_gal[0].descripcion_2_2; 
document.getElementById("gal_desc-2-3").innerHTML = obj_NAH.desc_gal[0].descripcion_2_3; 
document.getElementById("gal_desc-2-4").innerHTML = obj_NAH.desc_gal[0].descripcion_2_4; 

document.getElementById("gal_desc-3-1").innerHTML = obj_NAH.desc_gal[0].descripcion_3_1; 
document.getElementById("gal_desc-3-2").innerHTML = obj_NAH.desc_gal[0].descripcion_3_2; 
document.getElementById("gal_desc-3-3").innerHTML = obj_NAH.desc_gal[0].descripcion_3_3; 
document.getElementById("gal_desc-3-4").innerHTML = obj_NAH.desc_gal[0].descripcion_3_4; 

document.getElementById("gal_desc-4-1").innerHTML = obj_NAH.desc_gal[0].descripcion_4_1; 
document.getElementById("gal_desc-4-2").innerHTML = obj_NAH.desc_gal[0].descripcion_4_2; 
document.getElementById("gal_desc-4-3").innerHTML = obj_NAH.desc_gal[0].descripcion_4_3; 
document.getElementById("gal_desc-4-4").innerHTML = obj_NAH.desc_gal[0].descripcion_4_4;*/ 
 
 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
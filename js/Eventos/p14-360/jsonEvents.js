$( document ).ready(function() {
   
  
if (LanguageON == "ESP"){


// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("titulo").innerHTML = obj_gabinete_ESP.flores[id_flor].titulo; 
document.getElementById("titulo_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].title; 
document.getElementById("texto_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].txt; 

document.getElementById("titulo_box_2").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].title; 
document.getElementById("texto_box_2").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].txt; 

document.getElementById("titulo_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].title; 
document.getElementById("texto_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].txt; 



 
}


 
if (LanguageON == "ENG"){

// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA


document.getElementById("titulo").innerHTML = obj_gabinete_ESP.flores[id_flor].titulo; 
document.getElementById("titulo_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].title; 
document.getElementById("texto_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].txt; 

document.getElementById("titulo_box_2").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].title; 
document.getElementById("texto_box_2").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].txt; 

document.getElementById("titulo_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].title; 
document.getElementById("texto_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].txt; 


}

if (LanguageON == "NAH"){

    document.getElementById("titulo").innerHTML = obj_gabinete_ESP.flores[id_flor].titulo; 
    document.getElementById("titulo_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].title; 
    document.getElementById("texto_box_1").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[0].txt; 
    
    document.getElementById("titulo_box_2").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].title; 
    document.getElementById("texto_box_2").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[1].txt; 
    
    document.getElementById("titulo_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].title; 
    document.getElementById("texto_box_3").innerHTML = obj_gabinete_ESP.flores[id_flor].descripcion[2].txt; 
 
 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
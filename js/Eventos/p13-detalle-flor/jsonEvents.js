$( document ).ready(function() {
   
  
if (LanguageON == "ESP"){


// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// DESCRIPCIÓN OBRA
document.getElementById("titulo_box_1").innerHTML = obj_gabinete_Deta_ESP .flores[id_flor].descripcion[0].title; 
document.getElementById("texto_box_1").innerHTML = obj_gabinete_Deta_ESP.flores[id_flor].descripcion[0].txt; 

document.getElementById("titulo_box_2").innerHTML = obj_gabinete_Deta_ESP .flores[id_flor].descripcion[1].title; 
document.getElementById("texto_box_2").innerHTML = obj_gabinete_Deta_ESP .flores[id_flor].descripcion[1].txt; 

document.getElementById("titulo_box_3").innerHTML = obj_gabinete_Deta_ESP .flores[id_flor].descripcion[2].title; 
document.getElementById("texto_box_3").innerHTML = obj_gabinete_Deta_ESP .flores[id_flor].descripcion[2].txt; 




 
}


 
if (LanguageON == "ENG"){

// TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// DESCRIPCIÓN OBRA


document.getElementById("titulo_box_1").innerHTML = obj_gabinete_Deta_ENG.flores[id_flor].descripcion[0].title; 
document.getElementById("texto_box_1").innerHTML = obj_gabinete_Deta_ENG.flores[id_flor].descripcion[0].txt; 

document.getElementById("titulo_box_2").innerHTML = obj_gabinete_Deta_ENG.flores[id_flor].descripcion[1].title; 
document.getElementById("texto_box_2").innerHTML = obj_gabinete_Deta_ENG.flores[id_flor].descripcion[1].txt; 

document.getElementById("titulo_box_3").innerHTML = obj_gabinete_Deta_ENG.flores[id_flor].descripcion[2].title; 
document.getElementById("texto_box_3").innerHTML = obj_gabinete_Deta_ENG.flores[id_flor].descripcion[2].txt; 

$(".ayuda-image").addClass("ayuda-image-ENG");



/* BOTONES */
$(".btn_en_xochipili").removeClass("btn_en_xochipili_on");
$(".btn_en_xochipili").addClass("btn_en_xochipili_on_ENG");


$(".btn_en_naturaleza").addClass("btn_en_naturaleza_ENG");
$(".btn_en_documentos").addClass("btn_en_documentos_ENG");
 


}

if (LanguageON == "NAH"){

    document.getElementById("titulo_box_1").innerHTML = obj_gabinete_Deta_NAH.flores[id_flor].descripcion[0].title; 
    document.getElementById("texto_box_1").innerHTML = obj_gabinete_Deta_NAH.flores[id_flor].descripcion[0].txt; 
    
    document.getElementById("titulo_box_2").innerHTML = obj_gabinete_Deta_NAH.flores[id_flor].descripcion[1].title; 
    document.getElementById("texto_box_2").innerHTML = obj_gabinete_Deta_NAH.flores[id_flor].descripcion[1].txt; 
    
    document.getElementById("titulo_box_3").innerHTML = obj_gabinete_Deta_NAH.flores[id_flor].descripcion[2].title; 
    document.getElementById("texto_box_3").innerHTML = obj_gabinete_Deta_NAH.flores[id_flor].descripcion[2].txt;
    
    $(".ayuda-image").addClass("ayuda-image-NAH");


    /* BOTONES */
    $(".btn_en_xochipili").removeClass("btn_en_xochipili_on");
    $(".btn_en_xochipili").addClass("btn_en_xochipili_on_NAH");


    $(".btn_en_naturaleza").addClass("btn_en_naturaleza_NAH");
    $(".btn_en_documentos").addClass("btn_en_documentos_NAH");
 
 


} // END NAH


TweenMax.to(".btn_hotspots-LG", 2, {alpha:0.2,  repeat:-1, yoyo:true});

}); // =============== onDocumetReady
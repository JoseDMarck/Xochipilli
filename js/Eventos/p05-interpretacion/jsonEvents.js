$( document ).ready(function() {
   

 // IDIOMA ESPAÑOL 
 

if (LanguageON == "ESP"){

 // TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ESP.titulo; 

// Textos Galerias
/*document.getElementById("btn_lectura").innerHTML = obj_ESP.botones[0].btn_lectura; 
document.getElementById("btn_atavios_sol").innerHTML = obj_ESP.botones[0].btn_atavios_sol;
document.getElementById("btn_atavios_tierra").innerHTML = obj_ESP.botones[0].btn_atavios_tierra; 
document.getElementById("btn_atavios_florido").innerHTML = obj_ESP.botones[0].btn_atavios_florido; 
document.getElementById("btn_trono").innerHTML = obj_ESP.botones[0].btn_trono; */


}


 // IDIOMA INGLÉS 
 
if (LanguageON == "ENG"){


    $(".Ayuda").addClass("Ayuda_ENG");
    $(".btn_ayuda").addClass("btn_ayuda-ENG");
    $(".btn_ayuda-m").addClass("btn_ayuda-ENG");
    
    
    $(".AyudaMenus").addClass("AyudaMenus-ENG");

    $(".btn_senior_flores").addClass("btn_senior_flores_ENG");
    $(".btn_pedestal").addClass("btn_pedestal_ENG");
    $(".btn_atavios_sol").addClass("btn_atavios_sol_ENG");
    $(".btn_atavios_tierra").addClass("btn_atavios_tierra_ENG");
    $(".btn_atavio_florido").addClass("btn_atavio_florido_ENG");


    $(".btn_conservacion").addClass("btn_conservacion_ENG");
    $(".btn_glosario").addClass("btn_glosario_ENG");
    $(".btn_referencias").addClass("btn_referencias_ENG");
    $(".btn_creditos").addClass("btn_creditos_ENG");
    

 // TITULO OBRA
//document.getElementById("titulo").innerHTML = obj_ENG.titulo; 

// Textos Galerias
/*document.getElementById("btn_lectura").innerHTML = obj_ENG.botones[0].btn_lectura; 
document.getElementById("btn_atavios_sol").innerHTML = obj_ENG.botones[0].btn_atavios_sol;
document.getElementById("btn_atavios_tierra").innerHTML = obj_ENG.botones[0].btn_atavios_tierra; 
document.getElementById("btn_atavios_florido").innerHTML = obj_ENG.botones[0].btn_atavios_florido; 
document.getElementById("btn_trono").innerHTML = obj_ENG.botones[0].btn_trono; */
 

}


// IDIOMA NAH
if (LanguageON == "NAH"){
 
    $(".btn_conservacion").addClass("btn_conservacion_NAH");
	$(".btn_glosario").addClass("btn_glosario_NAH");
	$(".btn_referencias").addClass("btn_referencias_NAH");
	$(".btn_creditos").addClass("btn_creditos_NAH");

} // END NAH




}); // =============== onDocumetReady
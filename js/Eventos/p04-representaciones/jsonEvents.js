$( document ).ready(function() {
    
 
  // IDIOMA ESPAÑOL 
  
 
 if (LanguageON == "ESP"){
 
 // DESCRIPCIÓN OBRA
 document.getElementById("descripcion").innerHTML = obj_ESP_Repre.descripcion; 
 
 // Textos Galerias
 /*document.getElementById("gal_txt_1").innerHTML = obj_ESP.galeria[0].texto_1; 
 document.getElementById("gal_txt_2").innerHTML = obj_ESP.galeria[0].texto_2; 
 document.getElementById("gal_txt_3").innerHTML = obj_ESP.galeria[0].texto_3; 
 document.getElementById("gal_txt_4").innerHTML = obj_ESP.galeria[0].texto_4; */
 
 
 
 }
 
 
  // IDIOMA INGLÉS 
  
 if (LanguageON == "ENG"){
 
     // DESCRIPCIÓN OBRA
     document.getElementById("descripcion").innerHTML = obj_ENG_Repre.descripcion; 
 
     $(".ayuda-image-Repre").addClass("ayuda-image-Repre_ENG");
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
 

     $(".repres_img_1").addClass("repres_img_1_ENG");
     $(".repres_img_2").addClass("repres_img_2_ENG");
     $(".repres_img_3").addClass("repres_img_3_ENG");
     $(".repres_img_4").addClass("repres_img_4_ENG");
     $(".repres_img_5").addClass("repres_img_5_ENG");
     $(".repres_img_6").addClass("repres_img_6_ENG");
     $(".repres_img_7").addClass("repres_img_7_ENG");

     $(".titulo-presentacion").addClass("titulo-presentacion_ENG");
     

 
 
 
 // Textos Galerias
 /*document.getElementById("gal_txt_1").innerHTML = obj_ENG.galeria[0].texto_1; 
 document.getElementById("gal_txt_2").innerHTML = obj_ENG.galeria[0].texto_2; 
 document.getElementById("gal_txt_3").innerHTML = obj_ENG.galeria[0].texto_3; 
 document.getElementById("gal_txt_4").innerHTML = obj_ENG.galeria[0].texto_4; */
 
 
 
 
 
 }
 
 
 // IDIOMA NAH
 if (LanguageON == "NAH"){
 
    $(".ayuda-image-Repre").addClass("ayuda-image-Repre_NAH");
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



     $(".repres_img_1").addClass("repres_img_1_NAH");
     $(".repres_img_2").addClass("repres_img_2_NAH");
     $(".repres_img_3").addClass("repres_img_3_NAH");
     $(".repres_img_4").addClass("repres_img_4_NAH");
     $(".repres_img_5").addClass("repres_img_5_NAH");
     $(".repres_img_6").addClass("repres_img_6_NAH");
     $(".repres_img_7").addClass("repres_img_7_NAH");

     $(".titulo-presentacion").addClass("titulo-presentacion_NAH");
 
     
 // DESCRIPCIÓN OBRA
 document.getElementById("descripcion").innerHTML = obj_NAH_Repre.descripcion; 
 
 // Textos Galerias
 /*document.getElementById("gal_txt_1").innerHTML = obj_NAH.galeria[0].texto_1; 
 document.getElementById("gal_txt_2").innerHTML = obj_NAH.galeria[0].texto_2; 
 document.getElementById("gal_txt_3").innerHTML = obj_NAH.galeria[0].texto_3; 
 document.getElementById("gal_txt_4").innerHTML = obj_NAH.galeria[0].texto_4; */
 
 
 
 
 } // END NAH
 
 
 
 
 }); // =============== onDocumetReady
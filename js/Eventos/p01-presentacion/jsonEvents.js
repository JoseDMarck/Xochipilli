$( document ).ready(function() {
   




if (LanguageON == "ESP"){

	// Titulo 
	document.getElementById("titulo").innerHTML = obj_ESP.titulo; 
	
	// Descripcion
	document.getElementById("descripcion").innerHTML = obj_ESP.descripcion;
	
	//Btn Continuar
	document.getElementById("btn_continuar").innerHTML = obj_ESP.botones[0].btn_continuar; 
	 
	//btn_glosario
	document.getElementById("btn_glosario").innerHTML = obj_ESP.botones[0].btn_glosario; 
	
	//btn_referencias
	document.getElementById("btn_referencias").innerHTML = obj_ESP.botones[0].btn_referencias; 
	 
	//btn_creditos
	document.getElementById("btn_creditos").innerHTML = obj_ESP.botones[0].btn_creditos; 
	 
	//btn_info_access 
	document.getElementById("btn_info_access").innerHTML = obj_ESP.botones[0].btn_info_access; 
	 
} // END ESP
 


// IDIOMA INGLÉS 
if (LanguageON == "ENG"){
	// Titulo 
	document.getElementById("titulo").innerHTML = obj_ENG.titulo; 
	
	// Descripcion
	document.getElementById("descripcion").innerHTML = obj_ENG.descripcion;
	
	//Btn Continuar
	document.getElementById("btn_continuar").innerHTML = obj_ENG.botones[0].btn_continuar; 
	 
	//btn_glosario
	document.getElementById("btn_glosario").innerHTML = obj_ENG.botones[0].btn_glosario; 
	
	//btn_referencias
	document.getElementById("btn_referencias").innerHTML = obj_ENG.botones[0].btn_referencias; 
	 
	//btn_creditos
	document.getElementById("btn_creditos").innerHTML = obj_ENG.botones[0].btn_creditos; 
	 
	//btn_info_access 
	document.getElementById("btn_info_access").innerHTML = obj_ENG.botones[0].btn_info_access;


} // END ENG





// IDIOMA NAH
if (LanguageON == "NAH"){

// Titulo 
	document.getElementById("titulo").innerHTML = obj_NAH.titulo; 
	
	// Descripcion
	document.getElementById("descripcion").innerHTML = obj_NAH.descripcion;
	
	//Btn Continuar
	document.getElementById("btn_continuar").innerHTML = obj_NAH.botones[0].btn_continuar; 
	 
	//btn_glosario
	document.getElementById("btn_glosario").innerHTML = obj_NAH.botones[0].btn_glosario; 
	
	//btn_referencias
	document.getElementById("btn_referencias").innerHTML = obj_NAH.botones[0].btn_referencias; 
	 
	//btn_creditos
	document.getElementById("btn_creditos").innerHTML = obj_NAH.botones[0].btn_creditos; 
	 
	//btn_info_access 
	document.getElementById("btn_info_access").innerHTML = obj_NAH.botones[0].btn_info_access;


} // END NAH





}); // =============== onDocumetReady
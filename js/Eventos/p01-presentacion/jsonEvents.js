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

	//btn_info_access 
	document.getElementById("titulo_glosario").innerHTML = obj_ESP.titulo_glosario;
	document.getElementById("descripcion_glosario").innerHTML = obj_ESP.descripcion_glosario;
	document.getElementById("titulo_referencias").innerHTML = obj_ESP.titulo_referencias;
	document.getElementById("descripcion_referencias").innerHTML = obj_ESP.descripcion_referencias;
	document.getElementById("titulo_creditos").innerHTML = obj_ESP.titulo_creditos;
	document.getElementById("descripcion_creditos").innerHTML = obj_ESP.descripcion_creditos;
	document.getElementById("titulo_informacion").innerHTML = obj_ESP.titulo_informacion;
	document.getElementById("descripcion_informacion").innerHTML = obj_ESP.descripcion_informacion;

	 
	 
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


	//btn_info_access 
	document.getElementById("titulo_glosario").innerHTML = obj_ENG.titulo_glosario;
	document.getElementById("descripcion_glosario").innerHTML = obj_ENG.descripcion_glosario;
	document.getElementById("titulo_referencias").innerHTML = obj_ENG.titulo_referencias;
	document.getElementById("descripcion_referencias").innerHTML = obj_ENG.descripcion_referencias;
	document.getElementById("titulo_creditos").innerHTML = obj_ENG.titulo_creditos;
	document.getElementById("descripcion_creditos").innerHTML = obj_ENG.descripcion_creditos;
	document.getElementById("titulo_informacion").innerHTML = obj_ENG.titulo_informacion;
	document.getElementById("descripcion_informacion").innerHTML = obj_ENG.descripcion_informacion;



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


	//btn_info_access 
	document.getElementById("titulo_glosario").innerHTML = obj_NAH.titulo_glosario;
	document.getElementById("descripcion_glosario").innerHTML = obj_NAH.descripcion_glosario;
	document.getElementById("titulo_referencias").innerHTML = obj_NAH.titulo_referencias;
	document.getElementById("descripcion_referencias").innerHTML = obj_NAH.descripcion_referencias;
	document.getElementById("titulo_creditos").innerHTML = obj_NAH.titulo_creditos;
	document.getElementById("descripcion_creditos").innerHTML = obj_NAH.descripcion_creditos;
	document.getElementById("titulo_informacion").innerHTML = obj_NAH.titulo_informacion;
	document.getElementById("descripcion_informacion").innerHTML = obj_NAH.descripcion_informacion;


} // END NAH





}); // =============== onDocumetReady
$( document ).ready(function() {
   




if (LanguageON == "ESP"){

	//btn_info_access 
	document.getElementById("descripcion_glosario").innerHTML = obj_m_ESP.descripcion_glosario;
	document.getElementById("descripcion_referencias").innerHTML = obj_m_ESP.descripcion_referencias;
	document.getElementById("descripcion_creditos").innerHTML = obj_m_ESP.descripcion_creditos;
	document.getElementById("descripcion_conservacion").innerHTML = obj_m_ESP.descripcion_conservacion;
	 
} // END ESP
 


// IDIOMA INGLÉS 
if (LanguageON == "ENG"){
	 

	//btn_info_access 
	document.getElementById("descripcion_glosario").innerHTML = obj_m_ENG.descripcion_glosario;
	document.getElementById("descripcion_referencias").innerHTML = obj_m_ENG.descripcion_referencias;
	document.getElementById("descripcion_creditos").innerHTML = obj_m_ENG.descripcion_creditos;
	document.getElementById("descripcion_conservacion").innerHTML = obj_m_ENG.descripcion_conservacion;

} // END ENG





// IDIOMA NAH
if (LanguageON == "NAH"){

	//btn_info_access 

	document.getElementById("descripcion_glosario").innerHTML = obj_m_NAH.descripcion_glosario;
	document.getElementById("descripcion_referencias").innerHTML = obj_m_NAH.descripcion_referencias;
	document.getElementById("descripcion_creditos").innerHTML = obj_m_NAH.descripcion_creditos;
	document.getElementById("descripcion_conservacion").innerHTML = obj_m_NAH.descripcion_conservacion;

} // END NAH





}); // =============== onDocumetReady
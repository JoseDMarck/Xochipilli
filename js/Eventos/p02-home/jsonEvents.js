$( document ).ready(function() {
   




if (LanguageON == "ESP"){


	//btn_glosario
	document.getElementById("btn_glosario").innerHTML = obj_ESP.botones[0].btn_glosario; 
	
	//btn_referencias
	document.getElementById("btn_referencias").innerHTML = obj_ESP.botones[0].btn_referencias; 
	 
	//btn_creditos
	document.getElementById("btn_creditos").innerHTML = obj_ESP.botones[0].btn_creditos; 
	 
	//btn_info_access 
	document.getElementById("btn_info_access").innerHTML = obj_ESP.botones[0].btn_info_access; 

	//btn_info_access 
	document.getElementById("btn_obra").innerHTML = obj_ESP.botones[0].btn_obra;

	//btn_info_access 
		document.getElementById("btn_interpretacion").innerHTML = obj_ESP.botones[0].btn_interpretacion;
	
	//btn_info_access 
		document.getElementById("btn_gabinete").innerHTML = obj_ESP.botones[0].btn_gabinete;
	 
} // END ESP
 


// IDIOMA INGLÉS 
if (LanguageON == "ENG"){
	 
	//btn_glosario
	document.getElementById("btn_glosario").innerHTML = obj_ENG.botones[0].btn_glosario; 
	
	//btn_referencias
	document.getElementById("btn_referencias").innerHTML = obj_ENG.botones[0].btn_referencias; 
	 
	//btn_creditos
	document.getElementById("btn_creditos").innerHTML = obj_ENG.botones[0].btn_creditos; 
	 
	//btn_info_access 
	document.getElementById("btn_info_access").innerHTML = obj_ENG.botones[0].btn_info_access;
 
	//btn_info_access 
	document.getElementById("btn_obra").innerHTML = obj_ENG.botones[0].btn_obra;

	//btn_info_access 
		document.getElementById("btn_interpretacion").innerHTML = obj_ENG.botones[0].btn_interpretacion;
	
	//btn_info_access 
		document.getElementById("btn_gabinete").innerHTML = obj_ENG.botones[0].btn_gabinete;


} // END ENG





// IDIOMA NAH
if (LanguageON == "NAH"){

	 
	//btn_glosario
	document.getElementById("btn_glosario").innerHTML = obj_NAH.botones[0].btn_glosario; 
	
	//btn_referencias
	document.getElementById("btn_referencias").innerHTML = obj_NAH.botones[0].btn_referencias; 
	 
	//btn_creditos
	document.getElementById("btn_creditos").innerHTML = obj_NAH.botones[0].btn_creditos; 
	 
	//btn_info_access 
	document.getElementById("btn_info_access").innerHTML = obj_NAH.botones[0].btn_info_access;

	//btn_info_access 
	document.getElementById("btn_obra").innerHTML = obj_NAH.botones[0].btn_obra;

	//btn_info_access 
	document.getElementById("btn_interpretacion").innerHTML = obj_NAH.botones[0].btn_interpretacion;
	
	//btn_info_access 
	document.getElementById("btn_gabinete").innerHTML = obj_NAH.botones[0].btn_gabinete;

} // END NAH





}); // =============== onDocumetReady
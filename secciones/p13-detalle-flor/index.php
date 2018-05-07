<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_1.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_2.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_3.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_4.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_4.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_5.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_6.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_7.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_8.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_9.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_10.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_11.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_12.css">
	<link rel="stylesheet" type="text/css" href="../../css/galeria_13.css">


	<link rel="stylesheet" type="text/css" href="../../css/imageviewer.css">

	
	<title>Gabinete Botánico</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf8">
</head>
<body>



<div class="main">
	<div class="detalle-flor-Seccion">



			<div class="Background" >

				<div class="menuBarraGeneral">
					
					<div class="btn_up"></div>

					<div class="btn_conservacion btn_L-1-1 open_popUp"></div>
					<div class="btn_glosario btn_L-1-2 open_popUp"></div>
					<div class="btn_referencias btn_L-1-3 open_popUp"></div>
					<div class="btn_creditos btn_L-1-4 open_popUp"></div>
						
				</div>


			<div class="btn_back"></div>				
			<div class="btn_inicio_General"></div>
			<div class="btn_ayuda_General"></div>

			<div class="btn_idioma_es_General"></div>
			<div class="btn_idioma_en_General"></div>
			<div class="btn_idioma_na_General"></div>

			</div><!--Background -->



			<div class="ficha"></div>
			








			<!-- GALERIA ================================== -->

				<div class="next_btn_obra_xo"></div>
				<div class="prev_btn_obra_xo"></div>

				<div class="next_btn_obra_na"></div>
				<div class="prev_btn_obra_na"></div>

				<div class="next_btn_obra_do"></div>
				<div class="prev_btn_obra_do"></div>


				<div id="ContendorGaleria" class="ContendorGaleria">

				</div><!-- ContendorGaleria -->

				<div class="btn_en_xochipili"></div>
				<div class="btn_en_naturaleza"></div>
				<div class="btn_en_documentos"></div>


				 
			
				<div class="descripcion">
					<div id="gal_txt_1" class="textos gal_txt_G gal_txt_G_1"></div><!-- textos -->
					<div id="gal_txt_2" class="textos gal_txt_G gal_txt_G_2"></div><!-- textos -->
					<div id="gal_txt_3" class="textos gal_txt_G gal_txt_G_3"></div><!-- textos -->
 					<div style="clear: both;"></div>
				</div><!-- ContendorDescripcion -->

			
				<div class="overlay_up_detalle"></div>
				<div class="overlay_down_detalle"></div>


				<div class="Contenedor">
					<div id="titulo" class="titulo"></div>
					<div id="descripcion_txt" class="descripcion flexcroll">
							<div id="titulo_box_1" class="titulo_box"></div>	
							<div id="texto_box_1" class="texto_box"></div>

							<div style="width:100%; height:10px; margin-bottom:10px"></div>

							<div id="titulo_box_2" class="titulo_box"></div>	
							<div id="texto_box_2" class="texto_box"></div>
							
							<div style="width:100%; height:10px; margin-bottom:10px"></div>
							

							<div id="titulo_box_3" class="titulo_box"></div>	
							<div id="texto_box_3" class="texto_box"></div>

					</div><!-- Descripcion -->
				</div><!-- Contenedor -->

				 

 
			 
			  

				
			<div class="ayuda-image"></div>
 

			
		</div><!-- ScreenSaver-Seccion -->

	</div> <!--  main -->
	
	
	</div><!-- PopUpSldier -->




    <!-- POPUP SLIDER: CONSERVACION, GLOSARIO, REFERENCIAS -->
	<?php include '../Generales/slider_informacion_home.php'; ?>

	


</div> <!--  main -->


</body>
</html>


<script type="text/javascript" src="../../js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="../../js/greensock-js/src/minified/TweenMax.min.js"></script>
<script type="text/javascript" src="../../js/Librerias/imageviewer.js"></script>
<script type="text/javascript" src="../../js/Eventos/p13-detalle-flor/main.js"></script>
<script type="text/javascript" src="../../js/Eventos/generales/screenSaver.js"></script>



<script type="text/javascript" src="../../json/p13-detalle-flor/GBF_detalle_ESP.js"></script>
<script type="text/javascript" src="../../json/p13-detalle-flor/GBF_detalle_ENG.js"></script>
<script type="text/javascript" src="../../json/p13-detalle-flor/GBF_detalle_NAH.js"></script>
<script type="text/javascript" src="../../js/Eventos/p13-detalle-flor/jsonEvents.js"></script>


<!-- para los json de los botones: Conservación, Glosario, Créditos -->
<script type="text/javascript" src="../../json/MenusBotones/botones.js"></script>

<script type="text/javascript" src="../../json/MenusBotones/Glosario_ES.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/Glosario_EN.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/referencias.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/jsonEventsMenus.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/menusEvents.js"></script>







<link rel="stylesheet" type="text/css" href="../../css/responsive.css">

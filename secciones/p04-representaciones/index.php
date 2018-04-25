<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<link rel="stylesheet" type="text/css" href="../../css/imageviewer.css">


	<title>Obra</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf8">
</head>
<body>



<div class="main">
	<div class="obra-Seccion">


			<div class="overlay_up"></div>
			<div class="overlay_down"></div>
			

			<div class="Background">

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
			</div><!-- Background -->


			<div class="titulo-presentacion"></div>
			

				<div class="Contenedor">
					

					<div id="descripcion" class="descripcion flexcroll"></div><!-- Descripcion -->

				</div><!-- Contenedor -->







			<div class="next_btn_obra"></div>
			<div class="prev_btn_obra"></div>


			<div class="ObraBloqueB">
				
				<div class="ContendorGaleria">
					

					<div class="repres_img_1 gal_img_G gal_img_G_1 gal_img_G"></div>
					<div class="repres_img_2 gal_img_G gal_img_G_2 gal_img_G"></div>
					<div class="repres_img_3 gal_img_G gal_img_G_3 gal_img_G"></div>
					<div class="repres_img_4 gal_img_G gal_img_G_4 gal_img_G"></div>
					<div class="repres_img_5 gal_img_G gal_img_G_5 gal_img_G"></div>
					<div class="repres_img_6 gal_img_G gal_img_G_6 gal_img_G"></div>
					<div class="repres_img_7 gal_img_G gal_img_G_7 gal_img_G"></div>
						
					
					<!--<div class="full_btn"></div>-->
				</div><!-- ContendorGaleria -->



				 
					<div class="descripcion">
							<div id="gal_txt_1" class="textos gal_txt_G gal_txt_G_1"></div><!-- textos -->
							<div id="gal_txt_2" class="textos gal_txt_G gal_txt_G_2"></div><!-- textos -->
							<div id="gal_txt_3" class="textos gal_txt_G gal_txt_G_3"></div><!-- textos -->

 
 					<div style="clear: both;"></div>
					</div><!-- ContendorDescripcion -->

			</div><!-- ObraBloqueB -->



			<div class="ayuda-image ayuda-image-Repre"></div>
			<div class="ayuda-image-toca"></div>
			 
			  

 
		
	</div><!-- ScreenSaver-Seccion -->


	<!-- POPUP SLIDER: CONSERVACION, GLOSARIO, REFERENCIAS -->
	<?php include '../Generales/slider_informacion_home.php'; ?>
	

</div> <!--  main -->


</body>
</html>


<script type="text/javascript" src="../../js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="../../js/greensock-js/src/minified/TweenMax.min.js"></script>
<script type="text/javascript" src="../../js/Librerias/imageviewer.js"></script>
<script type="text/javascript" src="../../js/Eventos/p04-representaciones/main.js"></script>
<script type="text/javascript" src="../../js/Eventos/generales/screenSaver.js"></script>
<script type="text/javascript" src="../../json/p04-representaciones/representaciones.js"></script>
<script type="text/javascript" src="../../js/Eventos/p04-representaciones/jsonEvents.js"></script>


<!-- para los json de los botones: Conservación, Glosario, Créditos -->
<script type="text/javascript" src="../../json/MenusBotones/botones.js"></script>

<script type="text/javascript" src="../../json/MenusBotones/Glosario_ES.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/Glosario_EN.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/referencias.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/jsonEventsMenus.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/menusEvents.js"></script>









<link rel="stylesheet" type="text/css" href="../../css/responsive.css">

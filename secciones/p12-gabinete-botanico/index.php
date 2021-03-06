<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<link rel="stylesheet" type="text/css" href="../../css/imageviewer.css">

	
	<title>Gabinete Botánico</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf8">
</head>
<body>



<div class="main">
	<div class="gabinete-botanico-Seccion">



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

			</div><!--Background -->

			<div class="titulo"></div>

			<div class="overlay_up"></div>
			<div class="overlay_down"></div>


				<div class="imagen_1_es goToDetalleFlor 0 1 3 3 7 1 0 1 4"></div>
				<div class="imagen_2_es goToDetalleFlor 1 5 5 8 18 1 0 5 10"></div>
				<div class="imagen_3_es goToDetalleFlor 2 3 2 3 8 1 0 3 5"></div>
				<div class="imagen_4_es goToDetalleFlor 3 1 1 8 10 1 0 1 2"></div>
				<div class="imagen_5_es goToDetalleFlor 4 8 5 11 24 1 0 8 13"></div>
				<div class="imagen_6_es goToDetalleFlor 5 0 1 5 6 2 0 0 1"></div>
				<div class="imagen_7_es goToDetalleFlor 6 0 2 6 8 2 0 0 2"></div>
				<div class="imagen_8_es goToDetalleFlor 7 0 3 4 7 2 0 0 3"></div>
				<div class="imagen_9_es goToDetalleFlor 8 0 2 12 14 2 0 0 2"></div>
				<div class="imagen_10_es goToDetalleFlor 9 0 1 5 6 2 0 0 1"></div>
				<div class="imagen_11_es goToDetalleFlor 10 0 2 4 6 2 0 0 2"></div>
				<div class="imagen_12_es goToDetalleFlor 11 0 1 2 3 2 0 0 1"></div>
				<div class="imagen_13_es goToDetalleFlor 12 0 2 3 5 2 0 0 2"></div>

		


				<div class="Contenedor">
					<div id="titulo" class="titulo"></div>
					<div class="descripcion flexcroll">
						<div id="descripcion"></div>
						<div id="notasGabinete" ></div>	
					</div><!-- Descripcion -->

					
				
				</div><!-- Contenedor -->



			<!-- Slider PopUp -->


			<div class="PopUpSlider_HP">
					<div class="btn_close_HP"></div>
					<div class="btn_prev_HP"></div>
					<div class="btn_next_HP"></div>
			</div> 

		
			 
			  
			<div class="ayuda-image"></div>
 

			
		</div><!-- ScreenSaver-Seccion -->

	</div> <!--  main -->
	
	


		<!-- POPUP SLIDER: CONSERVACION, GLOSARIO, REFERENCIAS -->
		<?php include '../Generales/slider_informacion_home.php'; ?>
		

</div> <!--  main -->


</body>
</html>


<script type="text/javascript" src="../../js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="../../js/greensock-js/src/minified/TweenMax.min.js"></script>
<script type="text/javascript" src="../../js/Librerias/imageviewer.js"></script>
<script type="text/javascript" src="../../js/Eventos/p12-gabinete-botanico/main.js"></script>
<script type="text/javascript" src="../../js/Eventos/generales/screenSaver.js"></script>
<script type="text/javascript" src="../../json/p12-gabinete-botanico/gabinete-botanico.js"></script>
<script type="text/javascript" src="../../js/Eventos/p12-gabinete-botanico/jsonEvents.js"></script>




<!-- para los json de los botones: Conservación, Glosario, Créditos -->
<script type="text/javascript" src="../../json/MenusBotones/botones.js"></script>

<script type="text/javascript" src="../../json/MenusBotones/Glosario_ES.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/Glosario_EN.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/referencias.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/jsonEventsMenus.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/menusEvents.js"></script>



<link rel="stylesheet" type="text/css" href="../../css/responsive.css">

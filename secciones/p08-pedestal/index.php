<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
	<link rel="stylesheet" type="text/css" href="../../css/imageviewer.css">

	
	<title>Unión de dualidades</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf8">
</head>
<body>



<div class="main">
	<div class="lectura-general-Seccion">

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

			</div><!--Background -->

			<div class="titulo_Pedestal"></div>


			<div class="LecturaGnral-BloqueB">
				 <div class="asset_figura_02p_1">
				 	 <div class="btn_hotspots-LG btn_L-1-1_HP btn_pos_02p_1_h01"></div>
				 	 <div class="btn_hotspots-LG btn_L-1-2_HP btn_pos_02p_1_h02"></div>
				 	 <!--<div id="titulo_btn_1" class="titulos_btn"></div>-->
				 </div><!-- Figura 1 -->





				 <div class="asset_figura_02p_2">
				 	 <div class="btn_hotspots-LG btn_L-2-1_HP btn_pos_02p_2_h01"></div>
				 	 <div class="btn_hotspots-LG btn_L-2-2_HP btn_pos_02p_2_h02"></div>
				 	 <!--<div id="titulo_btn_2" class="titulos_btn"></div>-->

				 </div>


				 <div class="asset_figura_02p_3">
				 	 <div class="btn_hotspots-LG btn_L-3-1_HP btn_pos_02p_3_h01"></div>
				 	 <div class="btn_hotspots-LG btn_L-3-2_HP btn_pos_02p_3_h02"></div>
				 	 <div class="btn_hotspots-LG btn_L-3-3_HP btn_pos_02p_3_h03"></div>
				 	<!-- <div id="titulo_btn_3" class="titulos_btn"></div>-->

				 </div>


				 <div class="asset_figura_02p_4">
				 	  
				 	 <div class="btn_hotspots-LG btn_L-4-1_HP btn_pos_02p_4_h01"></div>
				 	 <!--<div id="titulo_btn_4" class="titulos_btn"></div>-->

				 </div>

			</div><!-- LecturaGnral-BloqueB -->




				<div class="Contenedor">
					<div id="titulo" class="titulo"></div>
					<div id="descripcion" class="descripcion" style="overflow:hidden"></div><!-- Descripcion -->
				</div><!-- Contenedor -->



			<!-- Slider PopUp -->


			<div class="PopUpSlider_HP">

					<div class="btn_close_HP"></div>
					<div class="btn_prev_HP"></div>
					<div class="btn_next_HP"></div>



				<div class="imagen_PopUpSlider">
					
					<div class="gal_img imagen-P-1-1"></div>
					<div id="gal_desc-1-1" class="gal_desc_LG desc-1-1"></div>

					<div class="gal_img imagen-P-1-2"></div>
					<div id="gal_desc-1-2" class="gal_desc_LG desc-1-2"></div>
				 
					<div class="gal_img imagen-P-2-1"></div>
					<div id="gal_desc-2-1" class="gal_desc_LG desc-2-1"></div>

					<div class="gal_img imagen-P-2-2"></div>
					<div id="gal_desc-2-2" class="gal_desc_LG desc-2-2"></div>
					
					<div class="gal_img imagen-P-3-1"></div>
					<div id="gal_desc-3-1" class="gal_desc_LG desc-3-1"></div>

					<div class="gal_img imagen-P-3-2"></div>
					<div id="gal_desc-3-2" class="gal_desc_LG desc-3-2"></div>
					
					<div class="gal_img imagen-P-3-3"></div>
					<div id="gal_desc-3-3" class="gal_desc_LG desc-3-3"></div>
					
					<div class="gal_img imagen-P-4-1"></div>
					<div id="gal_desc-4-1" class="gal_desc_LG desc-4-1"></div>

					 

			
				</div> <!-- PopUpSldier -->
				

			</div> 

		
			 
			  
			<div class="ayuda-image"></div>
 

			
		</div><!-- ScreenSaver-Seccion -->


	 <!-- POPUP SLIDER: CONSERVACION, GLOSARIO, REFERENCIAS -->
	 <?php include '../Generales/slider_informacion_home.php'; ?>




	</div> <!--  main -->
	
 

</div> <!--  main -->


</body>
</html>


<script type="text/javascript" src="../../js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="../../js/greensock-js/src/minified/TweenMax.min.js"></script>
<script type="text/javascript" src="../../js/Librerias/imageviewer.js"></script>
<script type="text/javascript" src="../../js/Eventos/p08-pedestal/main.js"></script>
<script type="text/javascript" src="../../js/Eventos/generales/screenSaver.js"></script>
<script type="text/javascript" src="../../json/p08-pedestal/p08-pedestal.js"></script>
<script type="text/javascript" src="../../js/Eventos/p08-pedestal/jsonEvents.js"></script>


<!-- para los json de los botones: Conservación, Glosario, Créditos -->
<script type="text/javascript" src="../../json/MenusBotones/botones.js"></script>

<script type="text/javascript" src="../../json/MenusBotones/Glosario_ES.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/Glosario_EN.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/referencias.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/jsonEventsMenus.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/menusEvents.js"></script>






<link rel="stylesheet" type="text/css" href="../../css/responsive.css">

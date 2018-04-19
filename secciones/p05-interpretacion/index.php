<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" type="text/css" href="../../css/style.css">
 

    	<script src="../../js/Librerias/three/three.min.js"></script>
		<script src="../../js/Librerias/three/OrbitControls.js"></script>
		<script src="../../js/Librerias/three/OBJLoader.js"></script>
		<script src="../../js/Librerias/three/MTLLoader.js"></script>




	<title>Interpretación</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf8">
</head>
<body>

		<style> 
			 canvas {  position: absolute; left: -16%; } 
		</style>

<div class="main">
	<div class="interpretacion-Seccion">




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

		 	<div class="imagen360">
				 <div class="icono"></div>
			 </div>


			 <!-- Botones -->

			 <div class="btn_senior_flores"></div>
			 <div class="btn_pedestal"></div>
			 <div class="btn_atavios_sol"></div>
			 <div class="btn_atavios_tierra"></div>
			 <div class="btn_atavio_florido"></div>



			 <div class="ayuda-image"></div>

	</div><!-- ScreenSaver-Seccion -->



	 <!-- POPUP SLIDER: CONSERVACION, GLOSARIO, REFERENCIAS -->
	 <?php include '../Generales/slider_informacion_home.php'; ?>

	

</div> <!--  main -->


</body>
</html>


<script type="text/javascript" src="../../js/jquery.1.9.1.min.js"></script>
<script type="text/javascript" src="../../js/greensock-js/src/minified/TweenMax.min.js"></script>
<script type="text/javascript" src="../../js/Eventos/p05-interpretacion/main.js"></script>
<script type="text/javascript" src="../../js/Eventos/generales/screenSaver.js"></script>
<script type="text/javascript" src="../../json/p05-interpretacion/interpretacion.js"></script>
<script type="text/javascript" src="../../js/Eventos/p05-interpretacion/jsonEvents.js"></script>


<!-- para los json de los botones: Conservación, Glosario, Créditos -->
<script type="text/javascript" src="../../json/MenusBotones/botones.js"></script>

<script type="text/javascript" src="../../json/MenusBotones/Glosario_ES.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/Glosario_EN.js"></script>
<script type="text/javascript" src="../../json/MenusBotones/referencias.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/jsonEventsMenus.js"></script>
<script type="text/javascript" src="../../js/Eventos/Generales/menusEvents.js"></script>


<link rel="stylesheet" type="text/css" href="../../css/responsive.css">

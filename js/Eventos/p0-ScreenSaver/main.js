$( document ).ready(function() {
   TweenMax.to(".btnIniciar", 3, {alpha:.18,  repeat:-1, yoyo:true});



/* --------------------------------------------------------
/* ---- Eventos interacción de pantalla
-------------------------------------------------------- */


var ExitScreen = function () {
    window.location.href = 'secciones/p02-home/index.php'+ '?idioma='+ 'ESP';
};

var InitScreen = function () {
    TweenMax.to("body", 2, {alpha:1});
};

InitScreen();



//GO TO P1: PRESENTACIÓN
$(".touch-bg").click(function() {
	 TweenMax.to("body", 1, {alpha:0, onComplete: ExitScreen });
});




}); // onDocumetReady
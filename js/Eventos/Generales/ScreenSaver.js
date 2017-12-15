$( document ).ready(function() {
var tiempoScreenSaver = 4000;
InitScreenTempo = setTimeout(function(){ console.log("Go to ScreenSaver"); GotoHome(); }, tiempoScreenSaver );



$('body').on('click', function (e) {
	console.log("touch!");
	StopScreenTempo();
	e.preventDefault();
});

 
GotoHome = function () {
	TweenMax.to("body", 1, {alpha:0, onComplete: ExitScreen });
}

var ExitScreen = function(){
	window.location.href = HomeURL;
}

var StopScreenTempo = function () {
    clearTimeout(InitScreenTempo); 
	PlayScreenTempo(); 
};

var PlayScreenTempo = function () {
    clearTimeout(InitScreenTempo);
    InitScreenTempo = setTimeout(function(){ console.log("Go to ScreenSaver"); GotoHome();  }, tiempoScreenSaver );
};





}); // onDocumetReady
$( document ).ready(function() { //120000;
var tiempoScreenSaver = 999999;
InitScreenTempo = setTimeout(function(){ console.log("Go to ScreenSaver"); GotoScreenSaver(); }, tiempoScreenSaver );



$('body').on('click', function (e) {
	console.log("touch!");
	StopScreenTempo();
	e.preventDefault();
});

 
GotoScreenSaver = function () {
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
    InitScreenTempo = setTimeout(function(){ console.log("Go to ScreenSaver"); GotoScreenSaver();  }, tiempoScreenSaver );
};





}); // onDocumetReady
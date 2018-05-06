$( document ).ready(function() { //120000;
var tiempoScreenSaver = 120000;
InitScreenTempo = setTimeout(function(){ console.log("Go to ScreenSaver"); GotoScreenSaver(); }, tiempoScreenSaver );



$('html').on('click', function (e) {
	console.log("touch!");
	StopScreenTempo();
	e.preventDefault();
});


 

$(this).bind("contextmenu", function(e) {
	e.preventDefault();
});
 
 
GotoScreenSaver = function () {
	TweenMax.to("body", 1, {alpha:0, onComplete: ExitScreen });
}


ExitScreen = function(){
	window.location.href = HomeURL;
}

 StopScreenTempo = function () {
    clearTimeout(InitScreenTempo); 
	PlayScreenTempo(); 
};

 PlayScreenTempo = function () {
    clearTimeout(InitScreenTempo);
    InitScreenTempo = setTimeout(function(){ console.log("Go to ScreenSaver"); GotoScreenSaver();  }, tiempoScreenSaver );
};





}); // onDocumetReady
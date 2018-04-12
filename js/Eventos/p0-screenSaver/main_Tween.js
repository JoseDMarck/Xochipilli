
var tl_inicial  = new TimelineLite();
var tl_scale = new TimelineLite();

    //tl_scale.to(".imagen_1", 0, {scale:1.6 })
    //tl_scale.to(".imagen_4", 0, {scale:1.6 })

    tl_inicial.to(".imagen_1", 9, {scale:1.03, opacity:0.9})
    .to(".imagen_1", 6, {opacity:0, scale:.9, tint:0x000000,  ease:Power1.easeInOut})

    
    .to(".imagen_2", 6, {scale:1.03, opacity:1},  "-=3" )
    .to(".imagen_2", 6, {opacity:0, scale:.9, tint:0x000000, ease:Power1.easeInOut})
    
    .to(".imagen_3", 6, {scale:1.03, opacity:1},  "-=3" )
    .to(".imagen_3", 4, {opacity:0.1, scale:.9, tint:0x000009, ease:Power1.easeInOut, onComplete:reiniciar})

    function reiniciar(){
      tl_inicial.restart();
  } 

    //TweenMax.to(".tituloA", 2, {y: 200 });
    //TweenMax.to(".tituloB", 2, {y: -100 });



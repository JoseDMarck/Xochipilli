
                var tl_inicial  = new TimelineLite();
                var tl_scale = new TimelineLite();

                tl_scale.to(".imagen_2", 0, {scale:1.6 })
                //tl_scale.to(".imagen_4", 0, {scale:1.6 })

               


                tl_inicial.to(".imagen_1", 14, {scale:1.6 })
                    .to(".imagen_1", 2, {opacity:0, tint:0x000000,  ease:Power1.easeInOut })
                    
                
                    .to(".imagen_2", 14, {scale:1})
                    .to(".imagen_2", 2, {opacity:0 , tint:0x000000, ease:Power1.easeInOut})
                
                    .to(".imagen_3", 14, {scale:1.6})
                    .to(".imagen_3", 2, {opacity:0 , tint:0x000000, ease:Power1.easeInOut})

                    .to(".imagen_4", 14, {scale:1.2})
                    .to(".imagen_4", 2, {opacity:0 , tint:0x000000, ease:Power1.easeInOut, onComplete:reiniciar })

                   
                function reiniciar(){
                  tl_inicial.restart();
                } 

                //TweenMax.to(".tituloA", 2, {y: 200 });
                //TweenMax.to(".tituloB", 2, {y: -100 });



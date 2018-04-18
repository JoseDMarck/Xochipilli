// EVENTOS GALLERIA MENUS ===================
statusMenu = 0;
var num_total = 4;
var num_init;
var num_gal;


$(".btn_close").click(function() {
    $(".PopUpSlider").fadeOut();


    if (LanguageON == "ESP"){
        $(".btn_conservacion").removeClass("btn_conservacion_on");        
        $(".btn_glosario").removeClass("btn_glosario_on");
        $(".btn_referencias").removeClass("btn_referencias_on");
        $(".btn_creditos").removeClass("btn_creditos_on");
    }

    if (LanguageON == "ENG"){
        $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");        
        $(".btn_glosario").removeClass("btn_glosario_on_ENG");
        $(".btn_referencias").removeClass("btn_referencias_on_ENG");
        $(".btn_creditos").removeClass("btn_creditos_on_ENG");
    }

    if (LanguageON == "NAH"){
        $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");        
        $(".btn_glosario").removeClass("btn_glosario_on_NAH");
        $(".btn_referencias").removeClass("btn_referencias_on_NAH");
        $(".btn_creditos").removeClass("btn_creditos_on_NAH");
    }

    

    $(".btn_ayuda").show();
    $(".btn_ayuda-m").hide();
    
});


$(".btn_up").click(function() {
    if(statusMenu == 0){
        TweenMax.to(".menuBarraGeneral", 1, {y:-180, onComplete: show = function(){
           //$(".btn_back").fadeIn(); 
           TweenMax.to(".btn_up", 0.5, {rotation:180, y:32,  ease: Circ.easeOut})
        }});
        
        statusMenu = 1;
    }else{
        //$(".btn_back").hide(); 
        TweenMax.to(".menuBarraGeneral", 1, {y:0, onComplete: returPos = function(){
            TweenMax.to(".btn_up", 0.5, {rotation:0, y:0,  ease: Circ.easeOut})
        }});
        
        
        statusMenu = 0;

    }
});



$(".open_popUp").click(function() {
  
  valor_hp = $(this).attr('class').split(' ')[1];
    console.log(valor_hp);

    $(".btn_ayuda").hide();
    $(".btn_ayuda-m").show();


    if( valor_hp == "btn_L-1-1" ){
        num_gal = 1;
        num_init = 1;

        


        if (LanguageON == "ESP"){
            //PARA BOTONES DE SELECCIÓN
            $(".btn_conservacion").addClass("btn_conservacion_on");
            $(".btn_glosario").removeClass("btn_glosario_on");
            $(".btn_referencias").removeClass("btn_referencias_on");
            $(".btn_creditos").removeClass("btn_creditos_on");
        }

        if (LanguageON == "ENG"){
            //PARA BOTONES DE SELECCIÓN
            $(".btn_conservacion").addClass("btn_conservacion_on_ENG");
            $(".btn_glosario").removeClass("btn_glosario_on_ENG");
            $(".btn_referencias").removeClass("btn_referencias_on_ENG");
            $(".btn_creditos").removeClass("btn_creditos_on_ENG");
        }

        if (LanguageON == "NAH"){
            //PARA BOTONES DE SELECCIÓN
            $(".btn_conservacion").addClass("btn_conservacion_on_NAH");
            $(".btn_glosario").removeClass("btn_glosario_on_NAH");
            $(".btn_referencias").removeClass("btn_referencias_on_NAH");
            $(".btn_creditos").removeClass("btn_creditos_on_NAH");
        }


        //PARA TIULOS SECCIONES               
        $(".btn_titulo_Seccion").hide();
        $(".titulo_conservacion").fadeIn();


    }

    if( valor_hp == "btn_L-1-2" ){
        num_gal = 1;
        num_init = 2;

        
        //PARA BOTONES DE SELECCIÓN        
        if (LanguageON == "ESP"){
            $(".btn_glosario").addClass("btn_glosario_on");
            $(".btn_conservacion").removeClass("btn_conservacion_on");        
            $(".btn_referencias").removeClass("btn_referencias_on");
            $(".btn_creditos").removeClass("btn_creditos_on");
        }

        if (LanguageON == "ENG"){
            $(".btn_glosario").addClass("btn_glosario_on_ENG");
            $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");        
            $(".btn_referencias").removeClass("btn_referencias_on_ENG");
            $(".btn_creditos").removeClass("btn_creditos_on_ENG");
        }

        if (LanguageON == "NAH"){
            $(".btn_glosario").addClass("btn_glosario_on_NAH");
            $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");        
            $(".btn_referencias").removeClass("btn_referencias_on_NAH");
            $(".btn_creditos").removeClass("btn_creditos_on_NAH");
        }

        //PARA TIULOS SECCIONES               
        $(".btn_titulo_Seccion").hide();
        $(".titulo_glosario").fadeIn();
        
    }

    if( valor_hp == "btn_L-1-3" ){
        num_gal = 1;
        num_init = 3;

        //PARA BOTONES DE SELECCIÓN  
        if (LanguageON == "ESP"){      
            $(".btn_referencias").addClass("btn_referencias_on");
            $(".btn_conservacion").removeClass("btn_conservacion_on");        
            $(".btn_glosario").removeClass("btn_glosario_on");
            $(".btn_creditos").removeClass("btn_creditos_on");
        }

        if (LanguageON == "ENG"){      
            $(".btn_referencias").addClass("btn_referencias_on_ENG");
            $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");        
            $(".btn_glosario").removeClass("btn_glosario_on_ENG");
            $(".btn_creditos").removeClass("btn_creditos_on_ENG");
        }

        if (LanguageON == "NAH"){      
            $(".btn_referencias").addClass("btn_referencias_on_NAH");
            $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");        
            $(".btn_glosario").removeClass("btn_glosario_on_NAH");
            $(".btn_creditos").removeClass("btn_creditos_on_NAH");
        }

        //PARA TIULOS SECCIONES               
        $(".btn_titulo_Seccion").hide();
        $(".titulo_referencias").fadeIn();
        
        
    }

    if( valor_hp == "btn_L-1-4" ){
        num_gal = 1;
        num_init = 4;

        //PARA BOTONES DE SELECCIÓN      
        if (LanguageON == "ESP"){    
            $(".btn_creditos").addClass("btn_creditos_on");
            $(".btn_conservacion").removeClass("btn_conservacion_on");        
            $(".btn_glosario").removeClass("btn_glosario_on");
            $(".btn_referencias").removeClass("btn_referencias_on");
        }

        if (LanguageON == "ENG"){    
            $(".btn_creditos").addClass("btn_creditos_on_ENG");
            $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");        
            $(".btn_glosario").removeClass("btn_glosario_on_ENG");
            $(".btn_referencias").removeClass("btn_referencias_on_ENG");
        }

        if (LanguageON == "NAH"){    
            $(".btn_creditos").addClass("btn_creditos_on_NAH");
            $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");        
            $(".btn_glosario").removeClass("btn_glosario_on_NAH");
            $(".btn_referencias").removeClass("btn_referencias_on_NAH");
        }
        
        //PARA TIULOS SECCIONES       
        $(".btn_titulo_Seccion").hide();
        $(".titulo_creditos").fadeIn();
    }

    // para mostrar el btn de prev
    if (num_init < 2 ){
        $(".btn_prev").hide();
    }
    else{
        $(".btn_prev").show();
    }

    // para mostrar el btn de next
    if (num_init < 4  ){
        $(".btn_next").show();
    }
    else{
         $(".btn_next").hide();
    }

      $(".Textos").hide();
      $(".PopUpSlider").fadeIn();
      $(".seccion-m-"+num_init).fadeIn();

});


$(".btn_next").click(function() {
     if (num_init == 3){
        $(".btn_next").hide();
     }

    if (num_init > 0){
        $(".btn_prev").show();
     }


    if (num_init < num_total){
        $(".gal_img").hide();
        $(".gal_desc_LG").hide();

        num_init = num_init + 1;
        console.log("num_init", num_init);
        $(".Textos").hide();
        $(".btn_titulo_Seccion").hide();


        if(num_init == 1){

            if (LanguageON == "ESP"){  
                $(".btn_conservacion").addClass("btn_conservacion_on");
                $(".btn_glosario").removeClass("btn_glosario_on");
                $(".btn_referencias").removeClass("btn_referencias_on");
                $(".btn_creditos").removeClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){  
                $(".btn_conservacion").addClass("btn_conservacion_on_ENG");
                $(".btn_glosario").removeClass("btn_glosario_on_ENG");
                $(".btn_referencias").removeClass("btn_referencias_on_ENG");
                $(".btn_creditos").removeClass("btn_creditos_on_ENG");
            }


            if (LanguageON == "NAH"){  
                $(".btn_conservacion").addClass("btn_conservacion_on_NAH");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_NAH");
                $(".btn_creditos").removeClass("btn_creditos_on_NAH");
            }

           
        }
        else if(num_init == 2){
            if (LanguageON == "ESP"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on");
                $(".btn_glosario").addClass("btn_glosario_on");
                $(".btn_referencias").removeClass("btn_referencias_on");
                $(".btn_creditos").removeClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");
                $(".btn_glosario").addClass("btn_glosario_on_ENG");
                $(".btn_referencias").removeClass("btn_referencias_on_ENG");
                $(".btn_creditos").removeClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");
                $(".btn_glosario").addClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_NAH");
                $(".btn_creditos").removeClass("btn_creditos_on_NAH");
            }

            
        }

        else if(num_init == 3){
            if (LanguageON == "ESP"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on");
                $(".btn_glosario").removeClass("btn_glosario_on");
                $(".btn_referencias").addClass("btn_referencias_on");
                $(".btn_creditos").removeClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");
                $(".btn_glosario").removeClass("btn_glosario_on_ENG");
                $(".btn_referencias").addClass("btn_referencias_on_ENG");
                $(".btn_creditos").removeClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").addClass("btn_referencias_on_NAH");
                $(".btn_creditos").removeClass("btn_creditos_on_NAH");
            }

            
        }

        else if(num_init == 4){
            if (LanguageON == "ESP"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on");
                $(".btn_glosario").removeClass("btn_glosario_on");
                $(".btn_referencias").removeClass("btn_referencias_on");
                $(".btn_creditos").addClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_ENG");
                $(".btn_creditos").addClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){  
                $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_NAH");
                $(".btn_creditos").addClass("btn_creditos_on_NAH");
            }

             
        }

        $(".seccion-m-"+num_init).fadeIn();

       
    }
});

$(".btn_prev").click(function() {

    if (num_init == 2){
        $(".btn_prev").hide();
     }

    if (num_init > 1){
        $(".gal_img").hide();
        $(".gal_desc_LG").hide();

        num_init = num_init - 1;
        console.log("num_init", num_init);
        $(".Textos").hide();
        $(".btn_titulo_Seccion").hide();


        if(num_init == 1){

            if (LanguageON == "ESP"){  
                $(".btn_conservacion").addClass("btn_conservacion_on");
                $(".btn_glosario").removeClass("btn_glosario_on");
                $(".btn_referencias").removeClass("btn_referencias_on");
                $(".btn_creditos").removeClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){  
                $(".btn_conservacion").addClass("btn_conservacion_on_ENG");
                $(".btn_glosario").removeClass("btn_glosario_on_ENG");
                $(".btn_referencias").removeClass("btn_referencias_on_ENG");
                $(".btn_creditos").removeClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){  
                $(".btn_conservacion").addClass("btn_conservacion_on_NAH");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_NAH");
                $(".btn_creditos").removeClass("btn_creditos_on_NAH");
            }
        }
        else if(num_init == 2){

            if (LanguageON == "ESP"){ 
                $(".btn_conservacion").removeClass("btn_conservacion_on");
                $(".btn_glosario").addClass("btn_glosario_on");
                $(".btn_referencias").removeClass("btn_referencias_on");
                $(".btn_creditos").removeClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){ 
                $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");
                $(".btn_glosario").addClass("btn_glosario_on_ENG");
                $(".btn_referencias").removeClass("btn_referencias_on_ENG");
                $(".btn_creditos").removeClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){ 
                $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");
                $(".btn_glosario").addClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_NAH");
                $(".btn_creditos").removeClass("btn_creditos_on_NAH");
            }
        }

        else if(num_init == 3){

            if (LanguageON == "ESP"){
                $(".btn_conservacion").removeClass("btn_conservacion_on");
                $(".btn_glosario").removeClass("btn_glosario_on");
                $(".btn_referencias").addClass("btn_referencias_on");
                $(".btn_creditos").removeClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){
                $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");
                $(".btn_glosario").removeClass("btn_glosario_on_ENG");
                $(".btn_referencias").addClass("btn_referencias_on_ENG");
                $(".btn_creditos").removeClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){
                $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").addClass("btn_referencias_on_NAH");
                $(".btn_creditos").removeClass("btn_creditos_on_NAH");
            }
        }

        else if(num_init == 4){
            if (LanguageON == "ESP"){
                $(".btn_conservacion").removeClass("btn_conservacion_on");
                $(".btn_glosario").removeClass("btn_glosario_on");
                $(".btn_referencias").removeClass("btn_referencias_on");
                $(".btn_creditos").addClass("btn_creditos_on");
            }

            if (LanguageON == "ENG"){
                $(".btn_conservacion").removeClass("btn_conservacion_on_ENG");
                $(".btn_glosario").removeClass("btn_glosario_on_ENG");
                $(".btn_referencias").removeClass("btn_referencias_on_ENG");
                $(".btn_creditos").addClass("btn_creditos_on_ENG");
            }

            if (LanguageON == "NAH"){
                $(".btn_conservacion").removeClass("btn_conservacion_on_NAH");
                $(".btn_glosario").removeClass("btn_glosario_on_NAH");
                $(".btn_referencias").removeClass("btn_referencias_on_NAH");
                $(".btn_creditos").addClass("btn_creditos_on_NAH");
            }
        }

        $(".seccion-m-"+num_init).fadeIn();

        $(".btn_next").show();
    }
     

});
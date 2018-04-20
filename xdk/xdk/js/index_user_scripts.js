/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {

    
        /* button  #btnZeros */
    $(document).on("click", "#btnZeros", function(evt)
    {
       txtNumeros.placeholder = txtNumeros.placeholder + 0;
         return false;
    });
    
        /* button  #btnremover */
    $(document).on("click", "#btnremover", function(evt)
    {
        /* your code goes here */
        var textoantigo = txtNumeros.placeholder;
        
        txtNumeros.placeholder = txtNumeros.replace(textoantigo,'aaa');
        
         return false;
    });
    
        /* button  #btnEntrar */
    
    
        /* button  #btnEntrar */
    
    
        /* button  #btnEntrar */
    $(document).on("click", "#btnEntrar", function(evt)
    {
         /*global activate_page */
         activate_page("#page02"); 
         return false;
    });
    
        /* button  #btnEQuemSomos */
    
    
        /* button  #btnEQuemSomos */
    
    
        /* button  #btnEQuemSomos */
    $(document).on("click", "#btnEQuemSomos", function(evt)
    {
         /*global activate_page */
         activate_page("#page03"); 
         return false;
    });
    
        /* button  #btnCursos */
    $(document).on("click", "#btnCursos", function(evt)
    {
         /*global activate_page */
         activate_page("#page04"); 
         return false;
    });
    
        /* button  #btnPalestras */
    $(document).on("click", "#btnPalestras", function(evt)
    {
         /*global activate_page */
         activate_page("#page05"); 
         return false;
    });
    
        /* button  #btnContato */
    $(document).on("click", "#btnContato", function(evt)
    {
         /*global activate_page */
         activate_page("#page06"); 
         return false;
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

$(document).ready(function(){
    // here i use hide, show, and fadeout to the images
    $("#hide").click(function(){
        $("#ghost").hide();
    });
    $("#show").click(function(){
        $("#ghost").show();
    });
    $("#fade").click(function(){
        $("#ghost").fadeOut("slow");
    });
    
});
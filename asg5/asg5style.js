$(document).ready(function(){
    
    // i use the click method on the button to change the background colors as desired
    $("#changestyles").click(function(){
        $("#special").css("background-color", "green");
        $(".highlight").css("background-color", "yellow");
        $("p").each(function(i){
            // we use the .each method to iterate through all the p elements. i then do 3 style changes on them
            $(this).css("background-color", "red");
            $(this).css("color", "white");
            $(this).css("border", "20px");
        });
        // i iterate through the p elements again and alert text
        $("p").each(function(){
            alert($(this).text());
        });
    });
});
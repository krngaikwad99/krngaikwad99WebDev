$(document).ready(function() {
    // first i focus and change the background color if the user clicks one of the fields. i got this idea from the focus.html example given
    $("input").on("focus", function() {
       $(this).css("background-color", "red"); 
    });
    // then i do most the programs on the blur method
    $("#Username").blur(function() {
        // we check if the value is empty and if it is it should be yellow and remind the user to enter something
        if ($(this).val() == "") {
            $(this).css("background-color", "yellow"); 
            alert("Please enter a value for Username");
        }
        else {
            // if it isnt empty, then we are good with the field entered. it becomes blue. then we check if the other value is also empty.
            // if it is, the nwe remind the user to enter it. if it isnt, then we can update the demo
            $(this).css("background-color", "blue");
            alert("You entered: " + $(this).val());
            var userval = $("#Username");
            var passval = $("#Password");
            if (passval.val() == "" || passval.val() == null) {
                alert("Please enter a value for Password");
            }
            else {
                document.getElementById("demo").innerHTML = "Username: " + userval.val() + "<br>" + "Password: " + passval.val();
            }
        }
    });
    
    // the same thing is done for password, but the reverse. we check username this time
    $("#Password").blur(function() {
        if ($(this).val() == "") {
            $(this).css("background-color", "yellow"); 
            alert("Please enter a value for Password");
        }
        else {
            $(this).css("background-color", "blue");
            alert("You entered: " + $(this).val());
            var userval = $("#Username");
            var passval = $("#Password");
            if (userval.val() == "" || userval.val() == null) {
                alert("Please enter a value for Username");
            }
            else {
                document.getElementById("demo").innerHTML = "Username: " + userval.val() + "<br>" + "Password: " + passval.val();
            }
        }
    });
});
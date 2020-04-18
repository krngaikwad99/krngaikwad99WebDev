$(document).ready(function() {
    
    
    // this is the jquery used for navigation. i got a lot of this code from the example given, and adjusted it to my own links and page
    $("nav").hide().delay(400).fadeIn(2000);
    
    $(".tabs").eq(0).on('click', function() {
        $("#changer").empty();
        var $robottext = "This is my Jquery site. </p> <p> It is not made like my usual assignments. </p>  <p> It is about Robots. </p>";
        $("#changer").html($robottext);
    });
    
    $(".tabs").eq(1).on('click', function() {
        $("#changer").empty();
        var $robotpic = "<img src='robot.jpg'>";
        $("#changer").html($robotpic);
    });
    
    $(".tabs").eq(2).on('click', function() {
        $("#changer").empty();
        var $robotvid = "<iframe width='560' height='315' src='https://www.youtube.com/embed/o07Ju5snaCw' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
        $("#changer").html($robotvid);
    });
});
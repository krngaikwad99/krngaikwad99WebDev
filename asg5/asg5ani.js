$(document).ready(function() {
    // my animation is a simple left move and height/width/opacity change. if you keep clicking, it continues to add to height/width
    $("#animate").click(function(){
        $("#ani").animate({
            left: '300px',
            opacity: '0.5',
            height: '+=200px',
            width: '+=100px'
        });
    });
});
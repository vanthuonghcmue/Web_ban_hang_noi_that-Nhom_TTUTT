$(document).ready( 
    function(){
        $(".About-section").waypoint(
            function(direction){
                if( direction == "down"){
                    $("nav").addClass("sticky");
                }
                 else {
                $("nav").removeClass("sticky");
             }
            },{
             offset: "700 px"
             }
        )  
// scroll
         $('a').click(function(event){
             $('html, body').animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top
                 }, 900);
                event.preventDefault();
            }
        )

    // mobile-nav
        $(".mobile-nav-icon").click(function(){
            $(".main-nav").slideToggle(200);
            if($(".mobile-nav-icon i").hasClass("fa-bars")){
                $(".mobile-nav-icon i").addClass("fa-times");
                $(".mobile-nav-icon i").removeClass("fa-bars");
            }
            else{
                $(".mobile-nav-icon i").addClass("fa-bars");
                $(".mobile-nav-icon i").removeClass("fa-times");
            }
        }
          
        )
    }
);


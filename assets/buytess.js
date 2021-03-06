(function($) {

   $(document).ready(function () {
    //rotation speed and timer
    var speed = 5000;
    
    var run = setInterval(rotate, speed);
    var textSli = $('.textSlide');
    var container = $('#textSli ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    textSli.width(item_width); //set the textSli to the correct pixel width
    container.parent().width(item_width);
    container.width(textSli.length * item_width); //set the textSli container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    //if user clicked on prev button
    
    $('#buttons a').click(function (e) {
        //textSlide the item
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        //cancel the link behavior            
        return false;
        
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}
    
    //FAQ Slide Toggle
    
    $(document).ready(function (){
        
       $("button").click(function(){
       $(this).parent("h3").siblings("#faqAnswer").slideToggle(300);
        
        //$("#faqAnswer").slideToggle("slow");
        
        
    })
        
    });
    
    /*Bounce*/
   /*
   $('#supplier li img').mouseenter(function() {
    $(this).effect('bounce',500);
});
*/
   
 
    
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:200,
        nav:true,
        navigation:false,
        autoPlay: true,
        autoplayHoverPause:true,
        items:11,
        itemElement:'.views-row',
        itemsMobile : [500,3],
        itemsTablet:  [1000,5],
        itemsDesktop :  [1500,11],
        
        pagination: false,
      /*  responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }*/
    });
    
    $(".navbar-toggle").click(function(){
        $(".navbar-collapse").slideToggle();
    });
    
   

    
})(jQuery);

 
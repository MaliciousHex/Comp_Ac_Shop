//Jquery Starts
$(document).ready(function(){
    //button open
    $('#open').click(function(){
        $('nav').addClass('slide');
    });

    //button close
    $('#close').click(function(){
        $('nav').removeClass('slide');
    });


    // for animate 
    $("#content").slideDown(10000);
    
    // $( window ).scroll(function() {
        
      
    // });



    // $.keyframe.define([{
    //     name: 'shakeme',
    //     '10%,90%': {transform:translate3d(-2px,0,0)},
    //     '20%,80%': {transform:translate3d(3px,0,0)},
    //     '30%,50%,70%':{transform:translate3d(-5px,0,0)},
    //     '40%,60%':transform:translate3d(5px,0,0)
    // }]);

    // $('#btnSubmit').click(function(){
    //     $('figcaption').playKeyFrame({
    //         name:'shakeme',
    //         duration:2000
    //     });
    // });

    // $('li a').hover(function(){
    //     $(this).fadeOut(250);
    //     $(this).fadeIn(100);
    // });

    // $('.dropdown').hover(function(){
    //     $(this).fadeOut(250);
    //     $(this).fadeIn(100);
    // });


});

var slideIndex = 0;
		
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
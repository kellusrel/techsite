$(document).ready(function() {

    $('.feature-carousel').slick({
        dots: true,
        //infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,


        //autoplay: true,
        //autoplaySpeed: 4000,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true   
                
                            }

        
        }]
    });


});
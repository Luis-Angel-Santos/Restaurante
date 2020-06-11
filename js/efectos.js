$(document).ready(function(){
//efecto menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
//efecto header
    if( $(window).width() > 800){
        $('header .textos').css({
             opacity: 0,
             marginTop:0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
       }, 1500);
    }
//scroll menu
    var acercade = $('#acerca-de').offset().top,
    platillos = $('#platillos').offset().top,
    galeria = $('#galeria').offset().top,
    ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(){
        //e.preventDeafault();
        $('html, body').animate({
            scrollTop: acercade - 100
        }, 500);
    });

    $('#btn-menu').on('click', function(e){
        //e.preventDeafault();
        $('html, body').animate({
            scrollTop: platillos - 100
        }, 500);
    });

    $('#btn-galeria').on('click', function(e){
        //e.preventDeafault();
        $('html, body').animate({
            scrollTop: galeria - 100
        }, 500);
    });

    $('#btn-ubicacion').on('click', function(e){
        //e.preventDeafault();
        $('html, body').animate({
            scrollTop: ubicacion - 100
        }, 500);
    });

});
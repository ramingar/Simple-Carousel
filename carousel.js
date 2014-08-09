/**
* CARRUSEL
*
* @author Rafael Minguet García
*
*/
(function(){
    var carousel      = $('#slideshow>li');
    var index         = 0;
    var timePag       = 3000;
    var pid;
    var showNext      = function(){
        carousel.eq(index).fadeOut(function(){
            index = ++index < carousel.length ? index : 0;
            carousel.eq(index).fadeIn();
        });
    }
    var showItem      = function(ii){
        carousel.eq(index).fadeOut(function(){
            carousel.eq(ii).fadeIn();
            index = ii;
        });
    }
    var startCarousel = function(){
        pid = setInterval(function(){ showNext(); }, timePag);
    }
    var stopCarousel  = function(){
        clearInterval(pid);
    }
    
    // mostrar el primer elemento del carrusel
    carousel.eq(index).css('display', 'block').fadeIn();
    // iniciar el carrusel <------------ START!!
    startCarousel();
    
    carousel.hover(stopCarousel, startCarousel);

    /** MENÚ DE NAVEGACIÓN DEL CARRUSEL */
    (function(){
        // Crear el html del menú de navegación
        var html = '<ul id="nav_carousel">';
        for (var ii=0; ii<carousel.length; ii++)
        {
            html += '<li data-imagen="' + ii + '">' + (ii+1) + '</li>';
        }
        html += '</ul>';
        carousel.parent().append(html);

        // Asignar los eventos del menú de navegación
        var nav = carousel.parent().find('ul#nav_carousel li')
            .each(function(){
                $(this).click(function(){
                    showItem($(this).data('imagen'));
                })
            });
        nav.hover(stopCarousel, startCarousel);
    })();
})();
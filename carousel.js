/**
* CARRUSEL
*
* @author Rafael Minguet García
*
*/
var carousel = (function(){
    var $elements     = $('#slideshow').find('li'),
        pid           = 0,
        index         = 0,
        time          = 3000,
        isInitialized = false,

        init          = function(){
            // Mostrar el primer elemento del carrusel
            elements.eq(index).css('display', 'block').fadeIn();
            // Si el cursor está encima se detiene el carrusel
            elements.hover(stopCarousel, startCarousel);
            isInitialized = true;
        },

        showNext      = function(){
            elements.eq(index).fadeOut(function(){
                index = ++index < elements.length ? index : 0;
                elements.eq(index).fadeIn();
            });
        },

        showItem      = function(ii){
            elements.eq(index).fadeOut(function(){
                elements.eq(ii).fadeIn();
                index = ii;
            });
        },

        startCarousel = function(){
            if (!isInitialized)
            {
                init();
            }
            pid = setInterval(function(){ showNext(); }, time);
        },
    
        stopCarousel  = function(){
            clearInterval(pid);
        },

        /** Menú de navegación del carrusel */
        createNav     = function(){
            // Crear el html del menú de navegación
            var html = '<ul id="nav_carousel">',
                maxElements = elements.length;
            for (var ii=0; ii<maxElements; ii++)
            {
                html += '<li data-imagen="' + ii + '">' + (ii+1) + '</li>';
            }
            html += '</ul>';
            var $nav = elements.parent().append(html);

            // Asignar los eventos del menú de navegación
            $nav = $nav.find('#nav_carousel')
                .delegate('li', 'click', function(){
                    $(this).click(function(){
                        showItem($(this).data('imagen'));
                    })
                });

            $nav.find('li').hover(stopCarousel, startCarousel);
        }

    /** Métodos y propiedades públicas */
    return {
        elements      : $elements,
        startCarousel : startCarousel,
        stopCarousel  : stopCarousel,
        createNav     : createNav
    }
})();

var controller = {
    onReady : function(){
        preparePage();

        carousel.startCarousel();
        carousel.createNav();
    }
};

var preparePage = function(){
    var $ulSlideshow = $('#slideshow').appendTo('#main');
    $('#main>:lt(' + --($('#main').children().length) + ')').appendTo('#main');
    $ulSlideshow.find('li').css(
        {
            display : 'none',
            opacity : 1
        }
    );
};

$(document).ready(controller.onReady);

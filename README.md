# Simple Carousel
El objetivo de este código es crear un *slideshow* tipo carrusel que mostrará los elementos con un `$.fn.fadeIn` y los desvanecerá con un `$.fn.fadeOut`.

Está escrito en jQuery, así que se necesitará la librería para hacer que funcione. Puede descargarse desde [aquí](http://jquery.com/download/).

Además, es necesario que las imágenes estén en una lista `<li>` dentro de un elemento con id `#slideshow` tal y como se puede leer en el código:

```javascript
var $elements = $('#slideshow').find('li'),
```

Sin embargo, esto se puede adaptar fácilmente a las necesidades del programador modificando el valor de la propiedad `carousel.elements`, por ejemplo:

```javascript
carousel.elements = $(<valor1>).find(<valor2>);
```

El código puede copiarse y utilizarse en cualquier sitio puesto que está escrito para ser independiente del resto del que haya en la página. La maquetación también es a cargo del programador.
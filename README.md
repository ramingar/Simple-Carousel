# Simple Carousel
El objetivo de este código es crear un *slideshow* tipo carrusel que mostrará los elementos con un `$.fn.fadeIn` y los desvanecerá con un `$.fn.fadeOut`.

Está escrito en jQuery, así que se necesitará la librería para hacer que funcione. Puede descargarse desde [aquí](http://jquery.com/download/).

Además, es necesario que las imágenes estén en una lista `<li>` dentro de un elemento con id `#slideshow`; esto se puede adaptar fácilmente a las necesidades del programador editando simplemente la línea:

```javascript
var carousel = $('#slideshow>li');
```

El código puede copiarse y utilizarse en cualquier sitio puesto que está escrito para ser independiente del resto del que haya en la página. La maquetación también es a cargo del programador.
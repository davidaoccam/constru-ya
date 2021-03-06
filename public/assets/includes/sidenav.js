// sidebar
if (document.getElementById("sidebar")) {
  document.getElementById("sidebar").innerHTML =
    '\
    <div class="inner">\
    <!-- sidebar -->\
    <nav id="menu">\
        <header class="major">\
        <h2>Menu</h2>\
        </header>\
        <ul>\
            <li><a href="index.html"><i class="icon solid fa-home" aria-hidden="true"></i> Inicio</a></li>\
            <li><a href="quienes-somos.html"><i class="icon solid fa-users" aria-hidden="true"></i> Quienes Somos</a></li>\
            <li>\
                <span class="opener"><i class="icon solid fa-bookmark" aria-hidden="true"></i>  Productos y Servicios</span>\
                <ul>\
                    <li><a href="productos-y-servicios.html#vivi-prio">Vivienda Para Todos</a></li>\
                    <li><a href="productos-y-servicios.html#casa-joven">Casa Joven</a></li>\
                    <li><a href="productos-y-servicios.html#casa-mujer">Casa Mujer Próspera</a></li>\
                    <li><a href="productos-y-servicios.html#clp">C. L P. (Construcción en Lote Própio)</a></li>\
                    <li><a href="productos-y-servicios.html#cuchu-casa">CUCHU-CASA</a></li>\
                </ul>\
            </li>\
            <li><a href="contactanos.html"><i class="icon solid fa-envelope" aria-hidden="true"></i> Contactanos</a></li>\
        </ul>\
    </nav>\
    <!-- Section -->\
        <section>\
            <header class="major">\
                <h2>Contactanos</h2>\
            </header>\
            <ul class="contact">\
                <li class="icon solid fa-envelope"><a href="#">informacion@constru-ya.com.gt</a></li>\
                <li class="icon solid fa-phone">(000) 000-0000</li>\
                <li class="icon solid fa-home">1234 Somewhere Ave.</li>\
            </ul>\
        </section>\
    <!-- Footer -->\
        <footer id="footer">\
            <p class="copyright">Footer</p>\
        </footer>\
</div>\
 ';
}

// menu
if ( document.getElementById("menu") ) {
    document.getElementById("menu").innerHTML = "\
    <header class=\"major\">\
    <h2>Menu</h2>\
    </header>\
    <ul>\
        <li><a href=\"index.html\"><i class=\"icon solid fa-home\" aria-hidden=\"true\"></i> Inicio</a></li>\
        <li><a href=\"quienes-somos.html\"><i class=\"icon solid fa-users\" aria-hidden=\"true\"></i> Quienes Somos</a></li>\
        <li>\
            <span class=\"opener\"><i class=\"icon solid fa-bookmark\" aria-hidden=\"true\"></i> Productos y Servicios</span>\
            <ul>\
                <li><a href=\"productos-y-servicios.html#vivi-prio\">Vivienda Prioritaria</a></li>\
                <li><a href=\"productos-y-servicios.html#casa-joven\">Casa Joven</a></li>\
                <li><a href=\"productos-y-servicios.html#casa-mujer\">Casa Mujer Próspera</a></li>\
                <li><a href=\"productos-y-servicios.html#clp\">C. L P. (Construcción en Lote Própio)</a></li>\
                <li><a href=\"productos-y-servicios.html#cuchu-casa\">CUCHU-CASA</a></li>\
            </ul>\
        </li>\
    </ul>\
 ";
 }
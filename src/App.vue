<template>
  <div class="flip-cards">
    <!--Quienes somos-->
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-users big-icon"
            aria-hidden="true"
          ></i>
          <h2 class="square-721">Quiénes Somos</h2>
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2 class="square-721">Quiénes Somos</h2>
          <p>Somos una empresa Guatemalteca, que busca posicionarse como líder inmobiliario a nivel nacional, dedicada a promover Viviendas y a construir sueños.</p>
          <a href="quienes-somos">Ver más</a>
        </div>
      </div>
    </div>

    <!--Vivienda Prioritaria-->
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <span class="fa-stack fa-6x icon-shadow">
            <i class="fas fa-arrow-up fa-stack-1x to-top"></i>
            <i class="fas fa-home fa-stack-2x"></i>
          </span>
          <h2 class="square-721">Vivienda Prioritaria</h2>
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2 class="square-721">Vivienda Prioritaria</h2>
          <p>
            Es un Programa con el cual fortalecemos el rol eminentemente social de nuestra promotora, que consiste en la Construcción en lote propio.
          </p>
          <a href="productos-y-servicios#vivi-prio">
            Ver más
          </a>
        </div>
      </div>
    </div>

    <!--Precalifica-->
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-file-signature big-icon"
            aria-hidden="true"
          ></i>
          <h2 class="square-721">Precalifica</h2>
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2 class="square-721">Precalifica</h2>
          <p>
            Llena nuestro Formulario de Precalificación Para Vivienda Prioritaria.
          </p>
          <a href="precalifica">
            Llenar
          </a>
        </div>
      </div>
    </div>

    <div class="line-break"></div>

    <!--Productos y Servicios-->
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-box-open big-icon"
            aria-hidden="true"
          ></i>
          <h2 class="square-721">Productos y Servicios</h2>
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2 class="square-721">Productos y Servicios</h2>
          <ul class="remove-bullets">
            <li><a href="productos-y-servicios#vivi-prio">Vivienda Prioritaria</a></li>
            <li><a href="productos-y-servicios#casa-joven">Casa Joven</a></li>
            <li><a href="productos-y-servicios#casa-mujer">Casa Mujer Próspera</a></li>
            <li><a href="productos-y-servicios#clp">C. L P. (Construcción en Lote Própio)</a>
            </li>
            <li><a href="productos-y-servicios#cuchu-casa">CUCHU-CASA</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!--Contactanos-->
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-envelope-square big-icon"
            aria-hidden="true"
          ></i>
          <h2 class="square-721">Contáctanos</h2>
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2 class="square-721">Contáctanos</h2>
          <ul class="contact">
            <li class="icon solid fa-home"><a href="contactanos">Circunvalación de Mazatenango<br>
                Km 160 CA-2<br><small>junto a bóveda,
                  que va a San Francisco Zapotitlan en instalaciones de Cerámicas Modernas, Mazatenango.</small></a></li>
          </ul>
        </div>
      </div>
    </div>

    <!--Productos y Servicios-->
    <!--<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front productosBG">
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2>Productos y Servicios</h2>
          <ul class="remove-bullets">
            <li><a href="productos-y-servicios#vivi-prio">Vivienda Prioritaria</a></li>
            <li><a href="productos-y-servicios#casa-joven">Casa Joven</a></li>
            <li><a href="productos-y-servicios#casa-mujer">Casa Mujer Próspera</a></li>
            <li><a href="productos-y-servicios#clp">C. L P. (Construcción en Lote Própio)</a>
            </li>
            <li><a href="productos-y-servicios#cuchu-casa">CUCHU-CASA</a></li>
          </ul>
        </div>
      </div>
    </div>-->
    <!--Contactanos-->
    <!--<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front contactBG">
        </div>
        <div class="flip-card-back fontSizeSmaller">
          <h2>Dirección</h2>
          <ul class="contact">
            <li class="icon solid fa-home"><a href="contactanos">Circunvalación de Mazatenango<br>
                Km 160 CA-2<br><small>junto a bóveda,
                  que va a San Francisco Zapotitlan en instalaciones de Cerámicas Modernas, Mazatenango.</small></a></li>
          </ul>
        </div>
      </div>
    </div>-->

    <div class="line-break"></div>

  </div>
</template>

<script>
export default {
  name: "App",
  title: "Constru-YA!",
};
</script>

<style scoped>
.flip-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
}

.flip-card {
  background-color: transparent;
  min-width: 300px;
  max-width: 300px;
  width: 30%;
  height: 300px;
  perspective: 1000px;
  margin: 25px 20px 25px 20px;
  flex: 0 1 30%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 5px rgba(0, 0, 0, 0.5);
  border-radius: 25px;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 25px;
  padding: 1em;
}

.flip-card-front {
  /*background-color: #ff6300;*/
  background: url("/images/witewall_3.png");
  color: #000c9e;
  text-transform: capitalize;
  font-weight: bold;
}

.flip-card-front h2 {
  position: absolute;
  top: 250px;
  width: 100%;
  text-align: center;
  left: 0;
  color: #000c9e;
  font-weight: normal;
}

.quienesBG {
  background-image: url("/images/squares/quienes-somos.jpg");
  background-size: 100% 100%;
}

.productosBG {
  background-image: url("/images/squares/productos-servicios.jpg");
  background-size: 100% 100%;
}

.contactBG {
  background-image: url("/images/squares/contactanos.jpg");
  background-size: 100% 100%;
}

.noBG {
  background-image: url("/images/LogoConstruYa.png");

  background-position: center;
  background-repeat: no-repeat;

  background-size: 100%;
}

.flip-card-back h2 {
  color: #ff6300 !important;
}

.flip-card-back a {
  color: #ff6300 !important;
}

.flip-card-back a:hover {
  color: #fff !important;
}

.flip-card-back {
  background-color: #000c9e;
  color: #fff;
  transform: rotateY(180deg);
}

.remove-bullets {
  list-style-type: none;
}

.fa-file-signature {
  left: 25px;
}

.to-top {
  color: #ff6300 !important;
  font-size: 0.8em;
}

.big-icon,
.icon-shadow {
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
}

@media screen and (min-width: 1084px) {
  /*.line-break {
    width: 100%;
  }*/
}
/*

xlarge: [1281px, 1680px]
large: [981px, 1280px]
medium: [737px, 980px]
small: [481px, 736px]

xsmall: [361px, 480px]
xxsmall: [null, 360px]
xlarge-to-max: (min-width: 1681px)
small-to-xlarge: (min-width: 481px) and (max-width: 1680px)

*/
@media screen and (min-width: 1px) {
  .line-break {
    width: 0%;
  }
  .fontSizeSmaller {
    font-size: 1.2em;
  }
  .bgc {
    background-color: #fff;
  }
  .big-icon {
    font-size: 11em;
  }
  .fa-stack {
    top: 45px;
  }
  .to-top {
    top: -80px;
    left: 50px;
  }
}
@media screen and (min-width: 481px) {
  .bgc {
    background-color: red;
  }
}
@media screen and (min-width: 737px) {
  .bgc {
    background-color: orange;
  }
}
@media screen and (min-width: 981px) {
  .bgc {
    background-color: yellow;
  }
}
@media screen and (min-width: 1281px) {
  .line-break {
    width: 100%;
  }
  .fontSizeSmaller {
    font-size: 1.1em;
  }
  .bgc {
    background-color: yellowgreen;
  }
  .fa-stack {
    top: 35px;
  }
  .to-top {
    top: -90px;
    left: 55px;
  }
}
@media screen and (min-width: 1681px) {
  .fontSizeSmaller {
    font-size: 0.9em;
  }
  .bgc {
    background-color: green;
  }
  .big-icon {
    font-size: 9em;
  }
  .to-top {
    left: 54px;
  }
  .fa-stack {
    font-size: 5em;
  }
  .square-721 {
    font-size: 1.4em;
  }
}
</style>
<template>
  <div class="flip-cards">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-users fa-5x"
            aria-hidden="true"
          ></i>
          <p>Quienes Somos</p>
        </div>
        <div class="flip-card-back">
          <h2>Quienes Somos</h2>
          <p>Somos una empresa Guatemalteca, que busca posicionarse como líder inmobiliario a nivel nacional, dedicada a promover Viviendas y a construir sueños.</p>
          <a href="quienes-somos">Ver más</a>
        </div>
      </div>
    </div>

    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-bookmark fa-5x"
            aria-hidden="true"
          ></i>
          <p>Productos y Servicios</p>
        </div>
        <div class="flip-card-back">
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
    </div>

    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <i
            class="icon solid fa-bookmark fa-5x"
            aria-hidden="true"
          ></i>
          <p>Contactanos</p>
        </div>
        <div class="flip-card-back">
          <h2>Contactanos</h2>
          <ul class="contact">
            <li class="icon solid fa-envelope"><a href="#">informacion@constru-ya.com.gt</a></li>
            <li class="icon solid fa-phone">(000) 000-0000</li>
            <li class="icon solid fa-home">1234 Somewhere Ave.</li>
          </ul>
        </div>
      </div>
    </div>

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
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /*background-image: url("/images/modelo-t33-33.jpg");
  background-repeat: repeat-x;*/
  height: 100%;
}

.flip-card {
  background-color: transparent;
  min-width: 300px;
  width: 300px;
  height: 300px;
  perspective: 1000px;
  margin: 25px 25px 25px 25px;
  flex: 0 1 24%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
}

.flip-card-front {
  background-color: #ff6300;
  color: #000c9e;
  text-transform: capitalize;
  font-weight: bold;
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

/* Flexbox stuff */
@media screen and (min-width: 992px) {
  .flip-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
@media only screen and (max-width: 600px) {
  .flip-card-front {
    font-size: 2em !important;
  }
}

@media only screen and (min-width: 600px) {
  .flip-card-front {
    font-size: 2em !important;
  }
}

@media only screen and (min-width: 768px) {
  .flip-card-front {
    font-size: 2em !important;
  }
}

@media only screen and (min-width: 992px) {
  .flip-card-front {
    font-size: 2em !important;
  }
}

@media only screen and (min-width: 1200px) {
  .flip-card-front {
    font-size: 2em !important;
  }
}

@media only screen and (min-width: 1280px) {
  .flip-card-front {
    font-size: 1.8em !important;
  }
}

@media only screen and (min-width: 1680px) {
  .flip-card-front {
    font-size: 1.6em !important;
  }
}
</style>
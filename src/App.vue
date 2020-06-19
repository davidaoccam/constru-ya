<template>
  <div id="app">

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
          <ul>
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

  </div>
</template>

<script>
export default {
  name: "App",
  title: "Constru-YA!",
};
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
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
  font-size: 1.5em;
}

.flip-card-back h2 {
  color: #ff6300 !important;
}

.flip-card-back a {
  color: #ff6300 !important;
}

.flip-card-back {
  /*background-color: #2980b9;*/
  background-color: #000c9e;
  color: #fff;
  transform: rotateY(180deg);
}
</style>
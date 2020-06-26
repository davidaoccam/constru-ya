<template>
  <section class="row">
  <div class="col-12-xsmall col-12-small col-8-xlarge off-2-xlarge">
    <h3 class="major">Formulario de Precalificación Para Vivienda Prioritaria.</h3>
    <p>Queremos conocer mejor sus necesidades y preferencias para tener vivienda propia. Registre su interés (solo le llevará 1 minuto )<br>
    <span class="orangeText">*Obligatorio</span></p>

    <form
      method="post"
      action="#"
    >
      <div class="fields">
        <div class="field half">
          <input
            type="text"
            name="cya-name"
            id="cya-name"
            value=""
            placeholder="Nombre y apellido"
          />
          <label for="cya-name">Nombre y apellido<span class="orangeText">*</span></label>
        </div>
        <div class="field half">
          <input
            type="text"
            name="cya-DPI"
            id="cya-DPI"
            value=""
            placeholder="DPI"
          />
          <label for="cya-DPI">DPI<span class="orangeText">*</span></label>
        </div>
        <div class="field half">
          <input
            type="text"
            name="cya-NIT"
            id="cya-NIT"
            value=""
            placeholder="NIT"
          />
          <label for="cya-NIT">NIT<span class="orangeText">*</span></label>
        </div>
        <div class="field half">
          <input
            type="text"
            name="cya-telefono"
            id="cya-telefono"
            value=""
            placeholder="Teléfono"
          />
          <label for="cya-telefono">Número de teléfono<span class="orangeText">*</span></label>
        </div>
        <div class="field">
          <select
            name="cya-sexo"
            id="cya-sexo"
          >
            <option value="">-</option>
            <option value="1">Hombre</option>
            <option value="1">Mujer</option>
          </select>
           <label for="cya-sexo">Sexo<span class="orangeText">*</span></label>
        </div>
        <div class="field half">
          <input
            type="date"
            name="cya-nacimiento"
            id="cya-nacimiento"
            value=""
            placeholder="Fecha de nacimiento"
          />
          <label for="cya-email">Fecha de nacimiento<span class="orangeText">*</span></label>
        </div>
        <div class="field">
           <select
            name="cya-interes"
            id="cya-interes"
          >
            <option value="">-</option>
            <option value="1">Vivir en ella (solucionar una necesidad)</option>
            <option value="1">Como inversión (alquilarla o tener otra propiedad)</option>
          </select>
           <label for="cya-interes">Le interesa adquirir vivienda para:<span class="orangeText">*</span></label>
        </div>
        <div class="field">
           <select
            name="cya-estadoCivil"
            id="cya-estadoCivil"
          >
            <option value="">-</option>
            <option value="1">Soltero(a)</option>
            <option value="1">Casado(a)</option>
            <option value="1">Unido(a)</option>
          </select>
           <label for="cya-estadoCivil">Estado Civil<span class="orangeText">*</span></label>
        </div>
        <div class="field half">
          <input
            type="number"
            name="cya-totalPersonas"
            id="cya-totalPersonas"
            value=""
            placeholder=""
          />
          <label for="cya-totalPersonas">Número total de personas que habitarían en la vivienda<span class="orangeText">*</span></label>
        </div>
        <div class="field">
          <select
              name="cya-totalPersonas"
              id="cya-totalPersonas"
            >
              <option value="">-</option>
              <option value="1">Esposo(a)</option>
              <option value="1">1 hijo(a)</option>
              <option value="1">2 hijos(as)</option>
              <option value="1">3 hijos(as)</option>
              <option value="1">Más de 3 hijos(as)</option>
              <option value="1">Madre/Padre - Suegra/Suegro</option>
              <option value="1">Otro familiar</option>
              <option value="1">Soltero(a) / No sabe (estará en alquiler)</option>
            </select>
           <label for="cya-totalPersonas">Descripción de los integrantes del hogar que habitarían la vivienda<span class="orangeText">*</span></label>
        </div>
        <div class="field">
          <select
              name="cya-ingresos"
              id="cya-ingresos"
            >
              <option value="">-</option>
              <option value="1">Menor a Q5,500</option>
              <option value="1">Entre Q5,500 y Q8,250</option>
              <option value="1">Entre Q8,250 y Q11,000</option>
              <option value="1">Entre Q11,000 y Q15,000</option>
              <option value="1">Mayor a Q15,000</option>
            </select>
           <label for="cya-ingresos">Ubique sus ingresos familiares en una de las siguientes opciones:<span class="orangeText">*</span></label>
        </div>
        <div class="field half">
          <input
            type="text"
            name="cya-departamento"
            id="cya-departamento"
            value=""
            placeholder="Departamento"
          />
          <label for="cya-departamento">Departamento donde vive actualmente<span class="orangeText">*</span></label>
        </div>
       <div class="field half">
          <input
            type="text"
            name="cya-municipio"
            id="cya-municipio"
            value=""
            placeholder="Municipio"
          />
          <label for="cya-municipio">Municipio donde vive actualmente<span class="orangeText">*</span></label>
        </div>
        <div class="field">
          <select
              name="cya-ingresos"
              id="cya-ingresos"
            >
              <option value="">-</option>
              <option value="1">Sí</option>
              <option value="1">No</option>
            </select>
           <label for="cya-ingresos">¿Alquila actualmente?<span class="orangeText">*</span></label>
        </div>
        <div class="field">
          <select
              name="cya-alquiler"
              id="cya-alquiler"
            >
              <option value="">-</option>
              <option value="1">No paga (vive en casa de un familiar/amigo)</option>
              <option value="1">Menos de Q800</option>
              <option value="1">Entre Q800 y Q1,200</option>
              <option value="1">Entre Q1,200 y Q1,600</option>
              <option value="1">Entre Q1,600 y Q2,000</option>
              <option value="1">Entre Q2,000 y Q3,500</option>
              <option value="1">Entre Q3,500 y Q5,000</option>
              <option value="1">Más de Q5,000</option>
            </select>
           <label for="cya-alquiler">¿Cuánto paga de alquiler al mes?<span class="orangeText">*</span></label>
        </div>
        <div class="field">
          <select
              name="cya-terrenoPropio"
              id="cya-terrenoPropio"
            >
              <option value="">-</option>
              <option value="1">Sí</option>
              <option value="1">No</option>
            </select>
           <label for="cya-terrenoPropio">¿Tiene terreno Própio?<span class="orangeText">*</span></label>
        </div>
        <br><br>
        <div class="field half">
          <input
            type="checkbox"
            id="cya-autorizacion"
            name="cya-autorizacion"
          >
          <label for="cya-autorizacion">Conocimiento y autorización de uso de la información<span class="orangeText">*</span></label><br>
          Estoy enterado/a que la información de este formulario será utilizada por la Empresa Promotora de Vivienda Construya para conformar un registro de interesados en adquirir vivienda y para realizar análisis estadístico que sustente y oriente los programas de vivienda en Guatemala.
        </div>
      </div>
      <br><br>
      <ul class="actions">
        <li><input
            type="submit"
            value="Send Message"
            class="primary"
          /></li>
        <li><input
            type="reset"
            value="Reset"
          /></li>
      </ul>
    </form>
  </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
</style>
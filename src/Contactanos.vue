<template>
  <section class="row">
  <div class="col-12-xsmall col-12-small col-8-xlarge off-2-xlarge">
    <h3 class="major">Formulario</h3>
    <form
      method="post"
      action="#"
    >
      <div class="fields">
        <div class="field half">
          <label for="demo-name">Nombre</label>
          <input
            type="text"
            name="demo-name"
            id="demo-name"
            value=""
            placeholder="Tu Nombre Aquí"
          />
        </div>
        <div class="field half">
          <label for="demo-email">Correo Electrónico</label>
          <input
            type="email"
            name="demo-email"
            id="demo-email"
            value=""
            placeholder="TuCorreoElectronico@email.tld"
          />
        </div>
        <div class="field">
          <label for="demo-category">Categorías</label>
          <select
            name="demo-category"
            id="demo-category"
          >
            <option value="">-</option>
            <option value="1">Presupuestos</option>
            <option value="1">Preguntas Generales</option>
            <option value="1">Problema con el website</option>
          </select>
        </div>
        <div class="field half">
          <input
            type="checkbox"
            id="demo-copy"
            name="demo-copy"
          >
          <label for="demo-copy">Enviame una copia a mi correo electrónico</label>
        </div>
        <div class="field">
          <label for="demo-message">Mensaje</label>
          <textarea
            name="demo-message"
            id="demo-message"
            placeholder="Enter your message"
            rows="6"
          ></textarea>
        </div>
      </div>
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
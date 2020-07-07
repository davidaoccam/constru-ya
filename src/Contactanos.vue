<template>
  <section class="row">
    <div class="col-12-xsmall col-12-small col-8-xlarge off-2-xlarge">
      <h3 class="major">
        Formulario de Precalificación Para Vivienda Prioritaria.
      </h3>
      <p>
        Queremos conocer mejor sus necesidades y preferencias para tener
        vivienda propia. Registre su interés (solo le llevará 1 minuto )<br />
        <span class="orangeText">*Obligatorio</span>
      </p>

      <div>
        <div class="fields">
          <!-- form.nombre -->
          <div class="field half">
            <input
              type="text"
              value=""
              placeholder="Nombre y apellido"
              v-model.trim="$v.form.nombre.$model"
              :class="status($v.form.nombre)"
            />
            <label for="cya-name">Nombre y apellido<span class="orangeText">*</span></label>
          </div>
          <!-- form.dpi -->
          <div class="field half">
            <input
              type="text"
              value=""
              placeholder="DPI"
              v-model="$v.form.dpi.$model"
              :class="status($v.form.dpi)"
            />
            <label for="cya-DPI">DPI<span class="orangeText">*</span></label>
          </div>
          <!-- form.nit -->
          <div class="field half">
            <input
              type="text"
              value=""
              placeholder="NIT"
              v-model="$v.form.nit.$model"
              :class="status($v.form.nit)"
            />
            <label for="cya-NIT">NIT<span class="orangeText">*</span></label>
          </div>
          <!-- form.telefono -->
          <div class="field half">
            <input
              type="text"
              value=""
              placeholder="Teléfono"
              v-model="$v.form.telefono.$model"
              :class="status($v.form.telefono)"
            />
            <label for="cya-telefono">Número de teléfono<span class="orangeText">*</span></label>
          </div>
          <!-- form.genero -->
          <div class="field">
            <select
              v-model="$v.form.genero.$model"
              :class="status($v.form.genero)"
            >
              <option value="">-</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
            <label for="cya-sexo">Sexo<span class="orangeText">*</span></label>
          </div>
          <!-- form.nacimiento -->
          <div class="field half">
            <input
              type="date"
              value=""
              placeholder="Fecha de nacimiento"
              v-model="$v.form.nacimiento.$model"
              :class="status($v.form.nacimiento)"
            />
            <label for="cya-email">Fecha de nacimiento<span class="orangeText">*</span></label>
          </div>
          <!-- form.viviendaPara -->
          <div class="field">
            <select
              v-model="$v.form.viviendaPara.$model"
              :class="status($v.form.viviendaPara)"
            >
              <option value="">-</option>
              <option value="Vivir en ella (solucionar una necesidad)">Vivir en ella (solucionar una necesidad)</option>
              <option value="Como inversión (alquilarla o tener otra propiedad)">Como inversión (alquilarla o tener otra propiedad)</option>
            </select>
            <label for="cya-interes">Le interesa adquirir vivienda para:<span class="orangeText">*</span></label>
          </div>
          <!-- form.estadoCivil -->
          <div class="field">
            <select
              v-model="$v.form.estadoCivil.$model"
              :class="status($v.form.estadoCivil)"
            >
              <option value="">-</option>
              <option value="Soltero(a)">Soltero(a)</option>
              <option value="Casado(a)">Casado(a)</option>
              <option value="Unido(a)">Unido(a)</option>
            </select>
            <label for="cya-estadoCivil">Estado Civil<span class="orangeText">*</span></label>
          </div>
          <!-- form.personas -->
          <div class="field half">
            <input
              type="number"
              value=""
              placeholder=""
              v-model="$v.form.personas.$modal"
              :class="status($v.form.personas)"
            />
            <label for="cya-totalPersonas">Número total de personas que habitarían en la vivienda<span class="orangeText">*</span></label>
          </div>
          <!-- form.integrantes -->
          <div class="field">
            <select
              v-model="$v.form.integrantes.$model"
              :class="status($v.form.integrantes)"
            >
              <option value="">-</option>
              <option value="Esposo(a)">Esposo(a)</option>
              <option value="1 hijo(a)">1 hijo(a)</option>
              <option value="2 hijos(as)">2 hijos(as)</option>
              <option value="3 hijos(as)">3 hijos(as)</option>
              <option value="Más de 3 hijos(as)">Más de 3 hijos(as)</option>
              <option value="Madre/Padre - Suegra/Suegro">Madre/Padre - Suegra/Suegro</option>
              <option value="Otro familiar">Otro familiar</option>
              <option value="Soltero(a) / No sabe (estará en alquiler)">Soltero(a) / No sabe (estará en alquiler)</option>
            </select>
            <label for="cya-totalPersonas">Descripción de los integrantes del hogar que habitarían la
              vivienda<span class="orangeText">*</span></label>
          </div>
          <!-- form.ingreso -->
          <div class="field">
            <select
              v-model="$v.form.ingreso.$model"
              :class="status($v.form.ingreso)"
            >
              <option value="">-</option>
              <option value="Menor a Q5,500">Menor a Q5,500</option>
              <option value="Entre Q5,500 y Q8,250">Entre Q5,500 y Q8,250</option>
              <option value="Entre Q8,250 y Q11,000">Entre Q8,250 y Q11,000</option>
              <option value="Entre Q11,000 y Q15,000">Entre Q11,000 y Q15,000</option>
              <option value="Mayor a Q15,000">Mayor a Q15,000</option>
            </select>
            <label for="cya-ingresos">Ubique sus ingresos familiares en una de las siguientes
              opciones:<span class="orangeText">*</span></label>
          </div>
          <!-- form.departamento -->
          <div class="field half">
            <input
              type="text"
              value=""
              placeholder="Departamento"
              v-model="$v.form.departamento.$model"
              :class="status($v.form.departamento)"
            />
            <label for="cya-departamento">Departamento donde vive actualmente<span class="orangeText">*</span></label>
          </div>
          <!-- form.municipio -->
          <div class="field half">
            <input
              type="text"
              value=""
              placeholder="Municipio"
              v-model="$v.form.municipio.$model"
              :class="status($v.form.municipio)"
            />
            <label for="cya-municipio">Municipio donde vive actualmente<span class="orangeText">*</span></label>
          </div>
          <!-- form.alquila -->
          <div class="field">
            <select
              v-model="$v.form.alquila.$model"
              :class="status($v.form.alquila)"
            >
              <option value="">-</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
            <label for="cya-ingresos">¿Alquila actualmente?<span class="orangeText">*</span></label>
          </div>
          <!-- form.pagoAlquiler -->
          <div class="field">
            <select
              v-model="$v.form.pagoAlquiler.$model"
              :class="status($v.form.pagoAlquiler)"
            >
              <option value="-">-</option>
              <option value="No paga (vive en casa de un familiar/amigo)">No paga (vive en casa de un familiar/amigo)</option>
              <option value="Menos de Q800">Menos de Q800</option>
              <option value="Entre Q800 y Q1,200">Entre Q800 y Q1,200</option>
              <option value="Entre Q1,200 y Q1,600">Entre Q1,200 y Q1,600</option>
              <option value="Entre Q1,600 y Q2,000">Entre Q1,600 y Q2,000</option>
              <option value="Entre Q2,000 y Q3,500">Entre Q2,000 y Q3,500</option>
              <option value="Entre Q3,500 y Q5,000">Entre Q3,500 y Q5,000</option>
              <option value="Más de Q5,000">Más de Q5,000</option>
            </select>
            <label for="cya-alquiler">¿Cuánto paga de alquiler al mes?<span class="orangeText">*</span></label>
          </div>
          <!-- form.terreno -->
          <div class="field">
            <select
              v-model="$v.form.terreno.$model"
              :class="status($v.form.terreno)"
            >
              <option value="">-</option>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
            <label for="cya-terrenoPropio">¿Tiene terreno Própio?<span class="orangeText">*</span></label>
          </div>
          <br /><br />
          <!-- form.confirmacion -->
          <div class="field half">
            <input
              type="checkbox"
              id="cya-autorizacion"
              name="cya-autorizacion"
              value="false"
              v-model="form.confirmacion"
            />
            <label for="cya-autorizacion">Conocimiento y autorización de uso de la información<span class="orangeText">*</span></label><br />
            Estoy enterado/a que la información de este formulario será
            utilizada por la Empresa Promotora de Vivienda Construya para
            conformar un registro de interesados en adquirir vivienda y para
            realizar análisis estadístico que sustente y oriente los programas
            de vivienda en Guatemala.
          </div>
        </div>
        <br /><br />
        <ul class="actions">
          <li>
            <a
              href="#"
              class="button primary"
              :class="{
                disabled: enviando || !form.confirmacion || $v.$invalid,
              }"
              @click.prevent="enviar"
            >
              <i
                class="icon solid fa-sync fa-spin"
                v-if="enviando"
              ></i>
              <span v-if="!enviando">Enviar Mensaje</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <modal
      v-if="mostrarModal"
      @close="mostrarModal = false"
    >
      <p slot="body">{{ mensaje }}</p>
    </modal>
  </section>
</template>

<script>
import axios from "axios";
import crypto from "crypto";
import modal from "@/Modal.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "Contactanos",
  components: {
    modal,
  },
  data () {
    return {
      enviando: false,
      mostrarModal: false,
      mensaje: "",
      form: {
        nombre: "",
        dpi: "",
        nit: "",
        telefono: "",
        genero: "",
        nacimiento: null,
        viviendaPara: "",
        estadoCivil: "",
        personas: 0,
        integrantes: "",
        ingreso: "",
        departamento: "",
        municipio: "",
        alquila: "",
        pagoAlquiler: "",
        terreno: "",
        confirmacion: false,
      },
    };
  },
  validations: {
    form: {
      nombre: {
        required,
        minLength: minLength(5),
      },
      dpi: {
        required,
        minLength: minLength(13),
        maxLength: maxLength(13),
      },
      nit: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(20),
      },
      telefono: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(8),
      },
      genero: {
        required,
        minLength: minLength(3),
      },
      nacimiento: {
        required,
        minLength: minLength(3),
      },
      viviendaPara: {
        required,
        minLength: minLength(3),
      },
      estadoCivil: {
        required,
        minLength: minLength(3),
      },
      personas: {
        required,
        min: 1,
        max: 99,
      },
      integrantes: {
        required,
        minLength: minLength(3),
      },
      ingreso: {
        required,
        minLength: minLength(3),
      },
      departamento: {
        required,
        minLength: minLength(3),
      },
      municipio: {
        required,
        minLength: minLength(3),
      },
      alquila: {
        required,
        minLength: minLength(2),
      },
      pagoAlquiler: {
        required,
        minLength: minLength(1),
      },
      terreno: {
        required,
        minLength: minLength(2),
      },
    },
  },
  methods: {
    async enviar () {
      this.enviando = true;
      const self = this;
      try {
        const token = crypto.randomBytes(20).toString('hex');

        const hash = crypto.createHmac("sha256", token);
        hash.update(JSON.stringify(this.form));
        const sign = hash.digest("hex");

        await axios({
          timeout: 1000 * 30,
          method: "POST",
          url: "https://api.construya.com.gt/api/email/send",
          data: this.form,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
            Sign: sign,
          },
        })
          .then(() => {
            self.mensaje =
              "Su mensaje ha sido enviado y se revisará a la brevedad. Estaremos contactándole.";
          })
          .catch((errorAxios) => {
            console.log({ errorAxios });
            self.mensaje = `Ha ocurrido un error al enviar su mensaje: ${errorAxios}`;
          });
      } catch (errorGeneral) {
        console.log({ errorGeneral });
        this.mensaje = `Ha ocurrido un error al enviar su mensaje: ${errorGeneral.message}`;
      }
      this.enviando = false;
      this.mostrarModal = true;
    },
    status (validation) {
      return {
        error: validation.$error,
        dirty: validation.$dirty,
      };
    },
  },
};
</script>
<style scoped>
.fa-spin {
  display: block !important;
}

/*input {
  border: 1px solid silver;
  border-radius: 4px;
  background: white;
  padding: 5px 10px;
}
*/
.dirty {
  border-color: #5a5;
  background: #efe;
}

.dirty:focus {
  outline-color: #8e8;
}

.error {
  border-color: red;
  background: #fdd;
}

.error:focus {
  outline-color: #f99;
}
</style>

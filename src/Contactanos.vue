<template>
  <section>
    <div class="row">
      <div class="col-12-xsmall col-12-small col-8-xlarge off-2-xlarge">
        <h3 class="major align-left">
          Ubicación
        </h3>
        <p>
          Encuéntranos en Circunvalacion de Mazatenango KM 160 CA-2, junto a bóveda que va a San Francisco Zapotitlan, Mazatenango, Suchitepéquez.
        </p>
      </div>
    </div>
    <div class="row aln-center">
      <div class="col-12-xsmall col-12-small col-8-xlarge off-2-xlarge">
        <span class="image">
          <a
            href="https://www.google.com/maps/search/Ceramicas%20Modernas/@14.552201342124,-91.513599440087,17z"
            target="_blank"
          ><img
              src="/images/map.jpg"
              class="map-image"
            /></a>
        </span>
      </div>
    </div>
    <br>
    <br>
    <div class="row">
      <div class="col-12-xsmall col-12-small col-8-xlarge off-2-xlarge">
        <h3 class="major">
          Ponte en contacto con nosotros.
        </h3>
        <p>
          Queremos conocer tus comentarios, por favor llena el formulario para hacérnoslos llegar.<br />
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
            <!-- form.email -->
            <div class="field half">
              <input
                type="email"
                value=""
                placeholder="correo@ejemplo.com"
                v-model="$v.form.email.$model"
                :class="status($v.form.email)"
              />
              <label for="cya-telefono">Correo Electrónico<span class="orangeText">*</span></label>
            </div>
            <!-- form.mensaje -->
            <div class="field half">
              <textarea
                type="text"
                rows="5"
                placeholder="correo@ejemplo.com"
                v-model="$v.form.mensaje.$model"
                :class="status($v.form.mensaje)"
              />
              <label for="cya-telefono">Correo Electrónico<span class="orangeText">*</span></label>
          </div>
        </div>
        <br /><br />
        <ul class="actions">
          <li>
            <a
              href="#"
              class="button primary"
              :class="{
                disabled: enviando || $v.$invalid,
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

    </div>
    <modal
      v-if="mostrarModal"
      @close="modalCerrado"
    >
      <p slot="body">{{ mensaje }}</p>
    </modal>
  </section>
</template>

<script>
import axios from "axios";
import crypto from "crypto";
import modal from "@/Modal.vue";
import { required, minLength, maxLength, email, numeric } from "vuelidate/lib/validators";

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
      hayError: false,
      form: {
        nombre: "",
        telefono: "",
        email: "",
        mensaje: ""
      },
    };
  },
  validations: {
    form: {
      nombre: {
        required,
        minLength: minLength(5),
      },
      telefono: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(8),
        numeric
      },
      email: {
        required,
        email
      },
      mensaje: {
        required,
        minLength: minLength(10)
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
            self.hayError = true;
            console.log({ errorAxios });
            self.mensaje = `Ha ocurrido un error al enviar su mensaje: ${errorAxios}`;
          });
      } catch (errorGeneral) {
        this.hayError = true;
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
    modalCerrado () {
      this.mostrarModal = false
      if (!this.hayError)
        location.href = "contactanos"
    }
  },
};
</script>
<style scoped>
.fa-spin {
  display: block !important;
}
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
textarea {
  resize: none;
}
.map-image {
  border: 1px solid #ff6300 !important;
  max-width: 85%;
  max-height: 85%;
}
</style>

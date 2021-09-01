<template>
  <div>
    <v-row class="mx-auto">
      <v-col>
        <p class="text-lg-h3 text-sm-h1 text-center">
          Bienvenu dans la page d'enregistrement pour fournisseur
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="10" sm="12" md="10" class="mx-auto">
        <v-stepper flat v-model="e1">
          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1">
              Creation du compte
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step :complete="e1 > 2" step="2">
              Adresses et détails de la boutique
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3" :complete="e1 > 3">
              Informations de paiements
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="4" :complete="e1 > 4">
              Votre boutique
            </v-stepper-step>
            <v-divider></v-divider>

            <v-stepper-step step="5"> Verification </v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card flat class="mb-12">
                <v-row class="mx-auto pt-2">
                  <v-col lg="6" md="6" cols="12">
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="votre nom"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="votre prenom"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      append-icon="mdi-at"
                      rounded
                      label="votre email"
                    ></v-text-field>
                    <v-menu
                      v-model="menu"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          solo
                          dense
                          outlined
                          rounded
                          v-model="date"
                          label="date de naissance"
                          append-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        locale="fr-fr"
                        @input="menu = false"
                      ></v-date-picker>
                    </v-menu>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      placeholder="Votre adresse"
                    ></v-text-field>
                  </v-col>
                  <v-col lg="6" md="6" cols="12">
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      placeholder="Mot de passe"
                      v-model="password"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @click:append="show = !show"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      placeholder="Confirmer mot de passe"
                      v-model="passwordConfirm"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      placeholder="Numéro de téléphone"
                      append-icon="mdi-phone"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>

              <v-btn outlined small rounded color="success" @click="e1 = 2">
                Suivant
              </v-btn>

              <v-btn small rounded @click="previous" text> Annuler </v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <v-card flat class="mb-12">
                <v-row class="mx-auto pt-2">
                  <v-col lg="6" md="6" cols="12">
                    <v-select
                      solo
                      dense
                      outlined
                      rounded
                      label="Province"
                    ></v-select>
                    <v-select
                      solo
                      dense
                      outlined
                      rounded
                      label="Commune"
                    ></v-select>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="Adresse Complète"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="RCCM"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="Nom de votre boutique"
                    ></v-text-field>
                  </v-col>
                  <v-col lg="6" md="6" cols="12">
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="Numéro de la boutique"
                      append-icon="mdi-phone"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>

              <v-btn outlined small rounded color="success" @click="e1 = 1"
                >Précédent</v-btn
              >
              &nbsp;
              <v-btn outlined small rounded color="success" @click="e1 = 3">
                Suivant
              </v-btn>

              <v-btn small rounded @click="previous" text> Annuler </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-card flat class="mb-12" height="350px">
                <v-row class="mx-auto pt-2">
                  <v-col lg="6" md="6" sm="12">
                    <v-select
                      v-model="selected"
                      clearable
                      solo
                      dense
                      outlined
                      rounded
                      label="Nombre numéro"
                      :items="items"
                    ></v-select>
                    <v-text-field
                      v-for="(index, i) in selected"
                      :key="i"
                      solo
                      dense
                      outlined
                      rounded
                      label="Entrez le numéro"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>

              <v-btn outlined small rounded color="success" @click="e1 = 2"
                >Précédent</v-btn
              >
              &nbsp;
              <v-btn outlined small rounded color="success" @click="e1 = 4">
                Suivant
              </v-btn>

              <v-btn small rounded @click="previous" text> Annuler </v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <v-card flat class="mb-12" height="350px">
                <v-row class="mx-auto pt-2">
                  <v-col lg="6" md="6" cols="12">
                    <v-alert dense outlined type="info"
                      >Résumé de votre boutique</v-alert
                    >
                    <v-text-field
                      dense
                      outlined
                      prepend-inner-icon="mdi-pound"
                      rounded
                      readonly
                      label="Votre identifiant unique"
                    ></v-text-field>
                    <v-text-field
                      dense
                      outlined
                      rounded
                      readonly
                      label="Nom boutique"
                    ></v-text-field>
                    <v-text-field
                      dense
                      outlined
                      rounded
                      readonly
                      label="Adresse boutique"
                    ></v-text-field>
                    <v-text-field
                      dense
                      outlined
                      rounded
                      readonly
                      label="Votre numéro de paiement"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>

              <v-btn outlined small rounded color="success" @click="e1 = 3"
                >Précédent</v-btn
              >
              &nbsp;
              <v-btn outlined small rounded color="success" @click="e1 = 5">
                Suivant
              </v-btn>

              <v-btn small rounded @click="previous" text> Annuler </v-btn>
            </v-stepper-content>

            <v-stepper-content step="5">
              <v-card flat class="mb-12" height="350px">
                <v-row class="mx-auto pt-2">
                  <v-col lg="6" md="6" cols="12">
                    <v-alert type="info">
                      Nous vous avons envoyer un code dans votre email et
                      numéro(s) de téléphone. Veuillez les entrer pour confirmer
                      votre enregistrement
                    </v-alert>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="Code email"
                    ></v-text-field>
                    <v-text-field
                      solo
                      dense
                      outlined
                      rounded
                      label="Code téléphone"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card>

              <v-btn outlined small rounded color="success" @click="e1 = 4"
                >Précédent</v-btn
              >
              &nbsp;
              <v-btn outlined small rounded color="red" @click="createAccount">
                Créer
              </v-btn>

              <v-btn small rounded @click="previous" text> Annuler </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    previousRoute: null,
    e1: 1,
    show: null,
    show1: null,
    password: "",
    passwordConfirm: "",
    menu: null,
    date: "",
    items: [1, 2, 3],
    selected: 0,
  }),
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.previousRoute = from;
    });
  },
  methods: {
    ...mapActions(["setRegistry"]),
    previous() {
      this.setRegistry(false);
      this.$router.push(this.previousRoute.path);
    },
    createAccount() {
      this.setRegistry(false);
      console.log("creation du compte");
      this.$router.push(this.previousRoute.path);
    },
  },
};
</script>
<style>
.colored {
  background: #00b4db; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #0083b0,
    #00b4db
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
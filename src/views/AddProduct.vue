<template>
  <div>
    <v-row class="mx-auto mt-2">
      <v-col class="float-left" cols="1">
        <v-btn icon @click="previous">
          <v-icon size="40"> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col lg="6" md="6" cols="12">
        <v-card rounded="xl">
          <v-card-title class="text-h4"> Détails du produit </v-card-title>
          <v-card-text>
            <v-text-field
              rounded
              dense
              outlined
              label="Veuillez saisir le nom"
            ></v-text-field>
            <v-textarea
              label="Veuillez saisir une description"
              outlined
            ></v-textarea>
            <v-file-input
              rounded
              accept="image/png, image/jpeg, image/bmp, image/svg"
              label="Veuillez selectionner les photos"
              v-model="files"
              multiple
              chips
              outlined
              dense
              clearable
              :show-size="true"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip v-if="index < 2" small label color="primary">
                  {{ text }}
                </v-chip>
                <span v-else-if="index === 2">
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="6" md="6" cols="12">
        <v-card rounded="xl" class="pb-10">
          <v-card-title class="text-h4">
            Prix et options du produit
          </v-card-title>
          <v-card-text>
            <v-text-field
              rounded
              dense
              outlined
              label="Veuillez saisir le prix de vente"
              type="number"
            ></v-text-field>
            <v-text-field
              rounded
              dense
              outlined
              label="Veuillez saisir le prix pour avec une reduction (optionnelle)"
              type="number"
            ></v-text-field>
            <v-text-field
              rounded
              dense
              outlined
              label="Veuillez saisir quantité disponible"
              type="number"
            ></v-text-field>
            <v-checkbox
              dense
              v-model="checkbox"
              label="Ce produit est disponible en plusieurs options(version, taille)"
              @change="initArray"
            ></v-checkbox>
            <v-alert v-if="checkbox" type="info" dense
              >Veuillez saisir les options :</v-alert
            >
            <v-btn-toggle
              v-show="checkbox"
              v-for="(option, i) in options"
              :key="i"
            >
              <v-text-field
                rounded
                v-model="option.title"
                outlined
                dense
                :placeholder="`Option ${i}`"
              ></v-text-field>
              &nbsp;
              <v-text-field
                rounded
                v-model="option.description"
                outlined
                dense
              ></v-text-field>
              &nbsp;
              <v-btn text icon small class="mt-1" @click="deleteOption">
                <v-icon color="red">mdi-window-close</v-icon>
              </v-btn>
            </v-btn-toggle>
            <br />
            <v-btn
              v-if="checkbox"
              small
              rounded
              color="info"
              @click="addOption"
            >
              <v-icon>mdi-plus</v-icon> Ajouter une option
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mb-2 d-flex justify-center">
      <v-col lg="6" md="8" cols="12">
        <v-btn block large rounded color="success" @click="addProduct"
          >Ajouter le produit
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "../store/index"
import router from "../router/index"

export default {
  delimiters: ["${", "}"],
  data: () => ({
    previousRoute: null,
    checkbox: false,
    options: [],
    filelist: [],
    files: [],
  }),
  methods: {
    previous() {
      this.$router.push(this.previousRoute);
    },
    initArray() {
      if (this.options.length === 0) {
        this.options.push({ title: "", description: "" });
      } else {
        this.options = [];
      }
    },
    addOption() {
      this.options.push({ title: "", description: "" });
    },
    deleteOption() {
      this.options.splice(0, 1);
      if (this.options.length === 0) {
        this.checkbox = false;
      }
    },
    addProduct() {
      console.log(this.files.length);
    },
  },
  computed: {
  },
  beforeRouteEnter(to, from, next) {
    if (store.state.isLogin === false) {
      router.push("/login");
    } else {
      next((vm) => {
        vm.previousRoute = from;
      });
    }
  },
};
</script>

<style lang="scss" scoped></style>

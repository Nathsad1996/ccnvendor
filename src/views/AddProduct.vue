<template>
  <div>
    <v-row class="mx-auto mt-2">
      <v-col class="float-left" cols="1">
        <v-btn icon @click="previous">
          <v-icon size="40"> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mb-2">
      <v-col offset-lg="3" lg="6" md="6" cols="12">
        <v-card rounded="lg" class="pt-3 pb-3 pl-3 pr-3">
          <v-card-title
            class="d-flex justify-center text-center text-lg-h4 text-md-h4 text-md-h6"
            >les informations du produit</v-card-title
          >
          <v-divider></v-divider>
          &nbsp;
          <v-form>
            <v-text-field
              dense
              outlined
              label="Veuillez saisir le nom"
            ></v-text-field>
            <v-textarea
              label="Veuillez saisir une description"
              outlined
            ></v-textarea>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp, image/svg"
              label="Veuillez uploader un fichier"
              v-model="files"
              multiple
              chips
              outlined
              dense
              clearable
            ></v-file-input>
            <v-text-field
              dense
              outlined
              label="Veuillez saisir le prix de vente"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              label="Veuillez saisir le prix pour avec une reduction (optionnelle)"
            ></v-text-field>
            <v-text-field
              dense
              outlined
              label="Veuillez saisir quantité disponible"
            ></v-text-field>
            <v-checkbox
              dense
              v-model="checkbox"
              label="Ce produit est disponible en plusieurs option(version, taille)"
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
                v-model="option.title"
                outlined
                dense
                :placeholder="`Option ${i}`"
              ></v-text-field>
              &nbsp;
              <v-text-field
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
          </v-form>
          <v-card-actions class="mt-3">
            <v-btn block rounded color="success">Ajouter</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  delimiters: ["${", "}"],
  data: () => ({
    previousRoute: null,
    checkbox: false,
    options: [],
    filelist: [],
    files: [],
    rules: [
      (value) =>
        !value || value.size < 2000000 || "la photo ne doit pas depasser 2 Mo!",
    ],
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
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.previousRoute = from;
    });
  },
};
</script>

<style lang="scss" scoped></style>

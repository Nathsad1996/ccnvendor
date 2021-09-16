<template>
  <div>
    <v-row class="mx-auto mt-1">
      <v-col class="float-left" cols="1">
        <v-btn icon @click="previous">
          <v-icon size="40"> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-text-field
              outlined
              dense
              rounded
              v-model="search"
              label="Rechercher un produit"
              class="mx-4 pt-6"
              clearable
            ></v-text-field>

            <v-dialog v-model="dialogDelete" max-width="600px">
              <v-card>
                <v-card-title class="text-h5 d-flex justify-center"
                  >Voulez vous supprimer ce produit?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDialog"
                    >Annuler</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Oui</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- dialog pour edition et detail produit -->
            <v-dialog v-model="dialog" max-width="1200px">
              <v-card>
                <v-card-title>{{ title }}</v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row class="mx-auto">
                      <v-col lg="6" md="6" cols="12">
                        <v-card rounded="xl">
                          <v-card-title class="text-h4">
                            Détails du produit
                          </v-card-title>
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

                            <v-select
                              clearable
                              dense
                              :items="categories"
                              label="Selectionner une catégorie"
                              outlined
                              rounded
                            >
                            </v-select>
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
                                <v-chip
                                  v-if="index < 2"
                                  small
                                  label
                                  color="primary"
                                >
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
                              <v-btn
                                text
                                icon
                                small
                                class="mt-1"
                                @click="deleteOption"
                              >
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
                  </v-container>
                </v-card-text>
                <v-card-actions class="d-flex justify-center">
                  <v-btn text @click="closeDialog">Annuler</v-btn>
                  <v-btn text @click="save">Sauvegarder</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon color="success" class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon color="red" class="mr-2" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "../store/index";
import router from "../router/index";

export default {
  data: () => ({
    categories: ["TV", "Habits"],
    checkbox: false,
    options: [],
    filelist: [],
    files: [],
    previousRoute: null,
    item: {},
    search: "",
    dialogDelete: false,
    dialog: false,
    title: "",
    defaultItem: {},
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Iron (%)", value: "iron" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: "1%",
      },
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: "6%",
      },
    ],
  }),
  methods: {
    previous() {
      this.$router.push(this.previousRoute);
    },
    editItem(item) {
      this.item = this.desserts.indexOf(item);
      this.title = "Editer un produit";
      this.item = Object.assign({}, item);
      this.dialog = true;
      console.log(item);
    },
    deleteItem(item) {
      this.item = this.desserts.indexOf(item);
      this.item = Object.assign({}, item);
      this.dialogDelete = true;
      console.log(item);
    },
    infoItem(item) {
      this.item = this.desserts.indexOf(item);
      this.title = "Information sur le produit";
      this.item = Object.assign({}, item);
      this.dialog = true;
      console.log(item);
    },
    deleteItemConfirm() {
      const editedIndex = this.desserts.indexOf(this.item);
      this.desserts.splice(editedIndex, 1);
      this.closeDelete();
      console.log("Item deleted!");
    },
    initArray() {
      if (this.options.length === 0) {
        this.options.push({ title: "", description: "" });
      } else {
        this.options = [];
      }
    },
    closeDialog() {
      this.desserts.splice(this.item, 1);
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.item = Object.assign({}, this.defaultItem);
      });
    },
    save() {},
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
  computed: {},
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

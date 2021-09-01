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
            <v-dialog v-model="dialog" max-width="900px">
              <v-card>
                <v-card-title>{{ title }}</v-card-title>
                <v-card-actions>
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
            <v-icon color="info" @click="infoItem(item)">
              mdi-information
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
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
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.previousRoute = from;
    });
  },
};
</script>

<style lang="scss" scoped></style>

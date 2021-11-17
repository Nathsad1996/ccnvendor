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
      <v-col class="d-flex justify-center text-h3">
        Les commandes des clients
      </v-col>
    </v-row>
    <v-row class="mx-auto">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-dialog v-model="dialogOrder" max-width="600px">
              <v-card>
                <v-card-title class="text-h5 d-flex justify-center"
                  >Détail de la commande</v-card-title
                >
                <v-card-actions class="d-flex justify-center">
                  <v-btn color="blue darken-1" text @click="closeDialog"
                    >FERMER</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon
              color="success"
              v-show="item.status === 'confirmed' || item.status === 'pending'"
              class="mr-2"
              @click="confirmOrder(item)"
            >
              mdi-check-bold
            </v-icon>
            <v-icon
              color="red"
              v-show="item.status === 'rejected' || item.status === 'pending'"
              class="mr-2"
              @click="rejectOrder(item)"
            >
              mdi-close-thick
            </v-icon>
            <v-icon color="info" @click="OrderInfo(item)">
              mdi-information
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
    previousRoute: null,
    infoOrder: {},
    dialogOrder: false,
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Status Commande", value: "actions", sortable: false },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        status: "rejected",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        status: "confirmed",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        status: "pending",
      },
    ],
  }),
  methods: {
    previous() {
      this.$router.push(this.previousRoute);
    },
    confirmOrder(item) {
      if (item.status === "pending") {
        item.status = "confirmed";
        console.log(item);
      }
    },
    rejectOrder(item) {
      if (item.status === "pending") {
        item.status = "rejected";
        console.log(item);
      }
    },
    OrderInfo(item) {
      this.dialogOrder = true;
      console.log(item);
    },
    closeDialog() {
      this.dialogOrder = false;
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

<style lang="scss" scoped>
.confirmed {
  color: greenyellow;
}

.rejected {
  color: crimson;
}
</style>

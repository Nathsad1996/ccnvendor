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
          class="elevation-1"
        >
          <template v-slot:item.actions="{ item }">
            <v-icon color="success" class="mr-2" @click="editItem(item)">
              mdi-check-bold
            </v-icon>
            <v-icon color="red" class="mr-2" @click="deleteItem(item)">
              mdi-close-thick
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
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
      },
    ],
  }),
  methods: {
    previous() {
      this.$router.push(this.previousRoute);
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

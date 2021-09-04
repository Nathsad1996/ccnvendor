<template>
  <div>
    <v-row class="mx-auto mt-1">
      <v-col class="float-left" cols="1">
        <v-btn icon @click="previous">
          <v-icon size="40"> mdi-arrow-left </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col> account </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "../store/index"
import router from "../router/index"
export default {
  data: () => ({
    previousRoute: null,
  }),
  methods: {
    previous() {
      this.$router.push(this.previousRoute);
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

<style lang="scss" scoped>
</style>
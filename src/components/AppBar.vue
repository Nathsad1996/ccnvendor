<template>
  <v-app-bar height="70" app>
    <v-app-bar-nav-icon @click="goHome">
      <v-icon size="40">mdi-shopping</v-icon>
    </v-app-bar-nav-icon>

    <v-toolbar-title class="d-none d-sm-flex">CCN Fournisseurs</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn color="info" outlined rounded v-show="isLogin" @click="goShop">
      Aller au magasin &nbsp;
      <v-icon>mdi-arrow-right-circle</v-icon>
    </v-btn>

    <v-btn icon text v-show="isLogin">
    <v-icon class="ml-1" color="red"> mdi-logout </v-icon>
    </v-btn>


  </v-app-bar>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: () => ({}),
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goShop(){}
  },
  computed: {
    ...mapState(["isLogin"])
  },
};
</script>

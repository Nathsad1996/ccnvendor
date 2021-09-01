<template>
  <v-app>
    <AppBar></AppBar>
    <v-main>
      <slot></slot>
    </v-main>
    <v-footer app padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>CCN</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import AppBar from "../components/AppBar.vue";
export default {
  components: { AppBar },
};
</script>

<style lang="scss" scoped>
</style>
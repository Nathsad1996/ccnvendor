<template>
  <BaseLayout>
    <router-view></router-view>
  </BaseLayout>
</template> 

<script>
import BaseLayout from "./layouts/BaseLayout.vue";

export default {
  components: {
    BaseLayout,
  },
  name: "App",
  data: () => ({}),
  computed: {
    
  },
};
</script>

<template lang="">
  <div class="app_navigation">
    <v-navigation-drawer v-model="drawer" location="right" temporary>
      <p>this is me</p>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  inject: ["Emitter"],
  data() {
    return {
      drawer: false,
    };
  },
  mounted() {
    this.Emitter.on("openCart", () => (this.drawer = true));
  },
};
</script>

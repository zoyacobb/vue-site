<template>
  <UpperBanner />
  <TheFeatures />
  <TopOffer />
</template>

<script>
import UpperBanner from "@/components/Home/UpperBanner.vue";
import TheFeatures from "@/components/Home/TheFeatures.vue";
import TopOffer from "@/components/Home/TopOffer.vue";

export default {
  name: "HomeView",
  components: {
    UpperBanner,
    TheFeatures,
    TopOffer,
  },
};
</script>

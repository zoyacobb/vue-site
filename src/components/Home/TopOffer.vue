<template>
  <div class="top_offers">
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="top_offers_box" v-bind="props">
              <img
                :style="`scale : ${isHovering ? 1.09 : 1}`"
                src="@/assets/images/playstations.webp"
                alt="playstation-Image"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="top_offers_box" v-bind="props">
              <img
                :style="`scale : ${isHovering ? 1.09 : 1}`"
                src="@/assets/images/chairs.webp"
                alt="chairs-Image"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4">
          <v-hover v-slot="{ isHovering, props }">
            <div class="top_offers_box" v-bind="props">
              <img
                :style="`scale : ${isHovering ? 1.09 : 1}`"
                src="@/assets/images/headset.webp"
                alt="headset-Image"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="top_offers_box" v-bind="props">
              <img
                :style="`scale : ${isHovering ? 1.09 : 1}`"
                src="@/assets/images/iphones.webp"
                alt="iphones-Image"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div class="top_offers_box" v-bind="props">
              <img
                :style="`scale : ${isHovering ? 1.09 : 1}`"
                src="@/assets/images/laptops.webp"
                alt="laptops-Image"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "TopOffer",
};
</script>
<style lang="scss">
.top_offers {
  background: #f5f5f5;
  padding-top: 40px;
  &_box {
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      transition: 0.7s all ease-in-out;
      cursor: pointer;
    }
  }
}
</style>

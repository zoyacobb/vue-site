<template>
  <div class="upper_banner">
    <v-container>
      <v-row>
        <v-col cols="5">
          <div class="upper_banner_content">
            <h2><strong>Huge Saving </strong>on UHD Televisions</h2>
            <p>Sale up to 70% off on selected items*</p>
            <v-btn
              density="combact"
              class="upper_banner_main_btn"
              variant="outlined"
              >Shop Now</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.upper_banner {
  background: rebeccapurpleS;
  height: 500px;
  background-image: url("@/assets/images/banner-bg.jpg");
  background-size: cover;
  background-position: left top;
  &_content {
    padding: 100px 0;

    strong {
      color: #10ffda;
    }
    h2 {
      color: white;
      font-size: 50px;
      font-weight: 900;
    }
    p {
      color: white;
      font-size: 20px;
      margin-bottom: 40px;
    }
  }
  &_main_btn {
    // background: red !important;
    height: 50px !important;
    border-radius: 30px !important;
    padding: 0 30px !important;
    border-color: white !important;
    color: white !important;
  }
}
</style>

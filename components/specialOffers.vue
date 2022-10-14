<template>
  <div class="special-offer-section row">
    <CountDown class="col-xl-6 col-lg-6 col-md-6" />
    <Slider
      class="slidesSection col-xl-6 col-lg-6 col-md-6 d-flex align-items-center"
    />
  </div>
</template>
<script>
import CountDown from "@/components/subComponents/SpecialOfferFile/countDownSection.vue";
import Slider from "@/components/subComponents/SpecialOfferFile/slider.vue";
export default {
  components: {
    CountDown,
    Slider,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/specialOffer.scss";
</style>

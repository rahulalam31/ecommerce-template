<template>
  <div class="product-info-section row">
    <Slider class="col-xl-4 col-lg-4 col-md-8 col-sm-11 col-xs-11" />
    <ProductDetails class="col-xl-8 col-lg-8 col-md-12 col-sm-12" />
  </div>
</template>

<script>
import Slider from "@/components/subComponents/products/product/slider.vue";
import ProductDetails from "~/components/subComponents/products/product/productDetails.vue";

export default {
  components: {
    Slider,
    ProductDetails,
  },
};
</script>

<style lang="scss" scoped>
.product-info-section {
  margin-bottom: 55px;
  box-shadow: 1px 4px 23px -3px rgb(0 0 0 / 10%);
  padding: 34px 0 0 0;
  border-radius: 10px;
  margin: 10px 15px 55px 15px;
}
/** media query */

@include breakpoint(991px) {
  .product-info-section {
    justify-content: center !important;
    row-gap: 34px;
  }
}
@include breakpoint(635px) {
  .product-info-section {
    margin: 0;
    margin-top: 5px;
    padding: 34px 8px 0 8px;
  }
}
</style>

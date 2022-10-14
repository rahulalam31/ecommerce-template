<template>
  <section class="products">
    <TheHeader />
    <div class="container">
      <div class="banner-image">
        <img
          width="20"
          height="20"
          src="@/assets/images/nubelson-fernandes-lO-8kwA95vY-unsplash.webp"
          alt="محصولات"
          title="محصولات"
          loading="lazy"
        />
        <h2 class="title">محصولات</h2>
      </div>
      <div class="product-items-and-filter d-flex">
        <TheFilter @toggleSpinner="toggleSpinner" id="filter" ref="filter" />
        <ProductItems @activeFilter="activeFilter" class="" />
      </div>
    </div>
    <!--  spinner  -->

    <Spinner ref="spinnerLoader" />
  </section>
</template>

<script>
import TheHeader from "@/components/Header.vue";
import ProductItems from "@/components/subComponents/products/productItems.vue";
import TheFilter from "@/components/subComponents/products/filter.vue";
import Spinner from "@/components/subComponents/Spinner.vue";

export default {
  components: {
    TheHeader,
    ProductItems,
    TheFilter,
    Spinner,
  },
  methods: {
    activeFilter() {
      this.activeBodyOverflow();
      document.getElementById("filter").classList.toggle("active-filter");
    },

    toggleSpinner() {
      this.activeBodyOverflow();
      this.$refs.spinnerLoader.$el.classList.toggle("active-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/products.scss";
</style>

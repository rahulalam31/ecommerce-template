<template>
  <div class="related-product">
    <div class="section-header">
      <h3 class="info">محصولات مشابه</h3>
    </div>
    <div class="swiper-container" ref="relatedProduct">
      <div class="swiper-wrapper">
        <div
          v-for="product in products.slice(0, 10)"
          :key="product.id"
          class="swiper-slide slide d-flex flex-column"
        >
          <div class="header">
            <span class="category d-flex justify-content-center">گوشی</span>
            <h2 class="title d-flex justify-content-center">
              <a title="گوشی" href="#">گوشی موبایل سام سونگ</a>
            </h2>
          </div>
          <img
            loading="lazy"
            :src="product.image"
            alt="عکس"
            class="slide-image"
            title="عکس"
          />
          <div class="prices d-flex align-items-center justify-content-between">
            <div class="discount-and-price d-flex flex-column">
              <span class="price">10,000,000 تومان</span>
              <span class="discount-price">2000000</span>
            </div>
            <span class="icon-container">
              <img
                src="@/assets/icon/9045067_shopping_cart_arrow_down_icon.svg"
                alt="سبد خرید"
                title="سبد خرید"
                class="basket-icon"
                loading="lazy"
              />
            </span>
          </div>
        </div>
      </div>
      <div
        class="swiper-button-next swiper-button-next-special-offer mobile-pagination"
      ></div>
      <div
        class="swiper-button-prev swiper-button-prev-special-offer mobile-pagination"
      ></div>
    </div>
  </div>
</template>

<script>
//swiper js
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import Swiper, { Pagination, Navigation } from "swiper";
Swiper.use([Navigation, Pagination]);
export default {
  computed: {
    products() {
      return this.$store.state.LatestMobileFrame.products;
    },
  },
  mounted() {
    this.mountCarousel();
  },
  methods: {
    mountCarousel() {
      const carouselContainer = this.$refs.relatedProduct;
      new Swiper(carouselContainer, {
        centeredSlides: false,
        direction: "horizontal",
        loop: false,
        slidesPerView: 5,
        spaceBetween: 0,
        breakpoints: {
          1245: {
            slidesPerView: 5,
          },
          1048: {
            slidesPerView: 4,
          },
          960: {
            slidesPerView: 4,
          },
          660: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
          200: {
            slidesPerView: 1,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next-special-offer",
          prevEl: ".swiper-button-prev-special-offer",
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/products/relatedProduct.scss";
</style>

<template>
  <div class="instant-suggestion">
    <div class="instant-header">
      <span class="title">پیشنهاد لحظه ای </span>
    </div>

    <div class="instant-slides carousel swiper-container" ref="carousel">
      <div class="swiper-wrapper">
        <div
          v-for="product in products.slice(0, 10)"
          :key="product.id"
          class="slide swiper-slide d-flex flex-column"
        >
          <span class="discount-percent">3%</span>
          <div class="header">
            <span class="category d-flex justify-content-center">گوشی</span>
            <h2 class="title en-title d-flex">
              <a title="گوشی" href="#">Apple iPhone XS Mobile Phone</a>
            </h2>
            <h2 class="title d-flex justify-content-center">
              <a title="گوشی" href="#">گوشی موبایل سام سونگ</a>
            </h2>
          </div>
          <img
            loading="lazy"
            :src="product.image"
            alt="عکس"
            title="عکس"
            class="slide-image"
          />
          <div class="prices">
            <div class="discount-and-price d-flex align-items-center">
              <span class="price">10,000,000 تومان</span>
              <span class="discount-price">2,000,000</span>
            </div>
          </div>
          <div class="colors d-flex flex-column">
            <div class="color red"></div>
            <div class="color green"></div>
            <div class="color yellow"></div>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/style/scss/products/instantOffer.scss";
</style>
<script>
import Swiper, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css";
Swiper.use([Autoplay, Navigation, Pagination]);

export default {
  name: "z-carousel",

  mounted() {
    this.mountCarousel();
  },
  computed: {
    products() {
      return this.$store.state.LatestMobileFrame.products;
    },
  },
  methods: {
    mountCarousel() {
      const carouselContainer = this.$refs.carousel;
      new Swiper(carouselContainer, {
        autoplay: {
          disableOnInteraction: true,
          delay: 6700,
          pauseOnMouseEnter: true,
        },
        centeredSlides: true,
        direction: "horizontal",
        loop: true,
        slidesPerView: 1,
        spaceBetween: 1,
        pagination: {
          clickable: true,
          el: ".swiper-pagination",
        },
      });
    },
  },
};
</script>

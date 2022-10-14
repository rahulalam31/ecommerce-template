<template>
  <section class="hero-section">
    <div
      class="swiper-container row justify-content-center align-items-center"
      ref="carousel"
      :pagination="true"
    >
      <div class="swiper-wrapper">
        <slide
          class=" "
          v-for="product in products"
          :key="product.id"
          :title="product.title"
          :image="product.image"
          :info="product.info"
          :price="product.price"
        />
      </div>
      <div class="pagination-and-navigation">
        <div class="swiper-button-next"></div>
        <div
          class="swiper-pagination row align-items-center justify-content-center"
        ></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@import "@/assets/style/scss/heroSection.scss";
</style>

<script>
import Slide from "@/components/subComponents/heroSection/slide.vue";

//swiper js
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
export default {
  components: { Slide },
  computed: {
    products() {
      return this.$store.state.heroSection.products;
    },
  },
  mounted() {
    this.mountCarousel();
  },
  methods: {
    mountCarousel() {
      const carouselContainer = this.$refs.carousel;
      new Swiper(carouselContainer, {
        effect: "coverflow",
        centeredSlides: true,
        grabCursor: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        pagination: {
          clickable: true,
          el: ".swiper-pagination",
        },
      });
    },
  },
};
</script>

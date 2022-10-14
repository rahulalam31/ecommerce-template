<template>
  <div class="latest-mobile-frame">
    <div class="section-header d-flex flex-row">
      <h3 class="header d-flex align-items-center">جدیدترین قاب های موبایل</h3>
      <a  href="#" title="مشاهد همه" alt="مشاهده همه" class="button"
        >مشاهده همه</a
      >
    </div>
    <div
      class="swiper-container row justify-content-center align-items-center"
      ref="latestMobileFrame"
      :pagination="true"
    >
      <div class="swiper-wrapper slides d-flex justify-content-between">
        <Slide
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :price="product.price"
          :category="product.category"
          :header="product.header"
        />
      </div>
    </div>
    <div class="pagination-and-navigation">
      <div class="swiper-button-next swiper-button-next-latest-mobile"></div>
      <div class="swiper-button-prev swiper-button-prev-latest-mobile"></div>
    </div>

    <div
      class="swiper-button-next mobile-navigation swiper-button-next-latest-mobile"
    ></div>
    <div
      class="swiper-button-prev mobile-navigation swiper-button-prev-latest-mobile"
    ></div>
  </div>
</template>

<script>
import Slide from "@/components/subComponents/latestSmartWatch/slide.vue";

//swiper js
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";

// modules styles
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);
export default {
  components: {
    Slide,
  },
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
      const carouselContainer = this.$refs.latestMobileFrame;
      new Swiper(carouselContainer, {
        centeredSlides: false,
        direction: "horizontal",
        loop: false,
        slidesPerView: 4,
        spaceBetween: 34,
        breakpoints: {
          1560: {
            slidesPerView: 5,
          },
          1420: {
            slidesPerView: 4,
          },
          1048: {
            slidesPerView: 4,
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 21,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 21,
          },
          200: {
            spaceBetween: 21,
            slidesPerView: 1,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next-latest-mobile",
          prevEl: ".swiper-button-prev-latest-mobile",
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/LatestMobileFrame.scss";
</style>

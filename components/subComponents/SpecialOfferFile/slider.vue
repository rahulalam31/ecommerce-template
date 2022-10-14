<template>
  <div class="latest-mobile-frame">
    <div
      class="swiper-container row justify-content-center align-items-center"
      ref="specialOfferSlider"
    >
      <div class="swiper-wrapper slides d-flex justify-content-between">
        <Slide
          v-for="product in products"
          :key="product.id"
          :image="product.image"
          :price="product.price"
          :title="product.title"
        />
      </div>
    </div>
    <div class="pagination-and-navigation">
      <div class="swiper-button-next swiper-button-next-special-offer"></div>
      <div class="swiper-button-prev swiper-button-prev-special-offer"></div>
    </div>
    <div
      class="swiper-button-next swiper-button-next-special-offer mobile-pagination"
    ></div>
    <div
      class="swiper-button-prev swiper-button-prev-special-offer mobile-pagination"
    ></div>
    <!--
    <div class="swiper-button-next1 mobile-navigation"></div>
    <div class="swiper-button-prev1 mobile-navigation"></div> -->
  </div>
</template>
<script>
import Slide from "./slide.vue";

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
      return this.$store.state.specialOffer.products;
    },
  },
  mounted() {
    this.mountCarousel();
  },
  methods: {
    mountCarousel() {
      const carouselContainer = this.$refs.specialOfferSlider;
      new Swiper(carouselContainer, {
        centeredSlides: false,
        direction: "horizontal",
        loop: false,
        slidesPerView: 2,
        spaceBetween: 34,
        breakpoints: {
          1048: {
            slidesPerView: 2,
            spaceBetween: 34,
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 21,
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 21,
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
.latest-mobile-frame {
  padding-right: 0;
}
.swiper-container {
  padding: 34px 8px;
}
.pagination-and-navigation {
  position: absolute;
  top: 0%;
  left: 5%;
  width: 144px;
}
.swiper-button-next {
  left: 0;
  right: unset;
}
.swiper-button-prev {
  right: 0;
  left: unset;
}
.swiper-button-next,
.swiper-button-prev {
  z-index: 2;
  border-radius: 50%;
  background-color: #ffff;
  height: 50px;
  width: 50px;
  box-shadow: 0px 8px 18px 0px rgb(0 0 0 / 10%);
  transition: all 0.1s;
  &:active {
    box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 5%);
    transform: scale(0.9);
  }
}
.swiper-button-next::after {
  @include flex-center;
  content: "\003E";
  font-size: 24px;
  font-weight: 800;
  color: #333;
  background-color: #fff;
}
.swiper-button-prev::after {
  @include flex-center;
  content: "\003C";
  font-size: 24px;
  font-weight: 800;
  color: black;
  background-color: #fff;
}
.swiper-pagination {
  background-color: #fff;
  height: 41px;
  width: 100px;
  bottom: 50%;
  left: 50%;
  transform: translate(-35%, 55%);
  border-radius: 55px;
  box-shadow: 0px 5px 15px -1px rgb(0 0 0 / 15%);
  column-gap: 13px;
}
.mobile-pagination {
  display: none;
}

/** media query */
@include breakpoint(940px) {
  .swiper-slide {
    height: 330px;
  }
  .swiper-slide .product-image {
    height: 160px;
    width: 80%;
  }
  .pagination-and-navigation {
    position: absolute;
    top: 3%;
    left: 8%;
    width: 144px;
  }
  .swiper-container {
    padding: 21px 8px;
  }
}
@include breakpoint(767px) {
  .latest-mobile-frame {
    width: 90%;
    margin: 0 auto;
    padding-left: 0;
  }
  .pagination-and-navigation {
    display: none;
  }
  .mobile-pagination {
    display: flex;
  }
  .swiper-button-prev {
    right: -2%;
    left: unset;
  }
  .swiper-button-next {
    left: -2%;
    right: unset;
  }
  .swiper-button-next,
  .swiper-button-prev {
    height: 40px;
    width: 40px;
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1rem;
  }
}
</style>

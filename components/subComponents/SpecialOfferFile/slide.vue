<template>
  <div class="swiper-slide d-flex flex-column justify-content-between">
    <div class="body justify-content-center d-flex">
      <div class="content d-flex flex-column">
        <h3 class="header">{{ title }}</h3>

        <div class="prices m-0 d-flex align-items-center">
          <span class="price">{{ price }} </span>
          <span class="label">تومان</span>
          <div class="last-price">۲۰۰۰۰</div>
        </div>
      </div>
    </div>
    <img
      :src="image"
      alt="عکس"
      title="عکس"
      class="product-image d-flex justify-content-center"
      loading="lazy"
    />
  </div>
</template>

<script>
export default {
  props: ["title", "price", "image"],
};
</script>

<style scoped lang="scss">
.swiper-slide {
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);
  border-radius: 21px;
  width: 363px;
  height: 412px;
  overflow: hidden;
  row-gap: 21px;
  padding: 21px 21px;
  .product-image {
    width: 70%;
    margin: 0 auto;
    height: 230px;
  }
  .content {
    .header {
      font-size: 1.125rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      transition: all 0.2s;
      cursor: pointer;
      &:hover {
        color: $red-hover;
      }
    }
  }
  .prices {
    column-gap: 8px;
    margin-right: 21px !important;
    .price {
      font-size: 1rem;
      color: $font-red;
    }
    .label {
      font-size: 0.875rem;
      color: $font-red;
    }
    .last-price {
      text-decoration: line-through;
      font-size: 0.875rem;
      color: $forth-color;
    }
  }
}

//** media query */
@include breakpoint(1040px) {
  .swiper-slide {
    height: 352px;
  }
  .swiper-slide .product-image {
    height: 180px;
  }
}
@include breakpoint(1040px) {
  .swiper-slide .product-image {
    height: 190px;
  }
  .swiper-slide .content .header {
    font-size: 1rem;
  }
  .swiper-slide .prices .price {
    font-size: 0.875rem;
  }
  .swiper-slide .prices .price,
  .swiper-slide .prices .last-price {
    font-size: 0.6875rem;
  }
}
@include breakpoint(940px) {
  .swiper-slide {
    height: 330px;
  }
  .swiper-slide .product-image {
    height: 160px;
    width: 80%;
  }
}
@include breakpoint(767px) {
  .swiper-slide .product-image {
    height: 181px;
    width: 80%;
  }
}
@include sm {
  .swiper-slide .content .header {
    margin-bottom: 13px;
  }
  .swiper-slide .product-image {
    height: 170px;
    width: 70%;
  }
}
</style>

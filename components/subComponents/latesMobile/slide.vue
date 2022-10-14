<template>
  <div class="swiper-slide d-flex flex-column align-items-center">
    <div class="image-container">
      <img
        :src="image"
        alt="عکس"
        title="عکس"
        class="product-image d-flex justify-content-center"
        loading="lazy"
      />
      <div class="slide-option">
        <nuxt-link
          class="add-to-cart add-to-wish-list d-flex align-items-center justify-content-center"
          to="/product/2"
          alt="افزودن به لیست علاقه مندی"
          title="افزودن به لیست علاقه مندی"
        >
          <img
            class="cart-icon"
            src="@/assets/icon/lovers-heart.svg"
            alt="قلب"
            title="قلب"
            loading="lazy"
          /> </nuxt-link
        ><nuxt-link
          class="add-to-cart d-flex align-items-center justify-content-center"
          to="/product/2"
          alt="افزودن به سبد خرید"
          title="افزودن به سبد خرید"
        >
          <img
            class="cart-icon"
            src="@/assets/icon/cart.svg"
            alt="قاب"
            title="قاب"
            loading="lazy"
          />
        </nuxt-link>
      </div>
    </div>

    <div class="body align-items-center justify-content-center d-flex">
      <div class="content d-flex flex-column">
        <nuxt-link to="/product/2" class="header">{{ header }}</nuxt-link>

        <div class="prices m-0 d-flex align-items-center">
          <span class="price">{{ price }} </span>
          <span class="label">تومان</span>
          <div class="last-price">۲۰۰۰۰</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "header", "price", "category"],
};
</script>

<style scoped lang="scss">
.swiper-slide {
  background: none;
  border-radius: 21px;
  width: 19%;
  height: 412px;
  overflow: hidden;
  row-gap: 34px;

  .product-image {
    width: 70%;
    margin: 0 auto;
    height: 230px;
  }
  &:hover {
    .add-to-cart {
      opacity: 1;
    }
  }
  .image-container {
    width: 90%;
    position: relative;
    background: #fff;
    border-radius: 21px;
    padding: 25px 21px;
    margin: 0 auto;
    margin-top: 5px;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
  }

  &:hover .slide-option {
    animation: slideOption 0.3s forwards;
  }
  @keyframes slideOption {
    0% {
      transform: translateY(-150%);
    }
    75% {
      transform: translateY(15%);
    }
    to {
      transform: translateY(3%);
    }
  }
  .slide-option {
    transform: translateY(-150%);
    position: absolute;
    top: 3%;
    right: 3%;
  }
  .add-to-cart {
    box-shadow: 0px 10px 15px 0px hsla(0, 100%, 52%, 0.151);
    opacity: 1;
    height: 40px;
    width: 40px;
    background: #fff;
    border: 1px solid #ff6563;
    border-radius: 13px;
    margin-top: 13px;
    transition: all 0.3s;
    .cart-icon {
      width: 15px;
      height: 14px;
    }
    &:hover {
      background: #ff6563;
    }
    &:hover > .cart-icon {
      filter: brightness(0) saturate(100%) invert(100%) sepia(0%)
        saturate(7432%) hue-rotate(287deg) brightness(120%) contrast(97%);
    }
    .cart-icon {
      filter: brightness(0) saturate(100%) invert(60%) sepia(21%)
        saturate(4332%) hue-rotate(321deg) brightness(101%) contrast(106%);
    }
  }
  .add-to-wish-list {
    opacity: 1;
    box-shadow: none;
    border: none;
    background: #f1f1f1;

    transition: all 0.3s;
    .cart-icon {
      filter: none;
    }
  }
}

.content {
  row-gap: 5px;

  .header {
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      color: $red-hover !important;
    }
  }
}

.prices {
  column-gap: 8px;
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

/** media query */
@include xl {
  .swiper-slide {
    height: 380px;
  }
  .content .header {
    font-size: 1rem;
  }
}
@include lg {
  .swiper-slide {
    height: 380px;
  }
  .content .header {
    font-size: 0.9rem;
  }
  .swiper-slide .product-image {
    height: 200px;
  }
  .swiper-slide .add-to-cart,
  .swiper-slide .add-to-wish-list {
    height: 35px;
    width: 35px;
    border-radius: 10px;
  }
  .swiper-slide .add-to-cart .cart-icon,
  .swiper-slide .add-to-wish-list .cart-icon {
    width: 13px;
    height: 13px;
  }

  .prices {
    .last-price {
      font-size: 0.875rem;
    }
    .label {
      font-size: 0.6875rem;
    }
    .price {
      font-size: 0.875rem;
    }
  }
}
@include breakpoint(560px) {
  .swiper-slide {
    width: 100%;
  }
}
@include breakpoint(525px) {
  .latest-mobile-frame .section-header .header {
    font-size: 0.875rem;
  }

  .swiper-slide .product-image {
    width: 60%;
  }
  .swiper-slide .image-container {
    padding: 34px 21px;
    width: 93%;
  }
  .swiper-slide .product-image {
    height: 190px;
  }
}
@include sm {
  .swiper-slide .image-container {
    padding: 34px 21px;
    width: 90%;
  }
  .swiper-slide .product-image {
    height: 150px;
  }
}
</style>

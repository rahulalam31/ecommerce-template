<template>
  <div class="swiper-slide d-flex flex-column justify-content-between">
    <div class="body justify-content-between d-flex">
      <div class="content d-flex flex-column">
        <nuxt-link to="/product/2" title="هدر" class="header">{{
          header
        }}</nuxt-link>
        <a href="#" title="دسته بندی" alt="دسته بندی" class="category-name">{{
          category
        }}</a>
        <div class="prices m-0 d-flex align-items-center">
          <span class="price">{{ price }} </span>
          <span class="label">تومان</span>
          <div class="last-price">۲۰۰۰۰</div>
        </div>
      </div>
      <div class="slide-option">
        <nuxt-link
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
        <a
          class="add-to-cart add-to-wish-list d-flex align-items-center justify-content-center"
          href="#"
          alt="افزودن به لیست علاقه مندی"
          title="افزودن به لیست علاقه مندی"
        >
          <img
            class="cart-icon"
            src="@/assets/icon/lovers-heart.svg"
            alt="قلب"
            title="قلب"
            loading="lazy"
          />
        </a>
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
  props: ["image", "header", "price", "category"],
};
</script>

<style scoped lang="scss">
.swiper-slide {
  box-shadow: 0px 5px 15px -3px rgba(0, 0, 0, 0.1);

  border-radius: 21px;
  width: 19%;
  height: 412px;
  overflow: hidden;
  row-gap: 21px;
  padding: 21px 21px;
  transition: all 0.2s;
  .product-image {
    width: 90%;
    margin: 0 auto;
    height: 230px;
  }
  &:hover .add-to-wish-list {
    opacity: 1;
  }
  &:hover .add-to-cart {
    opacity: 1;
  }
  &:hover .slide-option {
    opacity: 1;
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
  &:hover {
    transform: translateY(-13px);
    box-shadow: 0px 15px 30px -3px rgba(0, 0, 0, 0.1);
  }
}
.body {
  .slide-option {
    position: absolute;
    left: 5%;
    transform: translateY(-150%);
    transition: all 0.3s;
  }
  .add-to-cart {
    box-shadow: 0px 10px 15px 0px hsla(0, 100%, 52%, 0.151);
    height: 40px;
    width: 40px;
    background: #fff;
    border: 1px solid #ff6563;
    border-radius: 13px;
    transition: all 0.3s;
    opacity: 0;
    .cart-icon {
      width: 18px;
      height: 15px;
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
    opacity: 0;
    box-shadow: none;
    border: none;
    background: #f1f1f1;
    margin-top: 13px;
    transition: all 0.3s;
    .cart-icon {
      filter: none;
    }
  }
}
.content {
  row-gap: 5px;
  width: 75%;
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
      color: $red-hover !important;
    }
  }
  .category-name {
    font-size: 0.75rem;
    color: $forth-color !important;
    margin-right: 21px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: #ff6563 !important;
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

/** media query */
@include xl {
  .swiper-slide {
    height: 380px;
  }
  .content .header {
    font-size: 1rem;
  }
  .swiper-slide .product-image {
    height: 200px;
  }

  .content .category-name,
  .content .prices {
    margin-right: 13px !important;
  }
}
@include lg {
  .swiper-slide {
    height: 350px;
  }
  .content .header {
    font-size: 0.9rem;
  }
  .swiper-slide .product-image {
    height: 160px;
  }
  .body .add-to-cart {
    height: 35px;
    width: 35px;
    border-radius: 10px;
  }
  .body .add-to-cart .cart-icon {
    width: 13px;
    height: 13px;
  }

  .content .category-name {
    font-size: 0.6875rem;
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
    width: 70%;
  }
  .content .category-name {
    font-size: 0.625rem;
  }
  .prices {
    .last-price {
      font-size: 0.75rem;
    }
    .label {
      font-size: 0.625rem;
    }
    .price {
      font-size: 0.75rem;
    }
  }
}
</style>

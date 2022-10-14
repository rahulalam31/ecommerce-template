<template>
  <div class="swiper-slide row align-items-center justify-content-center">
    <img
      class="slide-img col-8 row p-0"
      :src="image"
      alt="گوشی"
      title="گوشی"
      loading="lazy"
    />
    <div class="content col-4 d-flex flex-column col-4 p-0">
      <NuxtLink to="/product/1" title="عنوان" class="header">{{
        title
      }}</NuxtLink>
      <span class="info">
        {{ info }}
      </span>
      <div class="prices m-0 row columns align-items-center">
        <span class="price">{{ price }}</span>
        <span class="label">تومان</span>
      </div>
      <nuxt-link
        to="/product/2"
        title="عنوان"
        alt="عنوان"
        class="button justify-content-center align-items-center row columns m-0"
      >
        <img
          class="icon"
          src="@/assets/icon/cart.svg"
          alt="سبد"
          title="سبد"
          loading="lazy"
        />
        <span class="title">اضافه به سبد خرید</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "info", "title", "price"],
};
</script>
<style scoped lang="scss">
.swiper-slide {
  width: 50%;
  position: relative;
  flex-wrap: nowrap;
  .slide-img {
    max-width: 500px;
    max-height: 480px;
  }
  .content {
    display: none !important;
    opacity: 0;
    color: $secondary-color;
    transform: scale(0.97);
    transform: translateX(55px);

    row-gap: 21px;
    .header {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 2rem;
      transition: all 0.2s;
      &:hover {
        color: $red-hover !important;
      }
    }
    .info {
      width: 100%;
      font-size: 0.75rem;
      line-height: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }

  .prices {
    .price {
      margin-left: 8px;
      font-size: 1.25rem;
    }
    .label {
      font-size: 0.9rem;
    }
  }
  .button {
    position: relative;
    column-gap: 10px;
    width: 168px;
    height: 55px;
    border: double 2px transparent;
    border-radius: 30px;
    transition: all 1.4s;
    transition-delay: 0.4s;
    overflow: hidden;
    background-image: linear-gradient(white, white),
      linear-gradient(
        90deg,
        rgba(194, 141, 255, 1) 0%,
        rgba(194, 141, 255, 1) 35%,
        rgba(252, 158, 173, 1) 100%
      );
    background-origin: border-box;
    background-clip: content-box, border-box;
    .icon {
      max-width: 18px;
      max-height: 18px;
      z-index: 1;
    }
    .title {
      font-size: 0.75rem;
      z-index: 1;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 100%;

      transition: all 0.3s;
      border-radius: 30px;

      background: linear-gradient(
        90deg,
        rgba(194, 141, 255, 1) 0%,
        rgba(194, 141, 255, 1) 35%,
        rgba(252, 158, 173, 1) 100%
      );
    }

    &:hover:after {
      width: 100%;
    }
    &:hover {
      background-image: none;
    }
    &:hover > .title {
      color: #fff;
    }
    &:hover > .icon {
      filter: brightness(0) saturate(100%) invert(99%) sepia(0%) saturate(7486%)
        hue-rotate(135deg) brightness(96%) contrast(111%);
    }
  }
}
@keyframes show {
  0% {
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform: translateX(0);
  }
}

.swiper-slide-active .slide-img {
  transition: all 0.4s;
}
.swiper-slide-active .slide-img {
  transform: scaleY(1.07);
}
.swiper-slide-active .content {
  animation: show 0.6s ease-in-out forwards;
  display: flex !important;
}

/** media query */

@include breakpoint(1290px) {
  .swiper-slide .content .header {
    font-size: 1.8rem;
  }
}
@include breakpoint(1170px) {
  .swiper-slide {
    width: 60%;
  }
}

@include lg {
  .swiper-slide {
    column-gap: 13px;
    .slide-img {
      max-width: 380px;
      max-height: 380px;
    }
  }
  .swiper-slide .content .header {
    font-size: 1.375rem;
  }
  .swiper-slide .content .info {
    font-size: 0.625rem;
  }
  .swiper-slide .content {
    row-gap: 13px;
  }
  .swiper-slide .button {
    width: 135px;
    height: 45px;
  }
  .swiper-slide .button .icon {
    max-width: 13px;
    max-height: 13px;
  }
  .swiper-slide .button .title {
    font-size: 0.625rem;
  }
}
@include md {
  .swiper-slide {
    width: 63%;
    .slide-img {
      max-width: 330px;
      max-height: 330px;
    }
  }
}
@include breakpoint(690px) {
  .swiper-slide .content .header {
    font-size: 1.25rem;
  }
  .swiper-slide {
    width: 80%;
    .slide-img {
      max-width: 350px;
      max-height: 330px;
    }
  }
  .swiper-slide .prices .price {
    font-size: 1.125rem;
  }
  .swiper-slide .prices .label {
    font-size: 0.875rem;
  }
  .swiper-slide .button {
    width: 125px;
    height: 40px;
  }
  .swiper-slide .content {
    row-gap: 8px;
  }
}
@include breakpoint(560px) {
  .swiper-slide {
    width: 90%;
    .slide-img {
      max-width: 350px;
      max-height: 300px;
    }
  }
}
@include sm {
  .swiper-slide {
    width: 95%;
    .slide-img {
      max-width: 250px;
      max-height: 260px;
    }
  }
  .swiper-slide .content .header {
    font-size: 1rem;
  }

  .swiper-slide .prices .price {
    font-size: 0.875rem;
  }
  .swiper-slide .prices .label {
    font-size: 0.75rem;
  }
  .swiper-slide .button {
    column-gap: 5px;
    width: 110px;
    height: 35px;
    .title {
      font-size: 0.5rem;
    }
  }
  .swiper-slide .content {
    row-gap: 8px;
  }
  .swiper-slide .button .icon {
    max-width: 10px;
    max-height: 10px;
  }
}
</style>

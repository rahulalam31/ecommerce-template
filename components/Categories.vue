<template>
  <section class="categories">
    <div class="categories-container">
      <div class="slides row justify-content-between">
        <div class="slide col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <img
            src="@/assets/images/phonecase-2.webp"
            title="موبایل"
            alt="موبایل"
            class="slide-image"
            loading="lazy"
          />
          <h3 class="header">لوازم جانبی</h3>
          <img
            src="@/assets/icon/mobile.svg"
            title="موبایل"
            alt="موبایل"
            class="icon"
            loading="lazy"
          />
          <nuxt-link
            class="button d-flex align-items-center justify-content-center"
            to="/products"
            title="خرید"
            alt="خرید"
            >خرید
          </nuxt-link>
          <img
            src="@/assets/images/Path224.webp"
            title="بک گراند"
            alt="بک گراند"
            class="slide-bg"
            loading="lazy"
          />
        </div>
        <div class="slide col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <img
            src="@/assets/images/mobile.webp"
            title="موبایل"
            alt="موبایل"
            class="slide-image"
            loading="lazy"
          />
          <h3 class="header">ساعت هوشمند</h3>
          <img
            src="@/assets/icon/mobile.svg"
            title="موبایل"
            alt="موبایل"
            class="icon"
            loading="lazy"
          />
          <nuxt-link
            class="button d-flex align-items-center justify-content-center"
            to="/products"
            title="خرید"
            alt="خرید"
            >خرید
          </nuxt-link>
          <img
            src="@/assets/images/Path224.webp"
            title="بک گراند"
            alt="بک گراند"
            class="slide-bg"
            loading="lazy"
          />
        </div>
        <div class="slide col-xl-4 col-lg-4 col-md-4 col-sm-6">
          <img
            src="@/assets/images/adsda.webp"
            title="موبایل"
            alt="موبایل"
            class="slide-image"
            loading="lazy"
          />
          <h3 class="header">گوشی موبایل</h3>
          <img
            src="@/assets/icon/mobile.svg"
            title="موبایل"
            alt="موبایل"
            class="icon"
            loading="lazy"
          />

          <nuxt-link
            class="button d-flex align-items-center justify-content-center"
            to="/products"
            title="خرید"
            alt="خرید"
            >خرید
          </nuxt-link>
          <img
            src="@/assets/images/Path224.webp"
            title="بک گراند"
            alt="بک گراند"
            class="slide-bg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/categories.scss";
</style>

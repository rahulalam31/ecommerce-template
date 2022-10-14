<template>
  <section class="product">
    <TheHeader />
    <div class="container">
      <nav class="nav-links">
        <ul class="navs">
          <li class="nav">
            <a title="دیجیتال" href="#">کالای دیجیتال</a>
          </li>
          <li class="nav">
            <a title="موبایل" href="#">موبایل</a>
          </li>
          <li class="nav">
            <a title="موبایل" href="#">گوشی موبایل</a>
          </li>
          <li class="nav">
            <a title="بک بری" href="#">بلک بری</a>
          </li>
          <li class="nav">
            <a title="بک بری" href="#">بلک بری</a>
          </li>
          <li class="nav">
            <a title="بک بری" href="#">بلک بری</a>
          </li>
          <li class="nav">
            <a title="بک بری" href="#">بلک بری</a>
          </li>
        </ul>
      </nav>
      <ProductInfo />
      <div
        class="comments-and-Specifications-nav d-flex justify-content-center"
      >
        <div
          @click="setNav('specifications')"
          :class="{ activeNav: nav === 'specifications' }"
          class="Specifications-tab d-flex justify-content-center align-items-center"
        >
          <img
            src="@/assets/icon/3586362_checklist_document_list_paper_icon.svg"
            alt="کامنت"
            title="کامنت"
            loading="lazy"
            class="icon"
          />
          <span>مشخصات</span>
        </div>
        <div
          @click="setNav('comments')"
          v-bind:class="{ activeNav: nav === 'comments' }"
          class="comments-tab d-flex justify-content-center align-items-center"
        >
          <img
            src="@/assets/icon/4243269_basic_app_chat_ux_icon.svg"
            alt="کامنت"
            title="کامنت"
            loading="lazy"
            class="icon"
          />
          <span> دیدگاه کاربران</span>
        </div>
      </div>
      <Specifications v-if="nav === 'specifications'" />
      <UserComments v-if="nav === 'comments'" />
      <RelatedProducts />
      <div class="product-id d-flex justify-content-center">
        <span class="product-number">شناسه کالا: 515656565</span>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from "@/components/Header.vue";
import NewsLetter from "@/components/newsLetter.vue";
import ProductInfo from "~/components/subComponents/products/product/ProductInfo.vue";
import RelatedProducts from "~/components/subComponents/products/product/relatedProducts.vue";
import Specifications from "~/components/subComponents/products/product/Specifications.vue";
import UserComments from "~/components/subComponents/products/product/userComments.vue";
export default {
  components: {
    TheHeader,
    NewsLetter,
    ProductInfo,
    RelatedProducts,
    Specifications,
    UserComments,
  },

  data() {
    return {
      nav: "specifications",
    };
  },
  methods: {
    setNav(data) {
      this.nav = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/product.scss";
</style>

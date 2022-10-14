<template>
  <div class="product-info">
    <div class="product-detail-and-seller-info row">
      <div class="product-detail col-7">
        <div class="user-reaction d-flex align-items-center">
          <div class="stars d-flex">
            <img
              loading="lazy"
              v-for="index in 5"
              :key="index"
              class="icon-star"
              src="@/assets/icon/430117_star_icon.svg"
              alt="ستاره"
              title="ستاره"
            />
          </div>
          <span class="user-comments"
            ><span class="number">0</span> دیدگاه کاربران</span
          >
          <span class="user-qa"
            ><span class="number">0</span> دیدگاه کاربران</span
          >
        </div>
        <div class="product-title">
          <h1 class="pe-title">
            تبلت سامسونگ مدل Galaxy Tab A7 Lite SM-T225 ظرفیت 32 گیگابایت
          </h1>
          <span class="label">غیر اصل</span>
          <h1 class="en-title">
            Samsung Galaxy Tab A7 Lite SM-T225 32GB Tablet
          </h1>
        </div>
        <div class="brand-and-category d-flex">
          <div class="category">
            <span class="category-title"> برند:</span>
            <a href="#" title="بلک بری" class="category-name"> بلک بری</a>
          </div>
          <div class="brand">
            <span class="brand-title"> دسته بندی:</span>
            <a href="#" title="گوشی" class="brand-name">گوشی موبایل</a>
          </div>
        </div>
        <div class="colors d-flex align-items-center">
          <span class="color">رنگ :</span>
          <label class="checkbox d-flex align-items-center">
            <input
              class="white-radio"
              type="radio"
              name="selectColor"
              @change="changeBorderColor($event, '#333')"
            />

            <span class="checkmark"> سفید برفکی </span>
          </label>
          <label class="checkbox d-flex align-items-center">
            <input
              @change="changeBorderColor($event, '#ff01fe')"
              class="pink-radio"
              type="radio"
              name="selectColor"
            />

            <span class="checkmark">صورتی</span>
          </label>
        </div>
        <div class="technical-specifications">
          <h2>مشخصات فنی:</h2>
          <div
            class="specification-container"
            v-for="index in technicalSpecifications"
            :key="index"
          >
            <p v-if="index <= technicalSpecificationsLimit">
              <span>حافظه داخلی: 64 گیگابایت</span>
            </p>
          </div>

          <span
            v-if="technicalSpecifications > 3"
            class="more"
            id="moreBtn"
            title="بیشتر"
            @click="showMoreSpecifications"
          >
            {{ this.moreBtnValue }}
          </span>
        </div>
      </div>
      <div class="seller-info col-5">
        <div class="user-recommend d-flex flex-column justify-content-center">
          <img
            loading="lazy"
            class="check-icon align-self-center"
            src="@/assets/icon/299110_check_sign_icon.svg"
            alt="تیک"
            title="تیک"
          />
          <p class="text-center">
            7 نفر از خریداران این محصول را پیشنهاد داده اند
          </p>
        </div>
        <div class="seller-detail">
          <div class="seller-style seller-name">
            <img
              loading="lazy"
              class="check-icon icon align-self-center"
              src="@/assets/icon/8672959_ic_fluent_checkmark_starburst_filled_icon.svg"
              alt="تیک"
              title="تیک"
            />
            <h2 class="name">خدامهر</h2>
          </div>
          <div
            class="seller-style seller-store-name d-flex justify-content-between"
          >
            <div class="icon-and-title d-flex">
              <img
                loading="lazy"
                class="store-icon icon align-self-center"
                src="@/assets/icon/326704_store_icon.svg"
                alt="تیک"
                title="تیک"
              />
              <h2 class="name d-flex align-items-center">فروشنده:</h2>
            </div>
            <a href="#" title="لوازم خانگی خدامهر" class="name"
              >لوازم خانگی خدامهر</a
            >
          </div>
          <div
            class="seller-style product-barcode d-flex justify-content-between"
          >
            <div class="icon-and-title">
              <img
                loading="lazy"
                class="barcode-icon icon align-self-center"
                src="@/assets/icon/3702397_barcode_code_scan_scanner_icon.svg"
                alt="تیک"
                title="تیک"
              />
              <span class="name">شناسه کالا برای سفارش پیامکی:</span>
            </div>
            <span class="title value">82</span>
          </div>
        </div>
      </div>
      <div class="inventory-status d-flex align-items-center">
        <img
          loading="lazy"
          class="time-icon"
          src="@/assets/icon/8664824_hourglass_time_icon.svg"
          alt="زمان"
          title="زمان"
        />
        <span class=""> تامین کالا از 2 روز دیگر</span>
      </div>
      <div class="price-boxes">
        <div class="prices-and-counter d-flex justify-content-between">
          <div class="prices d-flex justify-content-center flex-column">
            <div class="first-row">
              <span class="discount-price">2000000</span>
              <span class="discount-percent">20%</span>
            </div>
            <span class="price">2000000 تومان</span>
          </div>
          <div
            class="counter-container d-flex justify-content-center flex-column"
          >
            <div class="first-row d-flex">
              <div class="counter">
                <button class="decrease" @click="decreaseItem">-</button>
                <span>{{ data }}</span>
                <button class="increase" @click="increaseItem">+</button>
              </div>
              <button class="btn add-cart">افزودن به سید خرید</button>
            </div>
            <div class="club-score d-flex justify-content-end">
              <img
                class="coin-icon"
                src="@/assets/icon/653278_coin_bitcoin_cash_currency_dollar_icon.png"
                alt="زمان"
                loading="lazy"
                title="زمان"
              />
              <span class="score">20 امتیاز کلاب</span>
            </div>
          </div>
        </div>
      </div>
      <div class="options d-flex align-content-center">
        <div class="favorites d-flex align-items-center">
          <div class="icon-container">
            <img
              loading="lazy"
              class="like-icon icon"
              src="@/assets/icon/5876872_heart_like_love_valentine_icon.svg"
              alt="لایک"
              title="زمان"
            />
          </div>
          <span>علاقه مندی</span>
        </div>
        <div class="compare d-flex align-items-center">
          <div class="icon-container">
            <img
              loading="lazy"
              class="compare-icon icon"
              src="@/assets/icon/8674494_ic_fluent_branch_compare_regular_icon.svg"
              alt="مقایسه"
              title="مقایسه"
            />
          </div>
          <span>مقایسه</span>
        </div>
        <div
          @click="$refs.SharingModal.activePopUpSlider()"
          class="shares d-flex align-items-center"
        >
          <div class="icon-container">
            <img
              loading="lazy"
              class="share-icon icon"
              src="@/assets/icon/1814118_graph_network_share_social_icon.svg"
              alt="اشتراک"
              title="اشتراک"
            />
          </div>
          <span>اشتراک گزاری</span>
        </div>
      </div>
    </div>
    <SharingModal ref="SharingModal" />
  </div>
</template>

<script>
import SharingModal from "./sharingModal.vue";
export default {
  components: {
    SharingModal,
  },
  data() {
    return {
      data: 0,
      technicalSpecifications: 5,
      technicalSpecificationsLimit: 3,
      moreBtnValue: "+ نمایش بیشتر",
    };
  },

  methods: {
    increaseItem() {
      this.data++;
    },
    decreaseItem() {
      if (this.data <= 0) {
        this.data = 0;
      } else {
        this.data--;
      }
    },

    //show more Specifications

    showMoreSpecifications() {
      if (this.technicalSpecificationsLimit === 3) {
        this.technicalSpecificationsLimit = this.technicalSpecifications;

        if (this.technicalSpecificationsLimit >= 3) {
          if (this.moreBtnValue === "+ نمایش بیشتر") {
            this.moreBtnValue = "- نمایش کمتر";
          }
        }
      } else {
        this.technicalSpecificationsLimit = 3;
        this.moreBtnValue = "+ نمایش بیشتر";
      }
    },
    //change border of radio label

    changeBorderColor(event, color) {
      const checkboxLabels = document.querySelectorAll(".checkbox");
      checkboxLabels.forEach((item) => {
        item.style.borderColor = "#a1a1a1";
      });
      event.target.parentNode.style.borderColor = `${color}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/style/scss/products/productDetails.scss";
</style>

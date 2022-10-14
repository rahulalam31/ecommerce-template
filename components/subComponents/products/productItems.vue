<template>
  <div class="product-items">
    <div class="product-container">
      <div class="navs d-flex justify-content-between">
        <div class="sorting d-flex align-items-center">
          <div
            @click="activeSortingFilter"
            class="title-container d-flex align-items-center"
          >
            <img
              class="icon"
              src="@/assets/icon/6351911_arrows_ascending_down_sort_sorting_icon.svg"
              loading="lazy"
              alt="منو"
              title="منو"
            />
            <span class="title d-flex align-items-center">
              {{ selectedSorting }}
            </span>
          </div>
          <select class="select">
            <option
              class=""
              v-for="(text, value) in options"
              :key="value"
              :value="value"
            >
              {{ text }}
            </option>
          </select>
        </div>

        <div class="filtering d-flex align-items-center">
          <span>فیلتر</span>
          <div @click="$emit('activeFilter')" class="icon-container">
            <img
              class="icon"
              src="@/assets/icon/8324265_ui_essential_app_filter_options_icon.svg"
              loading="lazy"
              alt="فیلتر"
              title="فیلتر"
            />
          </div>
        </div>
        <div class="showing-details d-flex align-items-center">
          <span class="showed-product">نمایش 1 تا 28 از 3000 کالا</span>
          <b-button
            @click="setActiveOrder('multiple')"
            :class="{ 'active-order': orderValue === 'multiple' }"
            class="icon-container"
            v-b-tooltip.hover
            title="نمایش بصورت چندتایی"
          >
            <img
              class="icon"
              src="@/assets/icon/2123897_app_essential_menu_ui_icon.svg"
              loading="lazy"
              alt="منو"
              title="منو"
            />
          </b-button>
          <b-button
            :class="{ 'active-order': orderValue === 'single' }"
            @click="setActiveOrder('single')"
            class="icon-container"
            v-b-tooltip.hover
            title="نمایش بصورت تکی"
          >
            <img
              class="icon"
              src="@/assets/icon/134216_menu_lines_hamburger_icon.svg"
              loading="lazy"
              alt="منو"
              title="منو"
            />
          </b-button>
        </div>
      </div>
      <div
        ref="singleOrder"
        :class="{ 'single-order': orderValue === 'single' }"
        class="slides"
      >
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="slide d-flex flex-column"
        >
          <span :class="{ 'sales-active': product.id === 3 }" class="sales"
            >حراجی</span
          >
          <span class="discount-percent">3%</span>
          <div class="header">
            <span class="category d-flex justify-content-center">{{
              product.category
            }}</span>
            <h2 class="title en-title d-flex">
              <a class="" title="گوشی" href="#">Apple iPhone XS Mobile Phone</a>
            </h2>
            <h2 class="title">
              <a
                :class="{ 'text-right': orderValue === 'single' }"
                ref="peTitle"
                class="pe-title"
                title="گوشی"
                href="#"
                >{{ product.title }}</a
              >
            </h2>
          </div>
          <img
            loading="lazy"
            :src="product.image"
            alt="عکس"
            class="slide-image"
            title="عکس"
          />
          <div class="prices d-flex align-items-center justify-content-between">
            <div class="discount-and-price d-flex flex-column">
              <span class="price">{{ product.price }} تومان</span>
              <span class="discount-price">2,000,000</span>
            </div>
            <span class="icon-container">
              <img
                src="@/assets/icon/9045067_shopping_cart_arrow_down_icon.svg"
                alt="سبد خرید"
                class="basket-icon"
                loading="lazy"
                title="سبد خرید"
              />
            </span>
          </div>
          <div class="colors d-flex flex-column">
            <div class="color red"></div>
            <div class="color green"></div>
            <div class="color yellow"></div>
            <span>+</span>
          </div>
          <span class="shadow">حراجی</span>
          <div class="specifications">
            <span class="title">ویژگی ها</span>
            <ul class="features">
              <li class="feature">حافظه داخلی: 64 گيگابايت</li>
              <li class="feature">شبکه های ارتباطی: 2G 3G 4G</li>
              <li class="feature">
                حس‌گرها: قطب‌نما (Compass) شتاب‌سنج (Accelerometer) مجاورت
                (Proximity) فشارسنج (Barometer) ژیروسکوپ (Gyro) تشخیص چهره
                بیومتریک (Face ID)
              </li>
              <li class="feature">حافظه داخلی: 64 گيگابايت</li>
            </ul>
          </div>
        </div>
      </div>

      <div ref="SortingFilter" class="sorting-filter-mobile">
        <div class="wrapper">
          <div class="sorting-header">
            <div class="close-sorting-wrapper">
              <div @click="activeSortingFilter" class="close-sorting">
                <img
                  src="@/assets/icon/211651_close_round_icon.svg"
                  alt="بستن"
                  title="بستن"
                  loading="lazy"
                />
              </div>
              <span> مرتب سازی بر اساس</span>
            </div>
          </div>
          <ul class="items d-flex flex-column">
            <li
              @click="setSortingValue('جدید ترین')"
              :class="{
                'active-sorting-filter': this.selectedSorting === 'جدید ترین',
              }"
              class="item d-flex justify-content-between"
            >
              <span> جدید ترین</span>

              <img
                src="@/assets/icon/352323_done_icon.svg"
                alt="انجام شد"
                class="basket-icon"
                loading="lazy"
                title="انجام شد"
              />
            </li>

            <li
              @click="setSortingValue('پر بازدید ترین')"
              :class="{
                'active-sorting-filter':
                  this.selectedSorting === 'پر بازدید ترین',
              }"
              class="item d-flex justify-content-between"
            >
              <span> پر بازدید ترین</span>

              <img
                src="@/assets/icon/352323_done_icon.svg"
                alt="انجام شد"
                class="basket-icon"
                loading="lazy"
                title="انجام شد"
              />
            </li>
            <li
              @click="setSortingValue('پر فروش ترین')"
              :class="{
                'active-sorting-filter':
                  this.selectedSorting === 'پر فروش ترین',
              }"
              class="item d-flex justify-content-between"
            >
              <span>پر فروش ترین</span>

              <img
                src="@/assets/icon/352323_done_icon.svg"
                alt="انجام شد"
                class="basket-icon"
                loading="lazy"
                title="انجام شد"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <b-pagination
      v-model="currentPage"
      pills
      :total-rows="rows"
      :per-page="perPage"
      first-number
      last-number
      class="pagination justify-content-center"
      id="pagination"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      options: {
        1: "جدیدترین",
        2: "پر بازدید ترین",
        3: "پر فروش ترین",
      },
      orderValue: "multiple",
      rows: 100,
      perPage: 10,
      currentPage: 1,
      selectedSorting: "مرتب سازی بر اساس",
    };
  },

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    filteredProducts() {
      return this.$store.getters.filteredProducts;
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 660) {
        this.orderValue = "multiple";
      }
      if (window.innerWidth <= 480) {
        this.selectedSorting = "جدید ترین";
      } else {
        if (this.$refs.SortingFilter.classList.contains("active-filter")) {
          this.toggleSortingFilter();
        }

        this.selectedSorting = "مرتب سازی بر اساس";
      }
    });
    if (window.innerWidth <= 480) {
      this.selectedSorting = "جدید ترین";
    }
  },
  methods: {
    setActiveOrder(value) {
      this.orderValue = value;
    },

    activeSortingFilter() {
      if (window.innerWidth <= 480) {
        this.activeBodyOverflow();
        this.toggleSortingFilter();
      }
    },
    toggleSortingFilter() {
      this.$refs.SortingFilter.classList.toggle("active-filter");
    },

    setSortingValue(value) {
      this.selectedSorting = value;
      this.toggleSortingFilter();
    },
  },
};
</script>

<style scoped lang="scss">
.product-items {
  width: 73%;
  margin-top: 70px;

  .product-container {
    padding: 34px 0 0 0;
    background: #f9f9f9;
  }
  .navs {
    width: 98%;
    margin: 0 auto;
    .filtering {
      display: none !important;
    }
    .sorting {
      column-gap: 13px;
      .title-container {
        column-gap: 8px;
      }
      .icon {
        align-self: center;
        width: 30px;
        height: 30px;
      }
      .title {
        font-size: 0.875rem;
      }
      .select {
        border-radius: 21px;
        padding: 3px 8px;
        min-width: 150px;
        font-size: 0.875rem;
        cursor: pointer;
        option {
          cursor: pointer;
        }
      }
    }
    .showing-details {
      .icon {
        width: 20px;
        height: 20px;
      }
      .showed-product {
        font-size: 0.875rem;
        margin-left: 10px;
      }
    }
    .icon-container {
      box-shadow: none;
      background: transparent;
      border: 1px solid #cbcbcb;
      padding: 6px;
      border-radius: 8px;
      cursor: pointer;
      &:first-of-type {
        margin-left: 10px;
      }
      .icon {
        filter: brightness(0) saturate(100%) invert(67%) sepia(0%)
          saturate(1643%) hue-rotate(139deg) brightness(82%);
      }
    }
    .active-order {
      border: 1px solid rgb(122, 122, 122);
      .icon {
        filter: brightness(0) saturate(100%) invert(22%) sepia(0%)
          saturate(2586%) hue-rotate(319deg) brightness(102%) contrast(109%);
      }
    }
  }
  .slides {
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;
    justify-content: center;
    .slide {
      width: 24.8%;
      height: auto;
      background: #fff;
      padding: 10px;
      position: relative;
      margin: 1px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        z-index: 2;
        box-shadow: 0 2px 17px 0 rgb(0 0 0 / 9%);
      }
      .sales {
        text-align: center;
        border-bottom: 1px solid $red-hover;
        width: 100%;
        display: block;
        padding-bottom: 10px;
        margin-bottom: 8px;
        opacity: 0;
        color: $red-hover;
      }
      .en-title {
        display: none !important;
      }
      .sales-active {
        opacity: 1;
      }
      .shadow {
        padding-bottom: 10px;
        margin-bottom: 8px;
        opacity: 0;
      }
      .sales-active {
        opacity: 1;
      }

      .header {
        margin-bottom: 21px;
        .category {
          color: $fifth-color;
          font-size: 1rem;
          width: 100%;
          margin-bottom: 12px;
        }
        .title a {
          font-weight: 600;
          font-size: 1.125rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #4355b6 !important;
          transition: all 0.2s ease-in-out;
          width: 95%;
          text-align: start;
          line-height: 1.9rem;
          margin: 0 auto;
          text-align: center;
          &:hover {
            color: $font-red !important;
          }
        }
        .category {
          font-size: 0.875rem;
        }
      }
      .icon-container {
        margin-left: 10px;
      }
      .prices {
        color: #4355b6;
        font-size: 1.125rem;
        margin-top: 34px;
        .price {
          font-size: 1.125rem;
          font-weight: 500;
        }

        .discount-price {
          color: $forth-color;
          text-decoration: line-through;
          font-size: 1rem;
        }
      }
      .slide-image {
        width: 70%;
        height: 200px;
        margin: 0 auto;
      }
      .icon-container {
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 13px;
        background: #e8e8e8;
        transition: all 0.2s ease-in-out;
        &:hover {
          background: #12b886;
        }
      }
      .basket-icon {
        width: 22px;
        height: 22px;
        filter: brightness(0) saturate(100%) invert(99%) sepia(95%) saturate(2%)
          hue-rotate(20deg) brightness(104%) contrast(100%);
      }
      .colors {
        row-gap: 5px;
        position: absolute;
        right: 3%;
        top: 30%;

        .color {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .red {
          background: $red-hover;
        }
        .green {
          background: #4355b6;
        }
        .yellow {
          background: #ffeb3c;
        }
      }
      .discount-percent {
        position: absolute;
        right: 3%;
        top: 11%;
        background-color: #f77f20;
        font-weight: 600;
        color: #fff;
        border-radius: 20px;
        padding: 4px 6px 1px;
        letter-spacing: 0;
        margin-bottom: 3px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 14px;
        line-height: 1.375;

        min-width: 43px;
        height: 23px;
      }
    }
    .specifications {
      display: none;
    }
  }

  //single order design for slide
  .single-order {
    .slide {
      width: 100%;
      margin: 1px;
      display: grid !important;
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(6, auto);
      padding: 0;
      .slide-image {
        grid-column: 1/4;
        grid-row: 2/6;
      }
      .sales {
        grid-column: 1/-1;
        grid-row: 1/2;
        padding: 8px 0;
        margin-bottom: 15px;
      }
      .prices {
        grid-row: 4/5;
        grid-column: 4/10;
      }
      .slide-image {
        height: 300px;
      }
      .shadow {
        grid-row: 6/7;
        grid-column: 1/-1;
        margin-bottom: 0;
      }
      .header {
        margin-top: 21px;
        grid-column: 4/10;
        display: flex;
        flex-direction: column-reverse;
        .category {
          justify-content: flex-start !important;
        }
        .title a {
          font-size: 1.125rem;
          margin: 0;
          width: 100%;
          text-align: start;
        }
        .pe-title {
          text-align: start;
        }
        .en-title {
          display: flex !important;
          margin-left: 10px;
          align-self: end;
          a {
            color: #96a1dc !important;
            font-size: 1rem;
            direction: ltr;
            text-align: end;
            width: 100%;
          }
        }
      }
      .discount-and-price {
        flex-direction: row !important;
        align-items: center;
        column-gap: 5px;
      }
      .colors {
        grid-column: 4/9;
        position: relative;
        display: flex !important;
        align-items: center;
        flex-direction: row !important;
        column-gap: 8px;
        right: 0;
        top: 0;
        &::before {
          content: "رنگ ها:";
          font-size: 0.9rem;
          line-height: 21px;
          color: #6b6b6b;
        }
      }
      .specifications {
        display: block;
        grid-column: 10/13;
        grid-row: 2/6;
        border-right: 1px solid #ececec;
        padding-right: 20px;
        padding-left: 12px;
        .title {
          padding-right: 21px;
          padding-bottom: 21px;
          display: block;
          font-size: 1rem;
          line-height: 25px;

          letter-spacing: 0.2px;
          color: #313131;
        }
        .features {
          .feature {
            margin: 10px 0;
            padding-right: 20px;
            position: relative;
            color: #464646;
            letter-spacing: 0.7px;
            font-size: 0.75rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            -webkit-box-orient: vertical;
            &::before {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: #ababab;
              position: absolute;
              right: 7px;
              top: 7px;
              content: "";
            }
          }
        }
      }
      .discount-percent {
        right: 1%;
        top: 13%;
      }
    }
  }
}
.pagination {
  margin-top: 55px;
}

.sorting-filter-mobile {
  display: none;
  width: 100%;
  height: 100%;
  z-index: 444444;
  position: fixed;
  background: #fff;
  inset: 0;
  transform: translateY(100vh);

  .wrapper {
    overflow-y: auto;

    .sorting-header {
      span {
        font-size: 0.875rem;
      }
      .close-sorting-wrapper {
        display: flex;
        align-items: center;
        column-gap: 15px;
        margin-top: 21px;
        padding-right: 14px;
        .close-sorting {
          transition: all 0.2s;
          &:hover img {
            filter: brightness(0) saturate(100%) invert(16%) sepia(97%)
              saturate(5166%) hue-rotate(341deg) brightness(92%) contrast(96%);
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    .items {
      width: 95%;
      margin: 0 auto;
      margin-top: 34px;
      .item {
        padding: 15px 0 15px 5px;
        border-bottom: 1px solid #f0f0f1;

        span {
          font-size: 0.875rem;
        }
        img {
          width: 20px;
          height: 20px;
          opacity: 0;
          transition: all 0.2s ease;
        }
      }
    }
  }
}
@keyframes activeSorting {
  to {
    transform: translateY(0);
  }
  from {
    transform: translateY(100vh);
  }
}
.active-filter {
  display: block;
  transform: translateY(0);
  animation: activeSorting 0.3s forwards;
}
.active-sorting-filter {
  img {
    opacity: 1 !important;
  }
}
/**media query */

@include breakpoint(1438px) {
  .product-items .slides .slide {
    width: 24.7%;
  }
}
@include breakpoint(1300px) {
  .product-items .slides .slide .prices .price {
    font-size: 1rem;
  }
  .product-items .slides .slide {
    width: 33%;
  }
  .product-items .single-order .slide {
    width: 100%;
  }
  .product-items-and-filter {
    width: 97%;
    margin: 0 auto;
    justify-content: space-between;
  }
}
@include breakpoint(1000px) {
  .product-items .single-order .slide .header .title a {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #4355b6 !important;
    transition: all 0.2s ease-in-out;
    width: 80%;
    text-align: start;
    line-height: 1.9rem;
    margin: 1px;
    text-align: start;
  }
  .product-items .single-order .slide .header .en-title a {
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #4355b6 !important;
    transition: all 0.2s ease-in-out;
    width: 100%;
    text-align: end;
    direction: ltr;
    line-height: 1.9rem;
    margin: 0;
  }
  .product-items {
    width: 100%;
    padding: 34px 0px;
  }
  .product-items .slides {
    width: 98%;
    margin: 55px auto 34px auto;
  }

  .product-items .slides .slide .sales-active {
    font-size: 0.875rem;
  }
  .product-items .single-order .slide .slide-image {
    grid-column: 1/5;
  }
  .product-items .single-order .slide .header {
    grid-column: 5/10;
  }
  .product-items .single-order .slide .prices {
    grid-row: 4/5;
    grid-column: 5/10;
  }
  .product-items .single-order .slide .colors {
    grid-column: 5/10;
  }
  .product-items .navs {
    display: grid !important;
    grid-template-columns: repeat(2, auto);
    row-gap: 50px;

    .filtering {
      display: flex !important;
      justify-self: end;
      column-gap: 15px;

      span {
        font-size: 1rem;
      }
      .icon-container {
        padding: 5px;
      }
      .icon {
        width: 24px;
        height: 24px;
        filter: brightness(0) saturate(100%) invert(22%) sepia(0%)
          saturate(2586%) hue-rotate(319deg) brightness(102%) contrast(109%);
      }
    }
  }
  .product-items .navs .showing-details .showed-product {
    font-size: 1rem;
  }
  .product-items {
    width: 100%;
    margin-top: 34px;
  }
}
@include breakpoint(660px) {
  .product-items .slides .slide {
    width: 49%;
  }

  .product-items .single-order .slide {
    width: 100%;
  }
  .product-items .navs {
    flex-direction: column;
    row-gap: 34px;
    padding-right: 8px;
  }

  .product-items .navs .icon-container {
    display: none;
  }
  .product-items .navs .filtering .icon-container {
    display: block;
  }
}
@include sm {
  .product-items .navs .sorting .title {
    font-size: 1rem;
  }
  .product-items .slides .slide {
    width: 98%;
    margin: 14px auto 0px auto;
    border: 1px solid rgba(219, 210, 210, 0.6509803922);
  }
  .product-items .navs {
    display: grid !important;
    grid-template-columns: 1fr;
  }
  .product-items .navs .filtering {
    grid-row: 3/4;
    justify-self: start;
  }
  .product-items {
    margin-top: 8px;
  }
  .product-items .slides .slide .header .title a {
    font-size: 1rem;
  }

  .product-items .navs .sorting .select {
    display: none;
  }
}
@include breakpoint(380px) {
  .product-items .navs .sorting {
    display: flex !important;
    flex-direction: column;
    align-items: flex-start !important;
    row-gap: 15px;
  }
}
</style>

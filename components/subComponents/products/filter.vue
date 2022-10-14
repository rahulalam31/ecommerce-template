<template>
  <section id="filter" ref="filter" class="filter">
    <div class="container">
      <InstantOffer id="InstantOfferBox" ref="InstantOfferBox" />
      <div ref="filterContainer" class="filters-container">
        <div class="filter-wrapper">
          <div class="filters-container-header">
            <div class="close-filter-wrapper">
              <div @click="activeFilter" class="close-filter">
                <img
                  src="@/assets/icon/211651_close_round_icon.svg"
                  alt="سرچ"
                  title="سرچ"
                  loading="lazy"
                />
              </div>
              <span>فیلتر ها</span>
            </div>

            <div
              @click="clearAllFilters"
              ref="removeAllFilter"
              class="remove-all-filter"
            >
              حذف فیلتر‌ها
            </div>
          </div>
          <div class="boxes">
            <div class="categories">
              <div @click="openMenu($event)" class="header">
                <span>دسته بندی نتایج</span>
                <img
                  src="@/assets/icon/211687_down_arrow_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
              </div>
              <ul class="items sub-menu">
                <li class="item">
                  <img
                    src="@/assets/icon/211687_down_arrow_icon.svg"
                    alt="فلش"
                    title="فلش"
                    loading="lazy"
                    class="icon"
                  />
                  <span
                    @click="filterByCategory('electronics')"
                    title="کالای دیجیتال"
                    href="#"
                    :class="{
                      'active-item': selectedCategory === 'electronics',
                    }"
                    >electronics</span
                  >
                </li>
                <li class="item">
                  <img
                    src="@/assets/icon/211687_down_arrow_icon.svg"
                    alt="فلش"
                    title="فلش"
                    loading="lazy"
                    class="icon"
                  />
                  <span
                    @click="filterByCategory(`women's clothing`)"
                    title="زیبایی پوست"
                    href="#"
                    :class="{
                      'active-item': selectedCategory === `women's clothing`,
                    }"
                    >women's clothing</span
                  >
                </li>
                <li class="item">
                  <img
                    src="@/assets/icon/211687_down_arrow_icon.svg"
                    alt="فلش"
                    title="فلش"
                    loading="lazy"
                    class="icon"
                  />
                  <span
                    @click="filterByCategory('jewelery')"
                    title="ورزش و سفر"
                    href="#"
                    :class="{
                      'active-item': selectedCategory === 'jewelery',
                    }"
                    >jewelery</span
                  >
                </li>
                <li class="item">
                  <img
                    src="@/assets/icon/211687_down_arrow_icon.svg"
                    alt="فلش"
                    title="فلش"
                    loading="lazy"
                    class="icon"
                  />
                  <span
                    @click="filterByCategory(`men's clothing`)"
                    title="موبایل"
                    href="#"
                    :class="{
                      'active-item': selectedCategory === `men's clothing`,
                    }"
                    >men's clothing</span
                  >
                </li>
              </ul>
            </div>
            <div class="categories search" id="searchProductFilter">
              <span @click="openMenu($event)" class="header search-header"
                >جست و جو در محصولات</span
              >
              <form
                @submit.prevent="searchProductName"
                class="search-container d-flex align-items-center"
              >
                <img
                  src="@/assets/icon/969259_magnifier_search_seo_magnifying_zoom_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
                <input
                  class="search-input"
                  ref="searchTitleInput"
                  type="text"
                  placeholder="نام محصول مورد نظر را بنویسید"
                  v-model="searchedTitle"
                />
              </form>
            </div>
            <div class="categories" id="searchBrandFilter">
              <div @click="openMenu($event)" class="header">
                <span>برند ها</span>
                <img
                  src="@/assets/icon/211687_down_arrow_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
              </div>

              <VueMultiSelectVue
                class="sub-menu"
                ref="BrandsVueMultiSelectVue"
                @checkedFilters="checkedFiltersBrands"
                :searchTitle="brandSearchTitle"
                :filters="brands"
              />
            </div>
            <div class="digi-switch d-flex align-items-center">
              <input
                id="availableProduct"
                type="checkbox"
                class="available-product"
                v-model="availableProduct"
                @click="setAvailableProduct"
              />
              <label for="availableProduct" class="switch-label"
                >فقط کالا های موجود</label
              >
            </div>
            <div class="digi-switch sales-switch d-flex align-items-center">
              <input
                id="salesProduct"
                type="checkbox"
                class="available-product"
                v-model="salesProduct"
                @click="setSalesProduct"
              />
              <label for="salesProduct" class="switch-label">حراجی</label>
            </div>

            <div class="colors-filter categories" id="searchBrandFilter">
              <div @click="openMenu($event)" class="header">
                <span>رنگ ها</span>
                <img
                  src="@/assets/icon/211687_down_arrow_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
              </div>
              <VueMultiSelectVue
                ref="ColorsVueMultiSelectVue"
                @checkedFilters="checkedFiltersColors"
                :searchTitle="colorSearchTitle"
                class="colors-multi-select sub-menu"
                :filters="colors"
              />
            </div>
            <div class="categories search" id="searchProductFilter">
              <div @click="openMenu($event)" class="set-range-header header">
                <span>تعیین محدوده قیمت</span>
                <img
                  src="@/assets/icon/211687_down_arrow_icon.svg"
                  alt="فلش"
                  title="فلش"
                  loading="lazy"
                  class="icon"
                />
              </div>
              <RangeSlider
                class="sub-menu range-sub-menu"
                :minVal="0"
                :priceGap="10"
                :maxVal="25000000"
                @setPriceRange="setPriceRange"
              />
            </div>
          </div>
        </div>
      </div>

      <!--  spinner  -->
    </div>
  </section>
</template>

<script>
import AmazingOffer from "./instantOffer.vue";
import InstantOffer from "@/components/subComponents/products/instantOffer.vue";

import RangeSlider from "./RangeSlider.vue";
import VueMultiSelectVue from "./vueMultiSelect.vue";

export default {
  components: {
    AmazingOffer,
    VueMultiSelectVue,
    InstantOffer,
    RangeSlider,
  },

  data: () => ({
    brandSearchTitle: "برند مورد نظر را سرچ کنید",
    colorSearchTitle: "رنگ مورد نظر را سرچ کنید",
    brands: ["اپل", "سام سونگ", "هواوی", "نوکیا", "سونی", "ال جی"],
    colors: ["زرد", "سبز", "قرمز", "ابی", "بنفش", "صورتی", "مشکی"],
    selectedColors: [],
    selectedBrands: [],
    availableProduct: false,
    salesProduct: false,
    searchedTitle: "",
    selectedCategory: "",
    activePriceRange: false,
  }),

  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    filteredProducts() {
      return this.$store.getters.filteredProducts;
    },
  },
  methods: {
    setPriceRange(selectedRange) {
      const filteredProducts = [];
      this.toggleSpinner();

      // if we are in small device and active-filter is on , then if user sets any filter
      // close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }

      //set experimental time out to show loader
      setTimeout(() => {
        this.filteredProducts.forEach((product) => {
          if (
            selectedRange.selectedMin <= product.price &&
            product.price <= selectedRange.selectedMax
          ) {
            filteredProducts.push(product);
          }
        });
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", filteredProducts);
      }, 1000);
      if (!this.activePriceRange) {
        this.activePriceRange = true;
      }
      this.toggleRemoveAll();

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }
    },
    openMenu(event) {
      event.target.classList.toggle("active-sub-menu");
    },

    activeFilter() {
      this.activeBodyOverflow();
      this.$refs.filter.classList.toggle("active-filter");
    },

    toggleRemoveAll() {
      if (
        this.selectedColors.length == 1 ||
        this.selectedBrands.length == 1 ||
        this.availableProduct ||
        this.salesProduct ||
        this.selectedCategory !== "" ||
        this.activePriceRange
      ) {
        if (!this.$refs.removeAllFilter.classList.contains("active")) {
          this.toggleClearAllFilter();
        }
      } else if (
        this.selectedColors.length == 0 &&
        this.selectedBrands.length == 0 &&
        !this.availableProduct &&
        !this.salesProduct &&
        this.selectedCategory == "" &&
        !this.activePriceRange
      ) {
        this.toggleClearAllFilter();
      }

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }
    },

    toggleClearAllFilter() {
      this.$refs.removeAllFilter.classList.toggle("active");

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }
    },

    //if color filter selected it will be call
    checkedFiltersColors(value) {
      this.selectedColors = value;

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }

      this.toggleSpinner();

      //set experimental time out to show loader
      setTimeout(() => {
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", this.allProducts);
      }, 1000);

      this.toggleRemoveAll();
    },

    //if brand filter selected it will be call
    checkedFiltersBrands(value) {
      this.selectedBrands = value;
      this.toggleRemoveAll();

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }

      this.toggleSpinner();

      //set experimental time out to show loader
      setTimeout(() => {
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", this.allProducts);
      }, 1000);
    },

    //toggle sales product switch
    setSalesProduct() {
      this.salesProduct = !this.salesProduct;
      this.toggleRemoveAll();

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }

      this.toggleSpinner();

      //set experimental time out to show loader
      setTimeout(() => {
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", this.allProducts);
      }, 1000);
    },

    //toggle available product switch
    setAvailableProduct() {
      this.availableProduct = !this.availableProduct;
      this.toggleRemoveAll();

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }
      this.toggleSpinner();

      //set experimental time out to show loader
      setTimeout(() => {
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", this.allProducts);
      }, 1000);
    },

    clearAllFilters() {
      const selectedCheckBox = document.querySelectorAll(
        "input[name=mycheckboxes]:checked"
      );
      selectedCheckBox.forEach((item) => {
        item.checked = false;
      });
      this.selectedColors = [];
      this.selectedBrands = [];
      this.availableProduct = false;
      this.salesProduct = false;
      this.activePriceRange = false;
      this.$refs.BrandsVueMultiSelectVue.clear();
      this.$refs.ColorsVueMultiSelectVue.clear();
      this.selectedCategory = "";

      this.$refs.searchTitleInput.value = "";
      this.toggleSpinner();

      //set experimental time out to show loader
      setTimeout(() => {
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", this.allProducts);
      }, 1000);

      this.toggleClearAllFilter();
    },

    toggleFilterContainer() {
      this.$refs.filterContainer.classList.toggle("fixed-filter");
    },

    toggleSpinner() {
      this.$emit("toggleSpinner");
    },

    //search for in products title
    searchProductName() {
      const filteredProducts = [];
      this.toggleSpinner();

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }

      //set experimental time out to show loader
      setTimeout(() => {
        this.filteredProducts.forEach((product) => {
          if (product.title.toLowerCase().includes(this.searchedTitle)) {
            filteredProducts.push(product);
          }
        });
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", filteredProducts);
      }, 1000);
      this.toggleRemoveAll();
    },

    filterByCategory(value) {
      this.selectedCategory = value;
      const filteredProducts = [];
      this.toggleSpinner();

      //if we are in small device and active-filter is on , then if user sets any filter
      //close filter section
      if (this.$refs.filter.classList.contains("active-filter")) {
        this.activeFilter();
      }

      //set experimental time out to show loader
      setTimeout(() => {
        this.allProducts.forEach((product) => {
          if (product.category.toLowerCase().includes(value)) {
            filteredProducts.push(product);
          }
        });
        this.toggleSpinner();
        this.$store.dispatch("setFilteredProducts", filteredProducts);
      }, 1000);

      this.toggleRemoveAll();
    },
  },
  mounted() {
    //check if filter is active and window width is bigger than 1000px remove active-filter class
    if (window.innerWidth < 1000) {
      window.addEventListener("resize", () => {
        if (
          window.innerWidth > 1000 &&
          document.getElementById("filter").classList.contains("active-filter")
        ) {
          this.activeFilter();
        }
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/products/filter.scss";
</style>

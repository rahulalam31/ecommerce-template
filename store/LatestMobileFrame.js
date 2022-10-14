export const state = () => ({
  products: [
    {
      id: 1,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/51HuCjHz06L._AC_SL1000_.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 2,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/wastion-clear-hard-case-for-iphone-se-2020-1.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 3,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/apple-iphone-11-pro-max-wavelength-dual-layer-hard-soft-shockproof-case-3.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 4,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/apple-iphone-7-hoco-juice-series-tpu-cover.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 5,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/apple-iphone-7-baseus-travel-tpu-and-pc-case.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 6,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/51HuCjHz06L._AC_SL1000_.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 7,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/wastion-clear-hard-case-for-iphone-se-2020-1.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 8,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/apple-iphone-11-pro-max-wavelength-dual-layer-hard-soft-shockproof-case-3.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 9,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/apple-iphone-7-hoco-juice-series-tpu-cover.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 10,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/apple-iphone-7-baseus-travel-tpu-and-pc-case.webp"),
      price: "۱۸۰۰۰۰",
    },
    {
      id: 11,
      header: "عنوان محصول",
      category: "نام دسته بندی محصول",
      image: require("@/assets/images/latestMobileFrame/mov_bbb.mp4"),
      price: "۱۸۰۰۰۰",
      video: true,
    },
  ],
});
export const getters = {
  getProducts(state) {
    return state.products;
  },
};

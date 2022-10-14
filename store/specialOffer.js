export const state = () => ({
  products: [
    {
      id: 1,
      title: "عنوان محصول",
      image: require("@/assets/images/specialOffer/O6CCQR1.webp"),
      info: "لورم ایپسوم متنی است با تولید نامفهوم از س جملات که طراحان گرافیک از آندر طرح های",
      price: "۱۸۰۰۰۰",
    },
    {
      id: 2,
      title: "عنوان محصول",
      image: require("@/assets/images/specialOffer/612b5jYuRvL._AC_SL1500_.webp"),
      info: "لورم ایپسوم متنی است با تولید نامفهوم از س جملات که طراحان گرافیک از آندر طرح های",
      price: "۱۸۰۰۰۰",
    },
    {
      id: 3,
      title: "عنوان محصول",
      image: require("@/assets/images/specialOffer/pd-02-lg-72dbadce-4cbd-40d0-a369-94618acccb3e.webp"),
      info: "لورم ایپسوم متنی است با تولید نامفهوم از س جملات که طراحان گرافیک از آندر طرح های",
      price: "۱۸۰۰۰۰",
    },
  ],
});

// getters
export const getters = {
  getProducts(state) {
    return state.products;
  },
};

export const state = () => ({
  products: [
    {
      id: 1,
      title: "عنوان محصول",
      image: require("@/assets/images/Group265.webp"),
      info: "لورم ایپسوم متنی است با تولید نامفهوم از س جملات که طراحان گرافیک از آندر طرح های",
      price: "۱۸۰۰۰۰",
    },
    {
      id: 2,
      title: "عنوان محصول",
      image: require("@/assets/images/Group26.webp"),
      info: "لورم ایپسوم متنی است با تولید نامفهوم از س جملات که طراحان گرافیک از آندر طرح های",
      price: "۱۸۰۰۰۰",
    },
    {
      id: 3,
      title: "عنوان محصول",
      image: require("@/assets/images/Group267.webp"),
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

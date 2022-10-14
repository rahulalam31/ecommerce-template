export const state = () => ({
  allProducts: null,
  filteredProducts: [],
});

export const mutations = {
  setProducts(state, products) {
    state.allProducts = products;
  },
  setFilteredProducts(state, products) {
    state.filteredProducts = products;
  },
};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    return await this.$axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        vuexContext.commit("setProducts", response.data);
        vuexContext.commit("setFilteredProducts", response.data);
      })
      .catch((e) => context.error(e));
  },

  setProducts(vuexContext, products) {
    vuexContext.commit("setProducts", products);
  },
  setFilteredProducts(vuexContext, products) {
    vuexContext.commit("setFilteredProducts", products);
  },
};
export const getters = {
  allProducts(state) {
    return state.allProducts;
  },
  filteredProducts(state) {
    return state.filteredProducts;
  },
};

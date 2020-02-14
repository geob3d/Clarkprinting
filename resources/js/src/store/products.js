import shop from "@/api/shop";

export default {
  namespaced: true,

  state: {
    items: []
  },

  getters: {
    availableProducts(state, getters) {
      return state.items.filter(product => product.inventory > 0);
    },

    productIsInStock() {
      return product => product.inventory > 0;
    }
  },

  actions: {
    fetchProducts(context) {
      console.log("hello from products.js");
      return new Promise((resolve, reject) => {
        // make the call
        shop.getProducts(products => {
          // run setProducts mutation
          context.commit("setProducts", products);
          resolve();
        });
      });
    }
  },

  mutations: {
    setProducts(state, products) {
      // update products
      state.items = products;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    }
  }
};

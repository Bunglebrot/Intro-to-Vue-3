const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
      updateCart(id) {
        return this.cart.push(id);
      },
      removeCart() {
        console.log(this.cart);
        return this.cart.splice(-1, 1);
      },
    },
});
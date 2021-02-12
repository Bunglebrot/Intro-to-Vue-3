'use strict';

app.component('product-details', {
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  template: 
  /*html */
  `<div class="product-details">
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  </div>`,

  methods: {

  },
  computed: {

  },
});
'use strict';

app.component('review-form', {
  template:
  /* html */
  `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label> Name:
      <input type="text" v-model="name" placeholder="Enter your name">
    </label>
    <label> Review:
      <textarea placeholder="Your review..." v-model="review"></textarea>
    </label>
    <label> Would you recommend this product?
      <input type="checkbox" v-model="recommend">
    </label>
    <label> Rating:
      <select v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </label>
    
    <input class="button" type="submit" value="Submit">
  </form>`,

  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: false,
    };
  },

  methods: {
    onSubmit() {
      if (this.name === '' || this.review === '' || this.rating === null) {
        alert('Review is incoplete. Please fill out every field.');
        return;
      }

      if (this.recommend === false) this.recommend = 'Не рекомендую';
      else this.recommend = 'Рекомендую';

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = false;
    },
  }
});
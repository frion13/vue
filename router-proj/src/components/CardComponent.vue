<template>
  <div class="cards__flex center">
    <div class="card" v-for="(card, index) in cards" :key="index" @click="toggleStar(index)">
     
      <StarComponent :isStarred="card.showStar" :card="card" />
      <p class="card__title">{{ card.title }}</p>
      <p class="card__text">{{ card.text }}</p>
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
        <path
          d="M32 44L40 35L32 26"
          stroke="#292F36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import StarComponent from "./StarComponent.vue";

export default {
  name: "CardComponent",
  props: ["cards"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    toggleStar(index) {
      this.cards[index].showStar = !this.cards[index].showStar;
    },
  },
  components: {
    StarComponent,
  },
};
</script>

<style lang="scss" scoped>
/* Ваши стили */
</style>

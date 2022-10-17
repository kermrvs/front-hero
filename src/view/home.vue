<template>
  <div>
    <list-hero></list-hero>
    <div class="page-section">
      <div
        class="left"
        @click="prevPage(currentPage - 1)"
        v-show="currentPage !== 1 && maxPages !== 0"
      >
        <img src="src/assets/left.svg" />
      </div>
      <div class="page" v-if="maxPages > 1">{{ currentPage }}</div>
      <div
        class="right"
        @click="nextPage(currentPage + 1)"
        v-show="maxPages > currentPage"
      >
        <img src="src/assets/right.svg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListHero from '../components/ListHero.vue';
import { mapActions, mapState } from 'pinia';
import { HeroStore } from '../store';

export default defineComponent({
  name: 'home',
  components: {
    ListHero,
  },
  computed: {
    ...mapState(HeroStore, ['maxPages', 'currentPage']),
  },
  methods: {
    ...mapActions(HeroStore, ['getAllHeroes']),

    nextPage(page: number) {
      this.getAllHeroes(page);
    },

    prevPage(page: number) {
      this.getAllHeroes(page);
    },
  },
  created() {
    this.getAllHeroes(1);
  },
});
</script>

<style scoped></style>

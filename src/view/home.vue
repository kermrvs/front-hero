<template>
  <div>
    <list-hero></list-hero>
    <div class="page-section">
      <div
        class="left"
        @click="prevPage(+getCurrentPage - 1)"
        v-show="+getCurrentPage !== 1 && +getMaxPages !== 0"
      >
        <img src="/left.svg" />
      </div>
      <div class="page" v-if="+getMaxPages > 1">{{ +getCurrentPage }}</div>
      <div
        class="right"
        @click="nextPage(+getCurrentPage + 1)"
        v-show="+getMaxPages > +getCurrentPage"
      >
        <img src="/right.svg" />
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
    ...mapState(HeroStore, ['getMaxPages', 'getCurrentPage']),
  },
  methods: {
    ...mapActions(HeroStore, ['getAllHeroes']),

    nextPage(page: number): void {
      this.getAllHeroes(page);
    },

    prevPage(page: number): void {
      this.getAllHeroes(page);
    },
  },
  created(): void {
    this.getAllHeroes(1);
  },
});
</script>

<style scoped></style>

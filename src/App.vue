<template>
  <div>
    <app-bar></app-bar>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppBar from './components/AppBar.vue';
import { mapActions, mapState } from 'pinia';
import { HeroStore } from './store';

export default defineComponent({
  name: 'App',
  components: {
    AppBar,
  },
  computed: {
    ...mapState(HeroStore, ['currentHeroForEdit']),
  },
  methods: {
    ...mapActions(HeroStore, ['getAllHeroes']),
  },
  created() {
    this.getAllHeroes(1);

    if (!this.currentHeroForEdit.nickname) {
      this.$router.push('/');
    }
  },
});
</script>

<style scoped></style>

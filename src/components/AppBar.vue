<template>
  <div class="menu">
    <div class="menu-item" @click="toHome()">Home</div>
    <div class="menu-item" @click="toCreate()">Add new hero</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapActions} from 'pinia';
import {HeroStore} from '../store';

export default defineComponent({
  name: 'AppBar',
  methods: {
    ...mapActions(HeroStore,['getAllHeroes']),
    toHome() {
      this.getAllHeroes(1);
      this.$router.push('/');
    },
    toCreate() {
      this.$router.push('/create');
    },
  },
});
</script>

<style scoped></style>

<template>
  <div class="hero-block" v-for="(hero, index) in heroes" :key="index">
    <div class="hero-nickname">
      {{ hero.nickname }}
    </div>
    <div class="hero-real-name">
      <span>Real name: </span>
      {{ hero.real_name }}
    </div>
    <div class="description">
      <span>Description: </span>{{ hero.origin_description }}
    </div>
    <div class="superpowers">
      <span>Superpowers: </span>{{ hero.superpowers }}
    </div>
    <div class="phrase"><span>Phrase: </span>{{ hero.catch_phrase }}</div>
    <div class="images">
      <span>Images: </span>
    </div>
    <div class="list-images">
      <div v-for="(item, i) in hero.images" :key="i">
        <img class="img" :src="`data:${item.img}`" />
      </div>
    </div>
    <div class="buttons-block">
      <input type="button" class="edit-btn" value="Edit" @click="toEditForm(hero)"/>
      <input type="button" class="delete-btn" value="Delete" @click="deleteHeroById(hero._id)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {HeroStore} from '../store';
import {mapActions, mapState} from 'pinia';
import {IHero} from '../interface/Hero';

export default defineComponent({
  name: 'ListHero',
  computed:{
    ...mapState(HeroStore,['heroes','currentHeroForEdit'])
  },
  methods:{
    ...mapActions(HeroStore,['getAllHeroes','deleteHero','setCurrentHeroForEdit']),

    deleteHeroById(id:string){
      this.deleteHero(id);
      this.getAllHeroes(1);
    },

    toEditForm(hero:IHero){
      this.setCurrentHeroForEdit(hero);
      this.$router.push('/edit')
    }
  }
});
</script>

<style scoped></style>

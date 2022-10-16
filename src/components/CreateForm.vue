<template>
  <div class="hero-block-form">
    <div class="hero-nickname">
      <span>Hero nickname: </span>
      <input type="text" v-model="heroForm.nickname" />
    </div>
    <div class="hero-real-name">
      <span>Real name: </span>
      <input type="text" v-model="heroForm.real_name" />
    </div>
    <div class="description">
      <span>Description: </span>
      <br />
      <textarea v-model="heroForm.origin_description"></textarea>
    </div>
    <div class="superpowers">
      <span>Superpowers: </span>
      <br />
      <textarea v-model="heroForm.superpowers"></textarea>
    </div>
    <div class="phrase">
      <span>Phrase: </span><input type="text" v-model="heroForm.catch_phrase" />
    </div>
    <div class="images">
      <span>Images: </span>
      <input
        type="file"
        accept="image/png, image/jpeg"
        multiple
        maxlength="4"
        @change="fileChange"
        ref="inputFile"
      />
    </div>
    <div class="list-images" v-if="images.length > 0">
      <div v-for="(item, i) in images" :key="i">
        <img class="img" :src="`data:${item.img}`" alt="" />
      </div>
    </div>
    <button @click="saveHero(heroForm)">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getBase64 } from '../utils/imageToBase64';
import { HeroData } from '../services/api/HeroData';
import { IImages } from '../interface/IImages';
import { IHero } from '../interface/Hero';
import { mapActions } from 'pinia';
import { HeroStore } from '../store';

export default defineComponent({
  name: 'CreateForm',
  data() {
    return {
      heroForm: {} as IHero,
      images: [] as Array<IImages>,
    };
  },
  methods: {
    async fileChange(e: Event): Promise<void> {
      this.images = [];
      this.heroForm.images = [];
      const eTarget = e.target as HTMLInputElement;
      if (eTarget) {
        if (eTarget.files && eTarget.files.length <= 4) {
          for (let i = 0; i < eTarget.files.length; i++) {
            const { data } = await getBase64(eTarget.files[i]);
            this.images.push({
              name: eTarget.files[i].name,
              img: data,
            });
          }

          this.heroForm.images.push(...this.images);
        } else {
          alert('You new chose 1 - 4 max images');
        }
      }
    },

    ...mapActions(HeroStore, ['createHero', 'getAllHeroes']),

    async saveHero(hero: IHero) {
      if (
        hero.nickname !== '' &&
        hero.real_name !== '' &&
        hero.origin_description !== '' &&
        hero.superpowers !== '' &&
        hero.catch_phrase !== '' &&
        hero.images.length !== 0
      ) {
        try {
          await this.createHero(hero);

          this.heroForm.nickname = '';
          this.heroForm.real_name = '';
          this.heroForm.origin_description = '';
          this.heroForm.superpowers = '';
          this.heroForm.catch_phrase = '';
          this.heroForm.images = [];
          this.images = [];
          const input = this.$refs.inputFile as HTMLInputElement;
          input.value = '';

          alert('Added new hero');
        } catch (e) {
          alert('This hero was added');
        }
      } else {
        alert('You need fill in all fields and add 1 - 4 photos');
      }
    },
  },
});
</script>

<style scoped></style>

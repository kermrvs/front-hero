<template>
  <div class="hero-block-form">
    <div class="hero-nickname">
      <span>Hero nickname: </span>{{ hero.nickname }}
    </div>
    <div class="hero-real-name">
      <span>Real name: </span>
      <input type="text" v-model="hero.real_name" />
    </div>
    <div class="description">
      <span>Description: </span>
      <br />
      <textarea v-model="hero.origin_description"></textarea>
    </div>
    <div class="superpowers">
      <span>Superpowers: </span>
      <br />
      <textarea v-model="hero.superpowers"></textarea>
    </div>
    <div class="phrase">
      <span>Phrase: </span
      ><input type="text" v-model="currentHeroForEdit.catch_phrase" />
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
    <div class="list-images">
      <div v-for="(item, i) in hero.images" :key="i">
        <img class="img" :src="`data:${item.img}`" alt="" />
        <button @click="deleteCurrentImage(item.name)">Delete image</button>
      </div>
    </div>
    <button @click="saveHero(hero)">Save</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'pinia';
import { HeroStore } from '../store';
import { IHero } from '../interface/Hero';
import { IImages } from '../interface/IImages';
import { getBase64 } from '../utils/imageToBase64';

export default defineComponent({
  name: 'EditForm',
  props: ['hero'],
  data() {
    return {};
  },
  computed: {
    ...mapState(HeroStore, ['currentHeroForEdit']),
  },
  methods: {
    ...mapActions(HeroStore, ['updateHero']),

    async fileChange(e: Event) {
      let images = [];
      const eTarget = e.target as HTMLInputElement;

      if (eTarget.files) {
        if (eTarget.files.length + this.hero.images.length <= 4) {
          for (let i = 0; i < eTarget.files.length; i++) {
            const isExist = this.hero.images.find((item: IImages) => {
              if (!eTarget.files) {
                return;
              }

              return item.name === eTarget.files[i].name;
            });

            if (isExist) {
              continue;
            }

            const { data } = await getBase64(eTarget.files[i]);

            images.push({
              name: eTarget.files[i].name,
              img: data,
            });
          }
          this.hero.images.push(...images);
        }
      }
    },

    saveHero(hero: IHero): void {
      if (
        this.hero.images.length > 0 &&
        hero.nickname !== '' &&
        hero.real_name !== '' &&
        hero.origin_description !== '' &&
        hero.superpowers !== '' &&
        hero.catch_phrase !== ''
      ) {
        try {
          this.updateHero(hero);

          this.hero.nickname = '';
          this.hero.real_name = '';
          this.hero.origin_description = '';
          this.hero.superpowers = '';
          this.hero.catch_phrase = '';
          this.hero.images = [];
          const input = this.$refs.inputFile as HTMLInputElement;
          input.value = '';

          alert('Hero has been updated');
          this.$router.push('/');
        } catch (e) {
          alert('Hero was no update');
        }
      } else {
        alert('You need add 1 - 4 images');
      }
    },

    deleteCurrentImage(name: string) {
      this.hero.images = this.hero.images.filter((item: IImages) => {
        return item.name !== name;
      });
    },
  },
});
</script>

<style scoped></style>

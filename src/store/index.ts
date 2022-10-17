import { defineStore } from 'pinia';
import { IHero } from '../interface/Hero';
import api from '../services/api';
import { HeroData } from '../services/api/HeroData';

export const HeroStore = defineStore('hero', {
  state: () => ({
    heroObject: new HeroData(),
    heroes: [] as IHero[],
    currentHeroForEdit: {} as IHero,
    maxPages: 0 as Number,
    currentPage: 0 as Number,
  }),
  getters: {
    getCurrentPage(): number {
      return +this.currentPage;
    },

    getMaxPages(): number {
      return +this.maxPages;
    },
  },
  actions: {
    async getAllHeroes(page: number) {
      const { heroes, maxPages } = await this.heroObject.getHeroesWithPage(
        page,
      );
      this.maxPages = maxPages;
      this.currentPage = page;
      this.heroes = heroes;
    },

    async updateHero(hero: IHero) {
      await this.heroObject.updateHero(hero);
    },

    setCurrentHeroForEdit(hero: IHero): void {
      this.currentHeroForEdit = hero;
    },

    deleteHero(id: string): void {
      this.heroObject.delete(id);
    },

    createHero(hero: IHero): void {
      this.heroObject.create(hero);
    },
  },
});

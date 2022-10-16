import api from './index';
import { IHero } from '../../interface/Hero';
import { AxiosResponse } from 'axios';

export class HeroData {
  create(hero: IHero): Promise<AxiosResponse> {
    return api.post('/', hero);
  }

  delete(id: string): Promise<AxiosResponse> {
    return api.delete(`/${id}`);
  }

  async getHeroesWithPage(
    page: number,
  ): Promise<{ heroes: IHero[]; maxPages: number }> {
    const { data } = await api.get(`/?page=${page}`);
    return data;
  }

  async updateHero(hero: IHero): Promise<IHero> {
    const { data } = await api.put('/', hero);
    return data;
  }
}

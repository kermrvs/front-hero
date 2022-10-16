import {IImages} from './IImages';

export interface IHero {
  _id?:string
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: string;
  catch_phrase: string;
  images: IImages[];
}

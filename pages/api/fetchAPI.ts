import axios from 'axios';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { PROPERTIES } from '../../src/config/properties';

const gf = new GiphyFetch(PROPERTIES.API_KEY);

export const getTrendingGifs = async () => {
  const { data: gifs } = await gf.trending({ limit: 10 });
  return gifs;
};

export const getArtistGifs = async () => {
  const { data: gifs } = await gf.gifs('art', 'loop');
  return gifs;
};

export const getTrendingClips = async () => {
  const { data: clips } = await gf.trending({ type: 'videos', limit: 3 });
  return clips;
};

export const getStoryGifs = async () => {
  const { data: gifs } = await gf.trending({ limit: 25 });
  return gifs;
};
import { Project } from '../types';
import weatherForecast from '../projects/portrait-photography/config';

export const projects: Project[] = [
  weatherForecast,
].map(config => ({
  id: config.id,
  title: config.title,
  description: config.description,
  category: config.category,
  imageUrl: config.images?.[0]?.url || '',
  link: config.link || '#'
}));
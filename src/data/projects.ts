import { Project } from '../types';
import portraitPhotograph from '../projects/portrait-photography/config';
import quoteCardGenerator from '../projects/quote-card-generator/config';
import tileUp from '../projects/tile-up/config';

export const projects: Project[] = [
  portraitPhotograph,
  quoteCardGenerator,
  tileUp,
].map(config => ({
  id: config.id,
  title: config.title,
  description: config.description,
  category: config.category,
  imageUrl: config.images?.[0]?.url || '',
  link: config.link || '#'
}));
import { Project } from '../types';
import portraitPhotograph from '../projects/portrait-photography/config';
import quoteCardGenerator from '../projects/quote-card-generator/config';

export const projects: Project[] = [
  portraitPhotograph,
  quoteCardGenerator,
].map(config => ({
  id: config.id,
  title: config.title,
  description: config.description,
  category: config.category,
  imageUrl: config.images?.[0]?.url || '',
  link: config.link || '#'
}));
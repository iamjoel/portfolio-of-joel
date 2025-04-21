export type Category = 'all' | 'picture' | 'web' | 'design';

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: '所有' },
  { id: 'picture', label: 'AI 生图' },
];

const site = {
  title: 'Portfolio',
  description: 'Joel 的作品库',
}

export default site

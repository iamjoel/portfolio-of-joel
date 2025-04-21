export type Category = 'all' | 'ai-picture' | 'design-tools';

export const categories: { id: Category; label: string }[] = [
  { id: 'all', label: '所有' },
  { id: 'ai-picture', label: 'AI 生图' },
  { id: 'design-tools', label: '设计工具' }
];

const site = {
  title: 'Portfolio',
  description: 'Joel 的作品库',
}

export default site

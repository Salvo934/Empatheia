import { stories as initialStories, categories } from './stories';

export { categories };

export function getStories() {
  return [...initialStories];
}

export function getStoryBySlug(slug) {
  return getStories().find((s) => s.slug === slug) || null;
}

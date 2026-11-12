import { CakeCategory, CakeProduct } from '../types';

export function filterProducts(
  products: CakeProduct[],
  activeCategory: 'todos' | CakeCategory,
  searchQuery: string
): CakeProduct[] {
  let filtered = [...products];

  if (activeCategory !== 'todos') {
    filtered = filtered.filter((p) => p.category === activeCategory);
  }

  const query = searchQuery.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query)
    );
  }

  return filtered;
}

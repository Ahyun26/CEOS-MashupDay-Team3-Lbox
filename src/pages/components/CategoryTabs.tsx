import { useState } from 'react';

const CATEGORIES = [
  '판례',
  '결정례',
  '유권해석',
  '주석·실무서',
  '법령',
  '행정규칙',
  '자치법규',
  '내규·지침',
  '논문',
  '법률칼럼',
] as const;

type Category = (typeof CATEGORIES)[number];

const CategoryTabs = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('판례');

  return (
    <nav aria-label="검색 자료 유형">
      <ul className="flex items-center justify-center">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <li key={category}>
              <button
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`h-[1.75rem] cursor-pointer px-[0.5rem] text-[0.75rem] font-medium ${
                  isSelected ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-600'
                }`}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoryTabs;

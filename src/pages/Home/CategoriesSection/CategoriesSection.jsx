import React from 'react';

import Category from '../../../components/Category/Category';

const CategoriesSection = () => {
  const categories = [
    {
      title: 'Category 1',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    },
    {
      title: 'Category 2',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    },
    {
      title: 'Category 3',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    },
    {
      title: 'Category 4',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    },
  ];

  return (
    <section id='categories'>
      {categories.map((category, index) => (
        <Category key={index} title={category.title} items={category.items} />
      ))}
    </section>
  );
};

export default CategoriesSection;

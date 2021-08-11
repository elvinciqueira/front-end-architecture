import React from 'react';
import ProductList, { statusTypes } from './ProductList';
import { action } from '@storybook/addon-actions';

export default { title: 'patterns/ProductList' };

const data = [
  {
    id: 1,
    name: 'Mocha',
    price: 3.5,
    onAddToCart: action('ON ADD TO CART'),
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  },
  {
    id: 2,
    name: 'Latte',
    price: 3.5,
    onAddToCart: action('ON ADD TO CART'),
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  },
  {
    id: 3,
    name: 'Vanilla Latte',
    price: 3.5,
    onAddToCart: action('ON ADD TO CART'),
    imageUrl: 'https://source.unsplash.com/tNALoIZhqVM/200x100/',
  },
];

export const Loading = () => <ProductList status={statusTypes.loading} />;

export const Error = () => <ProductList status={statusTypes.errored} />;

export const Standard = () => (
  <ProductList data={data} status={statusTypes.loaded} />
);

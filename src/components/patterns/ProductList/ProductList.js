import React from 'react';
import ProductListItem from '../ProductListItem';

const Loading = () => <span>Loading</span>;
const Error = ({ message }) => <span>An error has occurred! {message}</span>;

export const listTypes = {
  productList: 'productList',
  cart: 'cart',
};

export const statusTypes = {
  loading: 'loading',
  errored: 'errored',
  loaded: 'loaded',
};

export default function ProductList({ data, status, onAddToCart, listType }) {
  if (status === statusTypes.loading) {
    return <Loading />;
  }

  if (status === statusTypes.errored) {
    return <Error message="Failed to load data" />;
  }

  return data.map((item) => (
    <ProductListItem
      key={item.id}
      name={item.name}
      price={item.price}
      imageUrl={item.imageUrl}
      isInCart={listType === listTypes.cart}
      onAddToCard={() => onAddToCart(item.id)}
    />
  ));
}

ProductList.defaultProps = {
  status: statusTypes.loading,
};

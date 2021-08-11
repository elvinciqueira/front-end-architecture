import React, { useState, useEffect } from 'react';
import ProductList, { statusTypes } from '../../patterns/ProductList';

export default function Products() {
  const [productState, setProductState] = useState({
    data: [],
    status: 'loading',
  });
  useEffect(() => {
    fetch('/api/products')
      .then((productFetch) => {
        if (productFetch.ok) {
          return productFetch.json();
        }
      })
      .then((productResponse) => {
        setProductState({
          data: productResponse.data,
          status: statusTypes.loaded,
        });
      })
      .catch((ex) => {
        console.error(ex);
        setProductState({
          data: [],
          status: statusTypes.errored,
        });
      });
  }, []);
  return <ProductList data={productState.data} status={productState.status} />;
}

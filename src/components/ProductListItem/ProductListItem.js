import React from 'react';
import './ProductListItem.css';

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  const buttonText = isSoldOut ? 'Sold Out' : 'Add to Cart';
  const cardClassName = isOnSale ? 'card sale' : 'card';

  return (
    <div className={cardClassName}>
      <h2>
        {name} {isOnSale && '(On Sale)'}
      </h2>
      <img src={imageUrl} alt={name} />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {buttonText}
      </button>
    </div>
  );
}

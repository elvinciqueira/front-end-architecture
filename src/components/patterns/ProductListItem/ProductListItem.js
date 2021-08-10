import React from 'react';
import './ProductListItem.css';
import Heading from '../../atoms/Heading';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';

export default function ProductListItem({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) {
  const buttonText = isSoldOut ? 'Sold Out' : 'Add to Cart';

  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && '(On Sale)'}
      </Heading>
      <img src={imageUrl} alt={name} />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {buttonText}
      </Button>
    </Card>
  );
}

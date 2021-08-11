import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { OnSale, SoldOut, Standard } from './ProductListItem.stories';

describe('<ProductListItem />', () => {
  describe('when isOnSale', () => {
    it('shows on sale label', () => {
      render(<OnSale />);
      const onSaleText = screen.getByText(/\(on sale\)/i);
      expect(onSaleText).toBeInTheDocument();
    });
  });

  describe('when isSoldOut', () => {
    it('disables the button', () => {
      render(<SoldOut />);
      const button = screen.getByRole('button', {
        name: /sold out/i,
      });
      expect(button).toBeDisabled();
    });
  });

  describe('when button Add To Cart pressed', () => {
    it('calls callback', () => {
      const onAddToCart = jest.fn();
      render(<Standard onAddToCart={onAddToCart} />);
      const button = screen.getByRole('button', {
        name: /add to cart/i,
      });
      fireEvent.click(button);
      expect(onAddToCart).toHaveBeenCalled();
    });
  });
});

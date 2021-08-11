import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loading, Error, Standard } from './ProductList.stories';

describe('<ProductList />', () => {
  describe('when status loading', () => {
    it('shows loading', () => {
      render(<Loading />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });

  describe('when status errored', () => {
    it('shows errored message', () => {
      render(<Error />);
      expect(
        screen.getByText(/an error has occurred! failed to load data/i)
      ).toBeInTheDocument();
    });
  });

  describe('when status loaded', () => {
    it('shows product list', () => {
      render(<Standard />);
      const headings = screen.getAllByRole('heading');
      const productName = headings.map((heading) => heading.textContent);
      expect(productName).toMatchInlineSnapshot(`
        Array [
          "Mocha ",
          "Latte ",
          "Vanilla Latte ",
        ]
      `);
    });
  });
});

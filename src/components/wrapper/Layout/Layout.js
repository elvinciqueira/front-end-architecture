import React from 'react';
import Header from '../../patterns/Header';
import Footer from '../../patterns/Footer';
import Navigation from '../../patterns/Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

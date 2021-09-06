import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  //* Add Header or Footer here and it will show on all pages
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

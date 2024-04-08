import React from "react";
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h2> The Products Page..</h2>
      <ul>
        <li><Link to="/products/p1">Apple Iphone</Link> </li>
        <li><Link to="/products/p2">Samsung s23 Ultra</Link></li>
        <li><Link to="/products/p3">Google Pixel</Link> </li>
      </ul>
    </section>
  );
};

export default Products;

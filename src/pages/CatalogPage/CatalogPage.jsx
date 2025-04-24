import Card from "./Card/Card";
import s from './CatalogPage.module.css';
import { products } from "../../products";
import { useState } from "react";

export default function CatalogPage({ cart, setCart }) {
  const [search, setSearch] = useState('');

  const addToCart = (productId) => {
    console.log('Adding to cart:', productId);
    setCart([...cart, productId]);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="catalog">
      <div className="container">
        <h2>Каталог товаров</h2>
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={s.cards}>
          {filteredProducts.map(product => (
            <Card 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imagePath={product.imagePath}
              addToCart={() => addToCart(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
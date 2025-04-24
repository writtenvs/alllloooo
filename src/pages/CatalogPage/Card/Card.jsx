import s from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({ id, name, price, imagePath, addToCart }) {
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Button clicked for product:', id);
    addToCart();
  };

  return (
    <div className={s.card_wrapper}>
      <Link to={`/catalog/${id}`} className={s.card_link}>
        <div className={s.card}>
          <div className={s.card_img}>
            <img src={imagePath} alt={name} />
          </div>
          <div className={s.inner}>
            <h3>{name}</h3>
            <p className={s.price}>{price} ₽</p>
          </div>
        </div>
      </Link>
      <button 
        onClick={handleAddToCart}
        className={s.add_to_cart_btn}
      >
        В корзину
      </button>
    </div>
  );
}
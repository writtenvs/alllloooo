import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header({ cart }) {
  return (
    <header className={s.header}>
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
        <NavLink to="/about_us">О нас</NavLink>
        <NavLink to="/cart" className={s.cart_link}>
          Корзина ({cart.length})
        </NavLink>
      </nav>
    </header>
  );
}
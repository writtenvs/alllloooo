import Card from "./Card/Card";
import BlueBtn from "../../components/BlueBtn/BlueBtn"; // Example - use if you have a styled button component
import CatalogWhiteBtn from '../CatalogPage/CatalogWhiteBtn/CatalogWhiteBtn';
import s from './CatalogPage.module.css';
import { products } from "../../products";
import Search from "../../components/Search/Search";
import { useState } from "react";

const categoryButtons = [
    { value: 'all', label: 'Все товары' },
    { value: 'tires', label: 'Шины/колеса' },
    { value: 'oils', label: 'Масла' },
    { value: 'airFresh', label: 'Ароматизаторы' }
];


export default function CatalogPage() {
    const [search, setSearch] = useState('');
    const [sorting, setSorting] = useState("0");
    const [category, setCategory] = useState('all');

    function sort(e) {
        setSorting(e.target.value);
    }

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function sortProducts(sorting, products) {
        switch (sorting) {
            case 'asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'desc':
                return [...products].sort((a, b) => b.price - a.price);
            default:
                return products;
        }
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === 'all' || product.categoryId === category)
    );

    const sortedProducts = sortProducts(sorting, filteredProducts);

    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <h2 className="catalog__title">Каталог товаров</h2>
                    <Search handleChange={handleChange} />
                    <select value={sorting} onChange={sort}>
                        <option value="0">Сортировать</option>
                        <option value="asc">По возрастанию цены</option>
                        <option value="desc">По убыванию цены</option>
                    </select>
                    <br />
                    <div className={s.categoryButtons}>
                        {categoryButtons.map(cat => (
                            <button
                                key={cat.value}
                                onClick={() => setCategory(cat.value)}
                                className={category === cat.value ? s.active : ''} // Example - add a class for active category
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                    <br/>
                    <div className={s.cards}>
                        {sortedProducts.length ?
                            sortedProducts.map(product => <Card key={product.id} {...product} />)
                            :
                            <p>По запросу "{search}" ничего не найдено</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
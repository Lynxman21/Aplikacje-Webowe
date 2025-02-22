import React from 'react';
import Product from './Produkt';

const ShoppingCart: React.FC = () => {
    return (
        <div>
            <h2>Koszyk</h2>
            <Product name="Jabłko"/>
            <Product name="Gruszka"/>
            <Product name="Banan"/>
            <Product name="Pomarańcza"/>
            <Product name="Winogrona"/>
        </div>
    );
};

export default ShoppingCart;
import React from "react";
import Product from "./Produkt";

const NewShoppingCard: React.FC = () => {
    const Products = ["Jabłko","Gruszka","Banan","Pomarańcza","Winogrona"];

    return (
        <div>
            <h2>Nowy koszyk</h2>
            {Products.map((name,index) => (
                <Product key={index} name={name}/>
            ))}
        </div>
    );
};

export default NewShoppingCard;
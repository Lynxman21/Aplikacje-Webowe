import React, { useState } from "react";

interface Product {
    name: string;
    price: number;
}

const Update: React.FC = () => {
    const [product,setProduct] = useState<Product>({name: 'Pomidor',price: 50});
    
    const changePrice = () => {
        //() to mark that it returns object
        setProduct((prevProduct) => ({
            ...prevProduct,
            price: 100,
        }));
    };

    return (
        <div>
            <div>
                Aktualnie {product.name} kosztuje {product.price} zł
            </div>
            <button onClick={changePrice}>Zmień cene</button>
        </div>
    );
};

export default Update;
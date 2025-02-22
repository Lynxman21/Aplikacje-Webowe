import React from 'react';

interface ProductProps {
    index: number;
    name: string;
}

const Product: React.FC<ProductProps> = ({ name }) => {
    return <div>{name}</div>;
};

export default Product;
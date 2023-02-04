import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 my-10 mx-4'>
            {
                cart.sort((a, b) => a.id - b.id).map(product => <ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Cart;
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // console.log(products)
    const state = useSelector((state) => state)
    console.log(state)
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-4 my-10 mx-4'>
            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                ></ProductCard>)
            }
        </div>
    );
};

export default Home;
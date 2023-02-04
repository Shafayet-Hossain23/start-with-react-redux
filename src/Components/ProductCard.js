import React from 'react';
import { useDispatch } from 'react-redux';
import { addTOCart, removeFromCart } from '../Redux/actionFunctions/actionFunctions';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg shadow-yellow-500/50 h-[550px]">
                {pathname.includes("cart") && <div className='flex justify-end px-2'>
                    <p className='rounded-full bg-violet-500 text-white px-2'>{product.quantity}</p>
                </div>}
                <figure><img className='h-56' src={product.image} alt="Shoes" /></figure>
                <div className="card-body pt-0 px-10">
                    <h2 className="card-title">
                        {product.model}
                        <div className="badge badge-secondary">{product.rating}.00</div>
                    </h2>
                    <p>{product.keyFeature}</p>
                    <p className='text-red-500 font-semibold'>{product.price} tk</p>
                    {!pathname.includes("cart") && <div className="card-actions justify-end">
                        <div onClick={() => dispatch(addTOCart(product))} className="badge badge-outline cursor-pointer hover:bg-green-400">Add to Cart</div>
                        <div className="cursor-pointer hover:bg-pink-400 badge badge-outline">Wishlist</div>
                    </div>}
                    {pathname.includes("cart") && <div className='flex justify-center py-1 bottom- rounded-full bg-slate-200 hover:bg-red-400 cursor-pointer' onClick={() => dispatch(removeFromCart(product))} >
                        <div><RiDeleteBin2Fill className='inline ' /> <span className='pl-2 pt-3'>Remove from cart</span></div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
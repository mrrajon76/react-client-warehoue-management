import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItem = (props) => {
    const { image, name, desc, price, quantity, supplier } = props.data;
    return (
        <div>
            <div className='mt-5 md:py-3 grid grid-cols-1 md:grid-cols-5 border-2 border-gray-200 hover:bg-gray-200'>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <img src={image} alt="" className='w-1/3 md:w-1/2 lg:w-1/3' />
                </div>
                <div className='py-3 md:py-0 md:col-span-3 border-y-2 md:border-y-0 border-x-0 md:border-x-2 border-gray-200 px-5'>
                    <h5 className='text-lg lg:text-xl font-bold text-lime-500'>{name}</h5>
                    <p className='my-3 text-sm'>{desc}</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <p className='my-1'><span className='text-purple-700 font-bold'>Price:</span> {price} TK</p>
                        <p className='my-1'><span className='text-purple-700 font-bold'>Stock Quantity:</span> {quantity}</p>
                        <p className='my-1 md:col-span-2 lg:ml-5'><span className='text-purple-700 font-bold'>Supplier:</span> {supplier}</p>
                    </div>
                </div>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <Link to='/manage-inventories'>
                        <button className='bg-purple-700 hover:bg-lime-500 text-white py-2 px-3 lg:px-5 rounded'>Manage Stock</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;
import React from 'react';
import { Link } from 'react-router-dom';

const Item = () => {
    return (
        <div>
            <div className='mt-5 md:py-3 grid grid-cols-1 md:grid-cols-5 border-2 border-gray-200 hover:bg-gray-100'>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <img src="https://i.ibb.co/fSyDzH4/gs-x6010mc.jpg" alt="" className='w-1/3 md:w-1/2 lg:w-1/3' />
                </div>
                <div className='py-3 md:py-0 md:col-span-3 border-y-2 md:border-y-0 border-x-0 md:border-x-2 border-gray-200 px-5'>
                    <h5 className='text-lg lg:text-xl font-bold text-lime-500'>LG Refrigerator 647L side-by-side</h5>
                    <p className='my-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae numquam exercitationem aut neque fuga vero.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <p className='my-1'><span className='text-purple-700 font-bold'>Price:</span> $200</p>
                        <p className='my-1'><span className='text-purple-700 font-bold'>Stock Quantity:</span> 100</p>
                        <p className='my-1 md:col-span-2 lg:col-auto'><span className='text-purple-700 font-bold'>Supplier:</span> LG Bangladesh</p>
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

export default Item;
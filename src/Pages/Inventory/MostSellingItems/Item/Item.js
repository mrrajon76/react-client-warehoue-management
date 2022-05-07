import React from 'react';

const Item = () => {
    return (
        <div>
            <div className='md:py-3 grid grid-cols-1 md:grid-cols-5 shadow-lg shadow-gray-200 hover:shadow-gray-400'>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <img src="https://i.ibb.co/fSyDzH4/gs-x6010mc.jpg" alt="" className='w-1/3 lg:w-1/3' />
                </div>
                <div className='flex justify-center items-center py-3 md:py-0 md:col-span-3 border-y-2 md:border-y-0 border-x-0 md:border-x-2 border-slate-100 px-5'>
                    <h4 className='text-center text-lg lg:text-xl font-semibold'>LG Refrigerator 647L side-by-side</h4>
                </div>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <h4 className='text-xl font-semibold text-purple-700'>Sold: <span className='text-lime-500'>54</span> </h4>
                </div>
            </div>
        </div>
    );
};

export default Item;
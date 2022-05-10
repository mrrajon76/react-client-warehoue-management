import React from 'react';
import { useNavigate } from 'react-router-dom';

const MostSellingItem = ({ data }) => {
    const { _id, image, name, sold } = data;
    const navigate = useNavigate();

    const navigateToManageStock = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div>
            <div className='md:py-3 grid grid-cols-1 md:grid-cols-5 shadow-lg shadow-gray-200 border-2 border-slate-100 hover:shadow-gray-400'>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <img src={image} alt="" className='h-28 md:h-16 lg:h-14' />
                </div>
                <div className='flex justify-center items-center py-3 md:py-0 md:col-span-3 border-y-2 md:border-y-0 border-x-0 md:border-x-2 border-slate-100 px-5'>
                    <h4 onClick={() => navigateToManageStock(_id)} className='cursor-pointer text-center text-lg lg:text-xl font-semibold'>{name}</h4>
                </div>
                <div className='py-3 md:py-0 flex justify-center items-center mx-3'>
                    <h4 className='text-xl font-semibold text-purple-700'>Sold: <span className='text-lime-500'>{sold}</span> </h4>
                </div>
            </div>
        </div>
    );
};

export default MostSellingItem;
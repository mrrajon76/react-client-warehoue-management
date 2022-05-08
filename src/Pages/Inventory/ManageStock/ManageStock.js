import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useSingleItem from '../../../hooks/useSingleItem';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ManageStock = () => {
    const { id } = useParams();
    const [details] = useSingleItem(id);
    const [open, setOpen] = useState(false);

    const handleDelivery = id => {
    }

    const handleRestock = () => {
    }


    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-4 md:mx-0 md:px-12 lg:px-24 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap:5 md:gap-10'>
                    <div>
                        <img src={details.image} alt="" className='w-3/4 md:w-full block mx-auto' />
                    </div>
                    <div className='md:col-span-3 mt-4 md:mt-0'>
                        <table className='w-full table-auto text-left'>
                            <tbody>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Name</th>
                                    <td className='text-xl font-bold text-lime-500 py-3 px-3 lg:px-5'>{details.name}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Item ID</th>
                                    <td className='py-3 text-sm px-3 lg:px-5'>{details._id}</td>
                                </tr>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Added by</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.addedBy}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Description</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.desc}</td>
                                </tr>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Supplier</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.supplier}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Price</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.price} TK</td>
                                </tr>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Quantity</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.quantity}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Item sold</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.sold}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='mt-5 flex justify-center md:justify-start'>
                            <button onClick={() => handleDelivery(details._id)} className='bg-purple-700 hover:bg-lime-500 text-white py-2 px-6 rounded'>Delivered</button>
                            <button className='hover:bg-lime-500 bg-red-700 text-white py-2 px-6 rounded ml-3'>Delete Item</button>
                        </div>
                        <div className='mt-5'>
                            <form onSubmit={handleRestock()} className='flex justify-center md:justify-start'>
                                <input type="text" name="restock" id="" placeholder='Item numbers' className='border border-slate-300 py-2 px-3 w-1/2 md:w-1/3' />
                                <input type="submit" value="Add Stock" className='hover:bg-purple-700 bg-lime-500 text-white py-2 border border-lime-500 hover:border-purple-700 px-6 cursor-pointer' />
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageStock;
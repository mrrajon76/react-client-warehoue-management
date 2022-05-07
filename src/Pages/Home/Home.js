import React from 'react';
import { Link } from 'react-router-dom';
import InventoryItems from '../Inventory/InventoryItems/InventoryItems';
import MostSellingItems from '../Inventory/MostSellingItems/MostSellingItems';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>

            {/* Homepage body */}
            <div className='min-h-[70vh] px-6 md:px-12 lg:px-24'>
                {/* Banner */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-10 md:py-24'>
                    <div className='flex items-center order-2 md:order-1'>
                        <div className='text-center md:text-left'>
                            <h1 className='text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-[3.88rem] font-extrabold text-purple-700'><span className='text-lime-500'>Electronics</span> Inventory Management</h1>
                            <p className='text-lg my-6'>Manage your electronics product's inventory easily by using <b>Electronics Inventory Management</b> system. It's easy to use, smart to handle a large amount of product.</p>
                            <Link to='/manage-inventories'>
                                <button className='hover:bg-purple-700 bg-lime-500 text-white py-3 px-5 rounded'>Manage Inventories</button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex items-center order-1 md:order-2'>
                        <img src="https://i.ibb.co/GxwbtbW/11065.jpg" alt="" className='w-full lg:w-11/12 block ml-auto' />
                    </div>
                </div>

                {/* Inventory items section */}
                <div>
                    <div className='mb-7'>
                        <h2 className='text-3xl md:text-5xl font-bold text-purple-700 text-center'>Inventory Items</h2>
                    </div>

                    {/* items */}
                    <InventoryItems></InventoryItems>

                    {/* Manage inventory button */}
                    <div className='flex justify-center mt-8'>
                        <Link to='/manage-inventories'>
                            <button className='hover:bg-purple-700 bg-lime-500 text-white py-3 px-5 rounded'>Manage Inventories</button>
                        </Link>
                    </div>
                </div>

                {/* Most selling items section */}
                <div className='my-16'>
                    <div className='mb-7'>
                        <h2 className='text-3xl md:text-5xl font-bold text-purple-700 text-center'>Most Selling Items</h2>
                    </div>

                    {/* items */}
                    <MostSellingItems></MostSellingItems>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;
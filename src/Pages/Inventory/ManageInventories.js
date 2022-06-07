import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import InventoryItems from './InventoryItems/InventoryItems/InventoryItems';

const ManageInventories = () => {

    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-6 md:px-12 lg:px-24 py-16'>
                <InventoryItems></InventoryItems>
            </div>

            <div className='mb-16'>
                <Link to='/add-new-item'><button className='bg-lime-500 hover:bg-purple-700 text-white py-2 px-6 rounded block mx-auto'>Add a New Item</button></Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageInventories;
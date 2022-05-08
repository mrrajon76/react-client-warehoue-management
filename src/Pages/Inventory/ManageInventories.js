import React from 'react';
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

            <Footer></Footer>
        </div>
    );
};

export default ManageInventories;
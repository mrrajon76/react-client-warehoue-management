import React from 'react';
import useItems from '../../../hooks/useItems';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import InventoryItem from '../InventoryItem/InventoryItem';

const SoldOutItems = () => {
    const [items, setItems] = useItems();
    const soldOut = items.filter(item => item.quantity === 0);

    // Delete item
    const handleDelete = (id) => {
        if (window.confirm("Are you really want to delete this item?") === true) {
            const url = `https://blooming-harbor-14420.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-6 md:px-12 lg:px-24 py-16'>
                {
                    soldOut.length !== 0 ? soldOut.map(item => <InventoryItem data={item} key={item._id} dlt={handleDelete}></InventoryItem>) : <h4 className='text-center text-lg text-purple-700'>No items to show!</h4>
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default SoldOutItems;
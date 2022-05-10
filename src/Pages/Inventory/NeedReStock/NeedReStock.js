import React from 'react';
import useItems from '../../../hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';

const NeedReStock = () => {
    const [items, setItems] = useItems();

    const needStock = items.filter(item => item.quantity < 40);

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
            {
                needStock.length !== 0 ? needStock.map(item => <InventoryItem data={item} key={item._id} dlt={handleDelete}></InventoryItem>) : <h4 className='text-center text-lg text-purple-700'>All item's stock is more than 40. So relax</h4>
            }
        </div>
    );
};

export default NeedReStock;
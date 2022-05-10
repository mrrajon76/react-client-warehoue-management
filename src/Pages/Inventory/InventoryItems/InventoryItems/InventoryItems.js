import React from 'react';
import useItems from '../../../../hooks/useItems';
import InventoryItem from '../../InventoryItem/InventoryItem';

const InventoryItems = (props) => {

    const [items, setItems] = useItems();

    // Delete item
    const handleDelete = (id) => {
        if (window.confirm("Are you really want to delete this item?") === true) {
            const url = `http://localhost:5000/inventory/${id}`;
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
                props.children ?
                    items?.slice(0, 6).map(item => <InventoryItem data={item} key={item._id} dlt={handleDelete}></InventoryItem>)
                    :
                    items?.map(item => <InventoryItem data={item} key={item._id} dlt={handleDelete}></InventoryItem>)
            }
        </div>
    );
};

export default InventoryItems;
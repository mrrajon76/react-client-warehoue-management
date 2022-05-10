import React from 'react';
import useItems from '../../../../hooks/useItems';
import InventoryItem from '../../InventoryItem/InventoryItem';

const InventoryItems = (props) => {

    const [items] = useItems();

    return (
        <div>
            {
                props.children ?
                    items?.slice(0, 6).map(item => <InventoryItem data={item} key={item._id}></InventoryItem>)
                    :
                    items?.map(item => <InventoryItem data={item} key={item._id}></InventoryItem>)
            }
        </div>
    );
};

export default InventoryItems;
import React from 'react';
import Item from './MostSellingItem/MostSellingItem';

const MostSellingItems = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 lg:gap-8'>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
        </div>
    );
};

export default MostSellingItems;
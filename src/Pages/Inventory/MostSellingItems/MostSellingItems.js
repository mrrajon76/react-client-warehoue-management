import React from 'react';
import useItems from '../../../hooks/useItems';
import MostSellingItem from './MostSellingItem/MostSellingItem';

const MostSellingItems = () => {
    const [items] = useItems();

    const mostSellingItems = items.sort((a, b) => b.sold - a.sold);

    return (
        <div className='grid lg:grid-cols-2 gap-5 lg:gap-8'>
            {
                mostSellingItems?.slice(0, 6).map(item => <MostSellingItem data={item} key={item._id}></MostSellingItem>)
            }
        </div>
    );
};

export default MostSellingItems;
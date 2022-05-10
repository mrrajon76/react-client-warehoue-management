import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useMyItems from '../../../hooks/useMyItems';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import InventoryItem from '../InventoryItem/InventoryItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items] = useMyItems(user.email);

    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-6 md:px-12 lg:px-24 py-16'>
                {
                    items?.map(item => <InventoryItem data={item} key={item._id}></InventoryItem>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyItems;
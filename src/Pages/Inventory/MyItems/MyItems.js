import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useMyItems from '../../../hooks/useMyItems';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import InventoryItem from '../InventoryItem/InventoryItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useMyItems(user.email);

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
            <Header></Header>

            <div className='min-h-[70vh] px-6 md:px-12 lg:px-24 py-16'>
                {
                    items?.map(item => <InventoryItem data={item} key={item._id} dlt={handleDelete}></InventoryItem>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default MyItems;
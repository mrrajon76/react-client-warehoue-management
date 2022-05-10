import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useItems from '../../../hooks/useItems';
import useSingleItem from '../../../hooks/useSingleItem';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const ManageStock = () => {
    const { id } = useParams();
    const [details] = useSingleItem(id);
    const [items, setItems] = useItems();
    const [quantity, setQuantity] = useState(0);
    const [sold, setSold] = useState(0);

    useEffect(() => {
        if (details.quantity === 0) {
            setQuantity('Sold Out');
        }
        setQuantity(details.quantity);
        setSold(details.sold);
    }, [details.quantity, details.sold])

    // Handle delivery and sold field
    const handleDelivery = id => {
        if (quantity > 0) {
            const newQuantity = quantity - 1;
            const newSold = sold + 1;
            if (newQuantity === 0) {
                setQuantity('Sold Out');
            }
            else {
                setQuantity(newQuantity);
            }
            setSold(newSold);

            const data = { newQuantity, newSold };
            updateData(id, data);
        }
        else {
            setQuantity('Sold Out')
            toast('This is item is sold out, please re-stock first.');
        }
    }

    // Delete item
    const handleDelete = id => {
        if (window.confirm("Do you really want to delete this item?") === true) {
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
            window.history.back();
        }
    }

    // Add new stock quantity
    const handleRestock = event => {
        event.preventDefault();
        const stock = event.target.restock.value;
        const newQuantity = quantity + parseInt(stock);
        setQuantity(newQuantity);
        const newSold = false;
        const data = { newQuantity, newSold };
        updateData(id, data);
        toast("New stock quantity added");
        event.target.reset();
    }

    // Update data
    const updateData = (id, data) => {
        const url = `https://blooming-harbor-14420.herokuapp.com/inventory/${id}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    // // Go to all inventory page{
    // const goToInventories = () => {
    //     navigate('/manage-inventories');
    // }

    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-4 md:mx-0 md:px-12 lg:px-24 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap:5 md:gap-10'>
                    <div>
                        <img src={details.image} alt="" className='w-3/4 md:w-full block mx-auto' />
                    </div>
                    <div className='md:col-span-3 mt-4 md:mt-0'>
                        <table className='w-full table-auto text-left'>
                            <tbody>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Name</th>
                                    <td className='text-xl font-bold text-lime-500 py-3 px-3 lg:px-5'>{details.name}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Item ID</th>
                                    <td className='py-3 text-sm px-3 lg:px-5'>{details._id}</td>
                                </tr>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Added by</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.addedBy}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Description</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.desc}</td>
                                </tr>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Supplier</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.supplier}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Price</th>
                                    <td className='py-3 px-3 lg:px-5'>{details.price} TK</td>
                                </tr>
                                <tr>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Quantity</th>
                                    <td className='py-3 px-3 lg:px-5'>{quantity}</td>
                                </tr>
                                <tr className='bg-slate-100'>
                                    <th className='text-purple-700 font-semibold py-3 px-3 lg:px-5'>Item sold</th>
                                    <td className='py-3 px-3 lg:px-5'>{sold}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='mt-5 flex flex-col md:flex-row justify-center md:justify-start'>
                            <div className='mx-auto md:mx-0'>
                                <button onClick={() => handleDelivery(details._id)} className='bg-purple-700 hover:bg-lime-500 text-white py-2 px-6 rounded'>Delivered</button>
                            </div>
                            <div className='mx-auto mt-3 md:mx-0 md:mt-0'>
                                <button onClick={() => handleDelete(details._id)} className='hover:bg-lime-500 bg-red-700 text-white py-2 px-6 rounded ml-0 md:ml-3'>Delete Item</button>
                            </div>
                            <div className='mx-auto mt-3 md:mx-0 md:mt-0'>
                                <Link to='/manage-inventories'><button className='bg-lime-500 hover:bg-purple-700 text-white py-2 px-6 rounded ml-0 md:ml-3'>All Items</button></Link>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <form onSubmit={handleRestock} className='flex justify-center md:justify-start'>
                                <input type="text" name="restock" id="" placeholder='Item numbers' className='border border-slate-300 py-2 px-3 w-1/2 md:w-1/3' />
                                <input type="submit" value="Add Stock" className='hover:bg-purple-700 bg-lime-500 text-white py-2 border border-lime-500 hover:border-purple-700 px-6 cursor-pointer' />
                            </form>
                        </div>
                    </div>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ManageStock;
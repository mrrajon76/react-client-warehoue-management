import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const AddNewItem = () => {

    const [user] = useAuthState(auth);

    const handleAddItem = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const image = event.target.image.value;
        const desc = event.target.description.value;

        const addedBy = user.email;
        const sold = 0;

        if (name && price && quantity && supplier && image && desc) {
            const data = { image, name, desc, price, quantity, supplier, addedBy, sold }

            fetch('https://blooming-harbor-14420.herokuapp.com/inventory', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                })

            toast('Thank you! Item is added successfully.')
            event.target.reset();
        }
    }

    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-6 md:px-12 lg:px-24 py-16'>
                <div className=''>
                    <h3 className='text-4xl lg:text-5xl text-lime-500 font-extrabold text-center mb-6'>Add a New Item</h3>

                    <form onSubmit={handleAddItem}>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="name" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                            <label for="name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="price" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                                <label for="price" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Price</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="quantity" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                                <label for="quantity" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock Quantity</label>
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="supplier" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                                <label for="supplier" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Supplier Name</label>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="url" name="image" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                            <label for="image" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Image</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea rows={3} name="description" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " />
                            <label for="description" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Add a short Description...</label>
                        </div>
                        <button type="submit" className="text-white bg-purple-700 hover:bg-lime-500 focus:outline-none uppercase rounded px-16 py-2 text-center">Add Now</button>
                    </form>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default AddNewItem;
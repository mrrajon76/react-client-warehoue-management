import React from 'react';
import logo from '../../../Images/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';

const Footer = () => {
    const [items] = useItems();
    const navigate = useNavigate();

    const mostSellingItems = items.sort((a, b) => b.sold - a.sold);

    const navigateToManageStock = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <div>
            <div className='bg-purple-700 py-4 px-3 md:px-10 lg:px-20'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div className='md:mr-8'>
                        <h3 className='text-2xl md:text-3xl mb-4 md:mb-0 text-white font-bold'>Get connected with us:</h3>
                    </div>
                    <div className='text-2xl text-white space-x-5 flex'>
                        <a href="https://facebook.com" target="_blank" rel='noreferrer' className='hover:text-lime-300'><FaFacebook /></a>
                        <a href="https://twitter.com" target="_blank" rel='noreferrer' className='hover:text-lime-300'><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel='noreferrer' className='hover:text-lime-300'><FaLinkedinIn /></a>
                        <a href="https://instagram.com" target="_blank" rel='noreferrer' className='hover:text-lime-300'><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel='noreferrer' className='hover:text-lime-300'><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 px-5 md:px-8 lg:px-16'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 py-7 border-b-2 border-slate-300'>
                    <div className='col-auto md:col-span-3 lg:col-auto'>
                        <Link to='/'><img src={logo} alt="" className='w-32 md:w-56 mx-auto lg:mx-0' /></Link>
                        <p className='mt-4 text-sm text-center lg:text-left'>A modern & smart warehouse management app. Here you can manage your inventories very smartly.</p>
                    </div>
                    <div className='md:mx-4 lg:mx-12'>
                        <h5 className='text-xl md:text-left text-center font-bold text-lime-500 mb-4'>Quick Links</h5>
                        <ul className='nav space-y-2 md:text-left text-center '>
                            <li className='hover:text-purple-700'><Link to='/'>Home</Link></li>
                            <li className='hover:text-purple-700'><Link to='/manage-inventories'>Manage Inventories</Link></li>
                            <li className='hover:text-purple-700'><Link to='/sold-out-items'>Sold Out Items</Link></li>
                            <li className='hover:text-purple-700'><Link to='/blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className='md:mx-4 lg:mx-12'>
                        <h5 className='text-xl md:text-left text-center font-bold text-lime-500 mb-4'>Popular Products</h5>
                        <ul className='nav space-y-2 md:text-left text-center '>
                            {
                                mostSellingItems?.slice(0, 4).map(item => <li onClick={() => navigateToManageStock(item._id)} className='hover:text-purple-700 cursor-pointer'>{item.name}</li>)
                            }
                        </ul>
                    </div>
                    <div className='md:flex justify-end'>
                        <div>
                            <h5 className='text-xl md:text-left text-center font-bold text-lime-500 mb-4'>Contact Us</h5>
                            <ul className='nav space-y-3 md:text-left text-center '>
                                <li><FaPhoneAlt className='inline text-purple-700 hover:text-lime-500 mr-1' /> +8801762811511</li>
                                <li><FaEnvelope className='inline text-purple-700 hover:text-lime-500 mr-1' /> mrrajon76@gmail.com</li>
                                <li><FaMapMarkerAlt className='inline text-purple-700 hover:text-lime-500 mr-1' /> Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='text-sm text-center pt-6 pb-4'>
                    Copyright &copy; {new Date().getFullYear()} <span className='text-purple-700 font-bold'>mrrajon</span>. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
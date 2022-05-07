import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import CustomLink from '../../CustomLink/CustomLink';
import { BiLogInCircle } from 'react-icons/bi';
import { HiMenuAlt2, HiX } from 'react-icons/hi'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* Larger device header */}
            <div className='hidden lg:block'>
                <div className='py-3'>
                    <Link to='/'><img src={logo} alt="" className='block mx-auto w-56' /></Link>
                </div>
                <div className='bg-purple-700 py-3'>
                    <div className='nav text-white space-x-14 flex justify-center'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/manage-inventories'>Manage Inventories</CustomLink>
                        <CustomLink to='/about'>About</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <span className='mx-3 border-r-2 border-purple-400'></span>
                        <CustomLink to='/login'><BiLogInCircle className='inline text-2xl' /> Login</CustomLink>
                    </div>
                </div>
            </div>

            {/* Mobile & Tab device header */}
            <div className='lg:hidden flex justify-between items-center px-3 md:px-10 py-3 shadow-lg shadow-slate-200'>
                <div onClick={() => setOpen(!open)}>
                    {
                        open ? <HiX className='text-2xl md:text-3xl text-purple-700' /> : <HiMenuAlt2 className='text-2xl md:text-3xl text-purple-700' />
                    }
                    <div className={`nav font-semibold flex flex-col space-y-3 py-4 left-0 absolute w-full text-center transition-all ease-in-out duration-700 z-30 text-white bg-purple-700 ${open ? 'md:top-24 top-16' : 'top-[-300px]'}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/manage-inventories'>Manage Inventories</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/blogs'>Blogs</Link>
                    </div>
                </div>
                <div>
                    <Link to='/'><img src={logo} alt="" className='block mx-auto w-32 md:w-48' /></Link>
                </div>
                <div>
                    <Link to='/login' className='font-semibold'><BiLogInCircle className='inline text-2xl md:text-3xl text-lime-500' /> Login</Link>
                </div>
            </div>
        </div >
    );
};

export default Header;
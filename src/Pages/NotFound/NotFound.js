import React from 'react';
import { Link } from 'react-router-dom';
import notFoundGif from '../../Images/404.gif';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center min-h-screen mx-5 md:mx-10'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex items-center'>
                    <img src={notFoundGif} alt="" />
                </div>
                <div className='flex items-center'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-4xl md:text-6xl font-extrabold text-lime-500'>UH OH! You're lost</h1>
                        <p className='text-lg md:text-xl text-slate-600 my-6 leading-8'>The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage.</p>
                        <button className='bg-purple-700 hover:bg-lime-500 text-white rounded py-3 px-6 font-semibold uppercase'><Link to='/'>Go to Homepage</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
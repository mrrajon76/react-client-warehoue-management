import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import auth from '../../../firebase.init';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {

    const emailRef = useRef();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorMessage;

    if (loading || loading1 || loading2 || sending) {
        return <Loading></Loading>
    }

    if (user || user1 || user2) {
        navigate(from, { replace: true });
    }

    if (error || error1 || error2 || error3) {
        errorMessage = <p className='text-red-500 text-center'>Error: {error?.message} {error1?.message} {error2?.message} {error3?.message}</p>
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.pass.value;

        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Please check your email for the password reset link....');
        }
        else {
            toast('Please enter your email first!');
        }
    }

    return (
        <div>
            <Header></Header>

            <div className='lg:min-h-[70vh] lg:w-1/3 mx-5 md:mx-20 lg:mx-auto my-14 py-14 px-5 md:px-10 lg:py-7 lg:px-7 shadow-lg shadow-slate-400'>
                <h3 className='text-4xl text-lime-500 font-extrabold text-center mb-6'>Welcome Back!</h3>
                {
                    errorMessage
                }
                <form onSubmit={handleLogin}>
                    <div className="relative z-0 mb-7 w-full group">
                        <input ref={emailRef} type="email" name="email" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                        <label for="email" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-10 w-full group">
                        <input type="password" name="pass" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-purple-700 peer" placeholder=" " required />
                        <label for="pass" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-700 peer-focus:dark:text-purple-700ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <button type="submit" className="text-white bg-purple-700 hover:bg-lime-500 rounded w-full py-2.5 text-center">Login</button>
                    <span className='mt-4 text-center block'>Don't have an account? <Link to="/register" className='text-lime-500 font-semibold'>Register</Link></span>
                    <span className='mt-2 text-center block'>Forgot Password? <span onClick={handleResetPassword} className='text-lime-500 font-semibold cursor-pointer'>Reset Password</span></span>
                </form>
                <div className='flex justify-center items-center my-8'>
                    <div className='border-t-2 border-slate-300 w-full'></div>
                    <div className='mx-3'>OR</div>
                    <div className='border-t-2 border-slate-300 w-full'></div>
                </div>
                <div>
                    <div onClick={() => signInWithGoogle()} className='border border-gray-400 hover:border-purple-700 py-2.5 w-full hover:bg-purple-700 hover:text-white flex justify-center items-center cursor-pointer rounded'>
                        <FcGoogle className='text-xl mr-4' />
                        Login with Google
                    </div>
                    <div onClick={() => signInWithGithub()} className='mt-4 border border-gray-400 hover:border-purple-700 py-2.5 w-full hover:bg-purple-700 hover:text-white flex justify-center items-center cursor-pointer rounded'>
                        <FaGithub className='text-xl mr-4' />
                        Login with GitHub
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;
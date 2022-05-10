import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import img1 from '../../Images/js-vs-nodejs.jpg';
import img2 from '../../Images/mongodb.jpeg';
import img3 from '../../Images/sql-nosql.png';

const Blogs = () => {
    return (
        <div>
            <Header></Header>

            <div className='min-h-[70vh] px-4 md:mx-0 md:px-12 lg:px-24 py-16'>
                <article className="grid grid-cols-1 md:grid-cols-3 bg-lime-100">
                    <div className="my-0 md:my-5 lg:my-0">
                        <img src={img1} alt="" />
                    </div>
                    <div className="md:col-span-2 text-left p-5 lg:px-10 lg:flex lg:items-center">
                        <div>
                            <h3 className="text-3xl font-semibold text-purple-700">Difference between 'Javascript' and 'node.js'</h3>
                            <p className="mt-3">Javascript is a lightweight scripting language. It is mostly used to add interactive effects on webpages, also used to develop games & mobile applications. It is mostly used on client side.
                                <br /><br />
                                Node.JS is a cross-platform javascript runtime environment. It is mostly used to run Javascript outside the browser. It is used to create highly scalable server-side javascript applications.</p>
                        </div>
                    </div>
                </article>

                <article className="mt-14 grid grid-cols-1 md:grid-cols-3 bg-lime-100">
                    <div className="my-0 md:my-5 lg:my-0">
                        <img src={img2} alt="" />
                    </div>
                    <div className="md:col-span-2 text-left p-5 lg:px-10 lg:flex lg:items-center">
                        <div>
                            <h3 className="text-3xl font-semibold text-purple-700">When should you use 'node.js' and when should you use 'mongoDB'</h3>
                            <p className="mt-3">Node.JS is a cross-platform javascript runtime environment. It is mostly used to create highly scalable server-side javascript applications but if we need to store data for the future use, it can't.
                                <br /><br />
                                For storing our data, we need a database. There are so many databases, MonogDB is a one of those. It's a noSQL database system which gives us a chance to efficiently store documents in a database and to perform CRUD operation.</p>
                        </div>
                    </div>
                </article>

                <article className="mt-14 grid grid-cols-1 md:grid-cols-3 bg-lime-100">
                    <div className="my-0 md:my-5 lg:my-0">
                        <img src={img3} alt="" />
                    </div>
                    <div className="md:col-span-2 text-left p-5 lg:px-10 lg:flex lg:items-center">
                        <div>
                            <h3 className="text-3xl font-semibold text-purple-700">Differences between 'SQL' and 'noSQL' databases</h3>
                            <p className="mt-3">SQL databases display data in form of tables, that's why called table based database. These are mainly known as Relational Database Management System. SQL databases has static schemas, are vertically scalable. These are suited for complex queries.
                                <br /><br />
                                NoSQL databases display data as collection of key-value pair, like Javascript object. These databases has dynamic schemas and are horizontally scalable. These are not suitable for complex queries.</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Blogs;
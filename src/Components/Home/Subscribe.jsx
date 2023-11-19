import React from 'react';

const Subscribe = () => { 
    return (
        <>
            <div className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <p className="text-green-500 text-lg  uppercase font-semibold "> Subscribe</p>
                </nav>
                <aside>
                    <h1 className='text-2xl font-bold'>
                    Subscribe to get the latest <br /> news about us
                    </h1>
                    <p>Please drop your email below to get daily update about what we do</p>
                </aside>
                <nav>
                    <div className="flex items-center">
                    <input type="text" placeholder="Enter Your Email Adress" className="input input-bordered input-primary w-full max-w-xs" />
                        <button className="bg-blue-500 text-white rounded-r-md p-2 h-12">
                            Subscribe
                        </button>
                    </div>
                </nav>
                
            </div>
        </>
    );
};

export default Subscribe;
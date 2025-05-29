import React from 'react';


const SearchJobs = () => {

    return (
        <div className='w-full grid-place-items-center '>
            <div className='font-poppins max-w-[85vw] mx-auto flex  flex-col md:flex-row justify-between items-center md:px-6  w-full min-h-screen bg-[#f6faff]'>
                <div className='relative mt-16 md:mt-0 w-full flex  justify-center items-center flex-row-reverse'>
                    < img src='/img1.png' alt='' className='object-cover rounded-xl' />
                </div>
                {/* Left content */}
                <div className='max-w-2xl  z-10 '>
                    <h2 className='md:text-4xl  text-gray/60 font-poppins font-bold text-xl'>Millions Of Jobs.</h2>
                    <h1
                        className='text-[#0D2E54] md:leading-14 leading-12 font-bold'
                        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.2rem)' }}
                    >
                        The <span className='text-[#05264E]'>Find The One That’s</span>
                        <br /> <span className='text-blue ' >Right</span> For You
                    </h1>
                    <p className='font-inter md:text-lg mt-5 text-md text-gray'>
                        Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.
                    </p>
                    <div className='flex gap-10 mt-10 items-center '>
                        <button className='bg-blue cursor-pointer text-white rounded p-3'>Search Jobs</button>
                        <h4 className='underline text-blue/80'>LearnMore</h4>
                    </div>
                </div>

            </div>

            {/* Right banners */}

        </div>
    );
};

export default SearchJobs;

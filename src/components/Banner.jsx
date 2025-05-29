import React from 'react'

const Banner = () => {
    return (
        <div className='flex flex-wrap items-center  justify-center gap-6 font-poppins py-5 px-4'>
            {/* Left image - prevent shrinking too much */}
            <div className='flex-shrink-0'>
                <img
                    src='/bg-left-hiring.cc0e2e85.svg'
                    alt='Left decoration'
                    className='w-16 h-16 md:w-32 md:h-32 object-cover'
                />
            </div>

            {/* Middle content - allow shrinking but limit min width */}
            <div className='flex md:flex-row flex-col items-center  text-center md:text-left gap-4 md:gap-10 flex-shrink min-w-[200px] md:min-w-[300px] max-w-8xl'>
                <h1 className='md:text-3xl text-md text-gray/70 uppercase leading-snug'>
                    We
                    <br />
                    <strong className='md:text-5xl text-xl text-gray'>Hiring</strong>
                </h1>
                <h2 className='md:text-2xl text-gray text-md'>
                    Let’s Work Together
                    <br />
                    & Explore Opportunities
                </h2>
                <button className='rounded p-3 bg-blue text-white hover:bg-blue-700 transition'>
                    Apply Now
                </button>
            </div>

            {/* Right image - prevent shrinking too much */}
            <div className='flex-shrink-0'>
                <img
                    src='/bg-right-hiring.0dfda9a2.svg'
                    alt='Right decoration'
                    className='w-10 h-16 md:w-32 md:h-32 object-cover'
                />
            </div>
        </div>
    )
}

export default Banner

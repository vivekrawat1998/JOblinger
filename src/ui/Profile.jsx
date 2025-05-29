import React from 'react';

const Profile = ({ text }) => {
    return (
        <>
            {/* Background block */}
            <div className='absolute -z-10 inset-0 bg-green h-[40vh] w-full'></div>

            {/* Foreground content */}
            <div className='w-full relative  grid place-items-center py-10'>
                <div className='w-full  p-10 bg-white'>
                    <div className='flex justify-between gap-5 items-center'>
                        <div>
                            <h1 className='text-3xl text-gray-800 font-ptserif font-bold border-b-4 border-brown inline-block pb-2'>
                                {text}
                            </h1>
                        </div>
                        <div>
                            <h2 className='text-xl text-gray-600 uppercase'>Home - {text}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

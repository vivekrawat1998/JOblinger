import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Sample categories with SVG icons
const categories = [
    {
        name: 'Marketing & Sale',
        jobs: 1526,
        image: '/marketing.svg'
    },
    {
        name: 'Customer Help',
        jobs: 185,
        image: '/customer.svg'
    },
    {
        name: 'Finance',
        jobs: 168,
        image: '/finance (2).svg'
    },
    {
        name: 'Software Development',
        jobs: 870,
        image: '/lightning.svg'
    },
    {
        name: 'Design',
        jobs: 430,
        image: '/human.svg'
    }
];

const JobBox = ({ category }) => (
    <div className="bg-white rounded-xl hover:border  border-gray/40 cursor-pointer items-center shadow-sm hover:shadow-md transition-transform duration-300 transform hover:-translate-y-1 p-6 flex gap-5 h-20 w-full">
        <img src={category.image} alt={category.name} className="w-10 h-10" />
        <div>
            <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
            <p className="text-gray-600 font-medium">{category.jobs}+ Jobs Available</p>
        </div>
    </div>
);

const Category = () => {
    return (
        <div className="w-full px-6 md:px-20 py-20 bg-[#f6faff]">
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 font-poppins">
                    Browse by category
                </h1>
                <p className="text-gray/70 font-inter text-md md:text-lg mt-2">
                    Find the job that’s perfect for you. about 800+ new jobs everyday
                </p>
            </div>

            <Swiper
                spaceBetween={20}
                slidesPerView={1.1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className="py-4  "
            >
                <div className=''>
                    {categories.map((cat, i) => (
                        <SwiperSlide key={i}>
                            <JobBox category={cat} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

export default Category;

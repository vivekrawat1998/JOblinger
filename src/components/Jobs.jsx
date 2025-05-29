import React, { useState } from 'react';
import { categoriesData } from '../utils/categoriesData';
import JobCard from './Jobcard';

const Jobs = () => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
    const selectedCategory = categoriesData[selectedCategoryIndex];

    return (
        <div className="w-full flex mt-24 justify-center px-4 sm:px-6 lg:px-8 py-8">
            <div className="w-full grid place-items-center">
                {/* Header */}
                <div className='grid place-items-center mb-10'>
                    <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 font-poppins">
                        Jobs of the day
                    </h1>
                    <p className="text-gray/70 font-inter text-md md:text-lg mt-2">
                        Search and connect with the right candidates faster.
                    </p>
                </div>

                {/* Categories */}
                <div className="grid grid-cols-2 sm:flex gap-4 flex-wrap sm:gap-6 mb-6 max-w-7xl mx-auto">
                    {categoriesData.map((category, index) => (
                        <button
                            key={category.name}
                            onClick={() => setSelectedCategoryIndex(index)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer
                                ${index === selectedCategoryIndex
                                    ? 'border-blue-600 text-blue-600 bg-blue-50 shadow-md'
                                    : 'text-gray-700 border-none hover:bg-gray-100'}
                                transition duration-200 ease-in-out w-full sm:w-auto
                            `}
                        >
                            <img src={category.image} alt={category.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                            <span className="text-sm sm:text-base">{category.name}</span>
                        </button>
                    ))}
                </div>

                {/* Job Cards */}
                <div className="w-full max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 ">
                        {selectedCategory.jobs.length === 0 ? (
                            <p className="text-gray-600 text-center py-10 col-span-full">
                                No jobs available in this category.
                            </p>
                        ) : (
                            selectedCategory.jobs.map((job, i) => <JobCard key={i} job={job} />)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;

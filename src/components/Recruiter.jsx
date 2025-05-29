import React from 'react';

const Recruiter = () => {
    const recruiters = [
        {
            companyimage: "https://yt3.googleusercontent.com/2eI1TjX447QZFDe6R32K0V2mjbVMKT5mIfQR-wK5bAsxttS_7qzUDS1ojoSKeSP0NuWd6sl7qQ=s900-c-k-c0x00ffffff-no-rj",
            companyname: "Google",
            location: "Mountain View, US",
            openings: "25 open jobs",
            ratings: "4.5/5",
        },
        {
            companyimage: "https://yt3.googleusercontent.com/qgSeLfJk2OKnQicVDvc_VSlSISmAmWVHYtmSTckcC_iUn7hVfpURctMAqoSz0u4xfER6rlKDBA=s900-c-k-c0x00ffffff-no-rj",
            companyname: "Microsoft",
            location: "Redmond, US",
            openings: "18 open jobs",
            ratings: "4.4/5",
        },
        {
            companyimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT30vWp7fFAd-8SZUQbzsvTikbqQai9PvkVkw&s",
            companyname: "Infosys",
            location: "Bengaluru, India",
            openings: "30 open jobs",
            ratings: "4.2/5",
        },
        {
            companyimage: "https://media.licdn.com/dms/image/v2/D5612AQGDEC6APIBRPA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1726116477867?e=2147483647&v=beta&t=lWZOAij6o6IS--YSN_QPMfZyZiR48HYzBMgmaBkw80Y",
            companyname: "TCS",
            location: "Mumbai, India",
            openings: "40 open jobs",
            ratings: "4.1/5",
        },
        {
            companyimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2T5wLk-HzBheAPdBs8EyZS6dmeUhyxSGgg&s",
            companyname: "Accenture",
            location: "Dublin, Ireland",
            openings: "35 open jobs",
            ratings: "4.3/5",
        },
        {
            companyimage: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ad/f5/24/adf524b5-f8d1-31b3-eaf5-2a9f9afe96ef/AppIcon-0-0-1x_U007epad-0-1-0-0-85-220.png/1200x630wa.png",
            companyname: "Amazon",
            location: "Seattle, US",
            openings: "50 open jobs",
            ratings: "4.6/5",
        },
        {
            companyimage: "https://pbs.twimg.com/profile_images/1587084627428069376/o05qu0WH_400x400.jpg",
            companyname: "Wipro",
            location: "Bengaluru, India",
            openings: "20 open jobs",
            ratings: "4.0/5",
        },
        {
            companyimage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIdlhRmNfCWg5IYxkL726oQJfOsvLJZQzNlw&s",
            companyname: "Meta",
            location: "Menlo Park, US",
            openings: "22 open jobs",
            ratings: "4.4/5",
        },
        {
            companyimage: "https://static.startuptalky.com/2021/04/ibm-logo-startuptalky.jpg",
            companyname: "IBM",
            location: "New York, US",
            openings: "28 open jobs",
            ratings: "4.2/5",
        },
        {
            companyimage: "https://1000logos.net/wp-content/uploads/2021/09/Cognizant-Logo.jpg",
            companyname: "Cognizant",
            location: "Chennai, India",
            openings: "32 open jobs",
            ratings: "4.1/5",
        },
    ];

    return (
        <div className="w-full px-6 md:px-20 py-20 bg-[#f6faff]">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 font-poppins">
                    Top Recruiters
                </h1>
                <p className="text-gray-600 font-inter text-md md:text-lg mt-2">
                    Discover your next career move, freelance gig, or internship
                </p>
            </div>

            <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 md:grid-cols-3 font-poppins lg:grid-cols-4 gap-8">
                {recruiters.map((company, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-xl p-6 flex flex-col  px-5  items-center text-center hover:border border-gray/30 transition"
                    >
                        <div className='flex justify-between gap-10 mb-5 items-center'>
                                <img
                                    src={company.companyimage}
                                    alt={company.companyname}
                                    className="w-20 h-20 object-contain"
                                />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">{company.companyname}</h2>
                                <p className="text-sm text-yellow-600 mt-1">Rating: {company.ratings}</p>

                            </div>
                        </div>
                        <div className='flex  justify-between font-inter items-center  w-full'>
                            <p className="text-sm text-gray-500">{company.location}</p>
                            <p className="text-sm text-gray mt-2">{company.openings}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Recruiter;

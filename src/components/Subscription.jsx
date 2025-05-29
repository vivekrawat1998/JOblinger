import React from 'react';

const SubscriptionSection = () => {
    return (
        <section className="text-white overflow-hidden mb-5 flex justify-center">
            <div
                className="relative max-w-7xl w-full bg-cover bg-center bg-no-repeat p-10 py-28 rounded-xl overflow-hidden text-center px-4"
                style={{
                    backgroundImage: "url('/bg-newsletter.41bc541a.svg')",
                }}
            >
                <h2 className="text-3xl sm:text-4xl md:leading-14 font-semibold font-poppins">
                    New Things Will Always <br /> Update Regularly
                </h2>

                <form className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="flex items-center px-4 text-gray-500 text-xl">✉️</div>
                    <input
                        type="email"
                        placeholder="Enter your email here"
                        className="flex-1 px-4 py-3 text-gray-800 outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-4 transition-all"
                    >
                        Subscribe
                    </button>
                </form>

                <div className="absolute top-20 left-7 w-66 h-72 overflow-hidden hidden md:block">
                    <img src="/newsletter-left.png" alt="Left visual" className="object-cover w-full h-full" />
                </div>
                <div className="absolute top-1/4 right-20 w-66 h-72 overflow-hidden hidden md:block">
                    <img src="/newsletter-right.png" alt="Right visual" className="object-cover w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default SubscriptionSection;

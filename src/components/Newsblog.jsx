import React from "react";
import BlogCard from "./Blogcards";

const blogPosts = [
    {
        tag: "News",
        title: "21 Job Interview Tips: How To Make a Great Impression",
        description: "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
        author: {
            name: "Sarah Harding",
            image: "https://randomuser.me/api/portraits/women/45.jpg",
        },
        date: "06 September",
        timeToRead: "8 mins to read",
        image: "/img-news1.png",
    },
    {
        tag: "Events",
        title: "39 Strengths and Weaknesses To Discuss in a Job Interview",
        description: "Our mission is to create the world's most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
        author: {
            name: "Steven Jobs",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        date: "06 September",
        timeToRead: "6 mins to read",
        image: "/img-news2.png",
    },
    {
        tag: "News",
        title: "Interview Question: Why Don’t You Have a Degree?",
        description: "Learn how to respond if an interviewer asks you why you don’t have a degree, and read example answers that can help you craft a response.",
        author: {
            name: "William Kend",
            image: "https://randomuser.me/api/portraits/men/44.jpg",
        },
        date: "06 September",
        timeToRead: "9 mins to read",
        image: "/img-news3.png",
    },
];

const NewsAndBlog = () => {
    return (
        <section className="py-12 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 font-poppins">
                    News and Blog
                </h1>
                <p className="text-gray-600 font-inter text-md md:text-lg mt-2">
                    Get the latest news, updates and tips
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <BlogCard key={index} {...post} />
                ))}
            </div>
        </section>
    );
};

export default NewsAndBlog;
// components
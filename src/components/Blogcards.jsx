// components/BlogCard.jsx
import React from "react";

const BlogCard = ({ tag, title, description, author, date, timeToRead, image }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-lg transition-all duration-300">
      <img src={image} alt={title} className="w-full h-52 object-cover" />

      <div className="p-5">
        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-md font-medium">{tag}</span>

        <h3 className="mt-3 text-lg font-semibold text-gray-800">{title}</h3>

        <p className="text-gray-500 text-sm mt-2">{description}</p>

        <div className="flex items-center justify-between mt-5 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <img src={author.image} alt={author.name} className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-gray-700 font-medium">{author.name}</p>
              <p className="text-xs">{date}</p>
            </div>
          </div>
          <p>{timeToRead}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

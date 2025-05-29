// src/components/JobCard.jsx
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi"; // location icon

const JobCard = ({ job }) => (
  <div className="bg-white relative md:w-[24vw] mt-10 md:h-[40vh] h-auto hover:border border-gray/30 cursor-pointer rounded-lg shadow p-4 my-2">
    <div className="flex justify-start items-center gap-4">
      <img
        src={job.companyImage}
        alt={job.company}
        className="w-24 h-24 object-cover"
      />
      <div>
        <p className="text-gray-600 font-semibold">{job.company}</p>
        <div className="flex items-center text-gray-500 text-sm gap-1 mt-1">
          <HiOutlineLocationMarker className="text-blue-500" />
          <span>{job.location}</span>
        </div>
      </div>
    </div>

    <div className="mt-10">
      <h3 className="font-semibold text-2xl font-poppins text-[#284567]">
        {job.title}
      </h3>
      <p className="text-sm text-gray-500">
        {job.type} · {job.posted}
      </p>
      <p className="mt-2 font-inter">{job.description}</p>
    </div>

    <div className=" flex justify-between  items-center w-full">
      <p className="font-semibold text-blue text-2xl mt-1">{job.salary}</p>
      <button className="md:p-3 p-2 bg-[#E0E6F7] hover:bg-blue hover:text-white rounded text-blue text-md font-inter">
        Apply Now
      </button>
    </div>
  </div>
);

export default JobCard;

import React from "react";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-3">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-5 py-2 font-extrabold border-2 rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border-2 rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex ">
          <p className="flex">
            <img src={"public/Frame.png"} alt="" /> <span>{location}</span>
          </p>
          <p className="flex">
            <img src={"public/Frame (1).png"} alt="" /> {salary}
          </p>
        </div>
        <div className="card-actions ">
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;

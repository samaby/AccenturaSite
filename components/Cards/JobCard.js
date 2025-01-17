import React from "react";
import PropTypes from "prop-types";

export default function JobCard({ job }) {
  const { title, department, location, type, description, requirements } = job;

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-blueGray-700">{title}</h3>
          <button
            className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
            type="button"
          >
            Apply Now
          </button>
        </div>

        <div className="flex mt-2 space-x-4">
          <span className="text-sm text-blueGray-500">
            <i className="fas fa-building mr-2"></i>
            {department}
          </span>
          <span className="text-sm text-blueGray-500">
            <i className="fas fa-map-marker-alt mr-2"></i>
            {location}
          </span>
          <span className="text-sm text-blueGray-500">
            <i className="fas fa-clock mr-2"></i>
            {type}
          </span>
        </div>

        <div className="mt-4">
          <p className="text-md text-blueGray-600">{description}</p>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold text-blueGray-700">
            Requirements:
          </h4>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            {requirements.map((requirement, index) => (
              <li key={index} className="text-blueGray-600">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

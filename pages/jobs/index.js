import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { jobs } from "data/jobs.js";

export default function Jobs() {
  return (
    <>
      <IndexNavbar fixed />
      <main>
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16">
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>

        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                    Join Our Team
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    Help us revolutionize photo and video editing
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200">
                  <div className="flex flex-wrap">
                    {jobs.map((job) => (
                      <div key={job.id} className="w-full lg:w-6/12 px-4 mb-8">
                        <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 shadow-lg">
                          <div className="px-6 py-4">
                            <div className="flex justify-between items-center mb-3">
                              <h4 className="text-xl font-bold text-blueGray-700">
                                {job.title}
                              </h4>
                              <span className="px-2 py-1 text-xs font-semibold bg-blueGray-100 text-blueGray-700 rounded">
                                {job.type}
                              </span>
                            </div>
                            <div className="flex space-x-4 text-sm text-blueGray-500 mb-4">
                              <span>{job.department}</span>
                              <span>•</span>
                              <span>{job.location}</span>
                            </div>
                            <p className="text-blueGray-500 mb-4">
                              {job.description.substring(0, 150)}...
                            </p>
                            <Link href={`/jobs/${job.id}`}>
                              <button
                                className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                                type="button"
                              >
                                View Details
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import ApplicationForm from "components/Forms/ApplicationForm.js";
import { jobs } from "data/jobs.js";

export default function JobApplication() {
  const router = useRouter();
  const { id } = router.query;

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <IndexNavbar fixed />
      <main className="profile-page">
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
                  <Link href={`/jobs/`}>
                    <p className="text-blueGray-500 hover:text-blueGray-700">
                      ← Back to job details
                    </p>
                  </Link>
                </div>

                <div className="mt-10 py-10">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-8/12 px-4">
                      <ApplicationForm jobTitle={job.title} />
                    </div>
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

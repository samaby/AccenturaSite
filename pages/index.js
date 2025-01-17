import React from "react";
import Link from "next/link";
import Landing from "../public/img/feature2.png";
import Feature from "../public/img/featurec.png";
import Testimonial from "../public/img/testimonial2.png";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px bg-gradient-to-b from-white to-blueGray-100">
        <div className="container mx-auto items-center flex flex-wrap">
          {/* Left Content */}
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 md:px-8">
            <div className="pt-32 sm:pt-0 max-w-lg">
              <h2 className="font-semibold text-5xl text-blueGray-600 leading-tight mb-6">
                Transform Your Photos with{" "}
                <span className="text-lightBlue-500">AI-Powered Magic</span>
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-blueGray-500">
                Enhance your personal appearance instantly with advanced AI
                technology. From perfect skin touch-ups to stunning AI avatars,
                make every photo look professionally edited.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link href="/auth/register">
                  <p className="get-started text-center text-white font-bold px-8 py-4 rounded-lg outline-none focus:outline-none mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150 transform hover:-translate-y-1">
                    Start Editing Now
                  </p>
                </Link>
                <Link href="#features">
                  <p className="text-center text-blueGray-700 font-bold px-8 py-4 rounded-lg outline-none focus:outline-none mb-1 bg-white border-2 border-blueGray-200 active:bg-gray-100 uppercase text-sm shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-150">
                    See Features
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-4/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 w-full mb-6 md:mt-0">
              <div className="p-4">
                <Image
                  src={Landing}
                  alt="AI Photo Enhancement"
                  className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  priority
                />
                {/* Optional decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-lightBlue-500 opacity-20 rounded-full filter blur-xl"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 opacity-20 rounded-full filter blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <Image
                  alt="Beautiful edited photo example"
                  src={Feature}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-white">
                    Professional Results in Minutes
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Our AI-powered tools deliver professional-grade photo
                    enhancements with just a few clicks. Perfect for social
                    media, professional profiles, or personal memories.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-magic"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Instant Enhancement
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Perfect skin touch-ups, teeth whitening, and facial
                        features enhancement in seconds with AI technology.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-user-astronaut"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">AI Avatars</h6>
                      <p className="mb-4 text-blueGray-500">
                        Generate unique avatars with customizable styles,
                        outfits, and backgrounds using our advanced AI.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-wand-sparkles"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Smart Makeup
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Apply virtual makeup that looks natural and enhances
                        your best features automatically.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-layer-group"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Batch Processing
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Edit multiple photos at once while maintaining
                        consistent quality and style across all images.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">
                  Advanced Features for Perfect Photos
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Our platform combines cutting-edge AI technology with
                  intuitive controls to give you professional results without
                  the learning curve.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Smart Face Recognition
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-paint-brush"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          One-Click Background Change
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-cloud"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Cloud Storage & Sync
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <Image
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={Testimonial}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Start Transforming Your Photos Today
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Join thousands of users who are already creating stunning photos
                with our AI-powered tools. Try it free for 7 days!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/auth/register">
                  <p className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-800 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Start Free Trial
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

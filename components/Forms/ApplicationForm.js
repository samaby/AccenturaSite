import React, { useState } from "react";
import PropTypes from "prop-types";

export default function ApplicationForm({ jobTitle }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    setFormSuccess(false);

    try {
      const formData = new FormData(event.target);

      // Basic validation
      if (!formData.get("email").includes("@")) {
        throw new Error("Please enter a valid email address");
      }

      // Validate file sizes
      const validateFileSize = (file, maxSize = 5 * 1024 * 1024) => {
        if (file && file.size > maxSize) {
          throw new Error(
            `File ${file.name} is too large. Maximum size is 5MB.`
          );
        }
      };

      validateFileSize(formData.get("driverLicenseFront"));
      validateFileSize(formData.get("driverLicenseBack"));
      validateFileSize(formData.get("resume"));

      const response = await fetch("/api/applications/submit", {
        method: "POST",
        body: formData, // Send the FormData directly
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to submit application");
      }

      setFormSuccess(true);
      event.target.reset();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error:", error);
      setFormError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg">
      <div className="flex-auto p-5 lg:p-10">
        {/* Success/Error Messages */}
        {formSuccess && (
          <div className="bg-emerald-500/10 border border-emerald-500 text-emerald-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">
              Your application has been submitted successfully!
            </span>
          </div>
        )}

        {formError && (
          <div className="bg-red-500/10 border border-red-500 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{formError}</span>
          </div>
        )}

        <h4 className="text-2xl font-semibold mb-6">Apply for {jobTitle}</h4>

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Personal Information
          </h6>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Social Security Number *
              </label>
              <input
                type="password"
                name="ssn"
                placeholder="XXX-XX-XXXX"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
              <p className="text-blueGray-500 text-xs mt-1">
                Format: XXX-XX-XXXX
              </p>
            </div>
          </div>

          {/* Documents */}
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Required Documents
          </h6>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Driver's License (Front) *
              </label>
              <input
                type="file"
                name="driverLicenseFront"
                accept="image/*"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Driver's License (Back) *
              </label>
              <input
                type="file"
                name="driverLicenseBack"
                accept="image/*"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Resume *
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                required
              />
            </div>
          </div>

          {/* Additional Information */}
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Additional Information
          </h6>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Cover Letter
              </label>
              <textarea
                name="coverLetter"
                rows="4"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="Tell us why you'd be a great fit..."
              ></textarea>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                Portfolio Website
              </label>
              <input
                type="url"
                name="portfolio"
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-6">
            <button
              className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

ApplicationForm.propTypes = {
  jobTitle: PropTypes.string.isRequired,
};

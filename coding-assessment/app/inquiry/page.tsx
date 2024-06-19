"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { medicalStaffingOptions } from "./docs/data";
import Select from "react-select";

const InquiryPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center mb-8">
        <Link href="/">
          <Image
            src="/ci-logo.webp"
            alt="Care Indeed"
            width={150}
            height={50}
          />
        </Link>
      </div>

      <form className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your Name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your Email Address"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="zipCode"
          >
            Zip Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zipCode"
            type="number"
            placeholder="Enter your Zip Code"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="medicalStaffing"
          >
            Medical Staffing
          </label>
          <Select
            isMulti
            name="medicalStaffing"
            options={medicalStaffingOptions}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        <div className="mb-6">
          <button
            className="w-full bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default InquiryPage;

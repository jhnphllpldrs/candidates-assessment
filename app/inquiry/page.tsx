"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { medicalStaffingOptions } from "./docs/data";
import Select from "react-select";

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zipCode: "",
    medicalStaffing: [] as { label: string; value: string }[],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSelectChange = (
    selectedOptions: { label: string; value: string }[]
  ) => {
    setFormData({
      ...formData,
      medicalStaffing: selectedOptions,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://webhook.site/d25fb1f3-2d00-422c-94be-e668d7a1bd58",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
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

      <form
        className="w-full max-w-md bg-white rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
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
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.email}
            onChange={handleInputChange}
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
            value={formData.zipCode}
            onChange={handleInputChange}
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
            onChange={(selectedOptions) =>
              handleSelectChange(
                selectedOptions.map((option) => ({
                  label: option.label,
                  value: option.value,
                }))
              )
            }
          />
        </div>

        <div className="mb-6">
          <button
            className="w-full bg-orange-700 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default InquiryPage;

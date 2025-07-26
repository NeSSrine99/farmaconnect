"use client";

import Button from "@shared/Button";
import Input from "@shared/Input";

import React from "react";

const AddressShipping = ({ showSavedSection }) => {
  return (
    <div className="border border-gray-400 p-4 rounded bg-white shadow-md">
      <h2 className="text-left text-lg font-medium text-gray-700 mb-5">
        Shipping Address
      </h2>
      <form className=" space-y-4">
        {/* section in normal */}
        <div className={showSavedSection ? "hidden " : "block space-y-4"}>
          <div className="flex md:flex-row flex-col gap-4">
            <Input
              name="nom"
              placeholder="Full Name"
              className="flex-1 w-full"
            />
            <Input
              name="prenom"
              placeholder="Last Name"
              className="flex-1 w-full"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <Input
              name="email"
              placeholder="Email Address"
              className="flex-1 w-full"
            />
            <Input
              name="address"
              placeholder="Home Address"
              className="flex-1 w-full"
            />
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <Input name="state" placeholder="State" className="flex-1 w-full" />
            <Input name="city" placeholder="City" className="flex-1 w-full" />
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <Input
              name="postal"
              placeholder="Postal Code"
              className="flex-1 w-full"
            />
            <Input
              name="phone"
              placeholder="Phone Number"
              className="flex-1 w-full"
            />
          </div>
          <div className="ml-2 mt-4 flex items-center gap-2">
            <input type="checkbox" className="accent-primary" />
            <label className="text-sm text-gray-600">
              Make as default shipping address
            </label>
          </div>
        </div>

        {/* section in saved */}
        <section className={showSavedSection ? "space-y-4 block" : "hidden"}>
          <Input
            name="address"
            placeholder="Devine Smith + 22 E.20th Street, Los Angeles, CA, 90011"
            extraControl={<input type="radio" name="address-option" />}
          />
          <Input
            name="address"
            placeholder="Richard Hammond + 123 Main Street, San Diego, CA, 91911"
            extraControl={<input type="radio" name="address-option" />}
          />
          <Button variant="third" className="flex items-center gap-4">
            + Add New Address
          </Button>
        </section>
      </form>
    </div>
  );
};

export default AddressShipping;

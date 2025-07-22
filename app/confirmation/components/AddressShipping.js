import Input from "../../components/ui/Input";
import React from "react";

const AddressShipping = () => {
  return (
    <div>
      <h2 className="text-xl font-bold my-4 text-start text-primary">
        Shipping Address
      </h2>
      <form className="space-y-4">
        <div className="flex flex-wrap items-center gap-4 justify-between max-w-[782px] ">
          <Input
            name="nom"
            placeholder=" Full Name"
            className="flex-1 w-full"
          />
          <Input
            name="prenom"
            placeholder="Last Name"
            className="flex-1 w-full"
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-between max-w-[782px] ">
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
        <div className="flex flex-wrap items-center gap-4 justify-between max-w-[782px]">
          <Input name="state" placeholder="State" className="flex-1 w-full" />
          <Input name="city" placeholder="City" className="flex-1 w-full" />
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-between max-w-[782px]">
          <Input
            name="postal"
            placeholder=" Postal Code"
            className="flex-1 w-full"
          />
          <Input
            name="phone"
            placeholder=" Phone Number"
            className="flex-1 w-full"
          />
        </div>
        <div className="ml-2 flex items-center gap-2">
          <input type="checkbox" className="accent-primary" />
          <label className="text-sm text-gray-600 ">
            Make as default shipping address
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddressShipping;

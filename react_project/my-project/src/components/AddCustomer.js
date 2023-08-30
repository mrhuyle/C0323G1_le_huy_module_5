import React from "react";

const AddCustomer = () => {
  return (
    <section className="w-5/12 bg-white">
      <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          ADD NEW CUSTOMER
        </h2>
        <div className="col-span-2 mb-5">
          <div>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
            ></select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCustomer;

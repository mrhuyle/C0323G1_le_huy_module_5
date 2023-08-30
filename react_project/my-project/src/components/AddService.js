import React, { useState } from "react";
import VillaForm from "./VillaForm";

const AddService = () => {
  const [serviceType] = useState([
    {
      label: "Villa",
      value: "Villa",
      field: <VillaForm />,
    },
    {
      label: "House",
      value: "House",
      field: <div>House</div>,
    },
    {
      label: "Room",
      value: "Room",
      field: <div>Room</div>,
    },
  ]);
  const [selectedServiceType, setSelectedServiceType] = useState(
    serviceType[0]
  );

  const handleServiceSelect = (event) => {
    const selectedService = serviceType.find(
      (service) => service.value === event.target.value
    );
    if (selectedService) {
      setSelectedServiceType(selectedService);
    }
  };

  return (
    <section className="w-5/12 bg-white">
      <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          ADD NEW SERVICE
        </h2>
        <div className="col-span-2 mb-5">
          <div>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              onChange={handleServiceSelect}
            >
              {serviceType.map((type) => {
                return (
                  <option value={type.value} key={type.value}>
                    {type.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {setSelectedServiceType && selectedServiceType.field}
      </div>
    </section>
  );
};

export default AddService;

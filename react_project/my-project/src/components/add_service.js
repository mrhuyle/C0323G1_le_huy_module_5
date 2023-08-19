import React, { useState } from "react";

const AddService = ({ onAddService }) => {
  const [newService, setNewService] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleAddService = () => {
    if (
      newService.name.trim() !== "" &&
      newService.description.trim() !== "" &&
      newService.price.trim() !== ""
    ) {
      onAddService(newService);
      setNewService({
        name: "",
        description: "",
        price: "",
      });
    }
  };

  return (
    <div className="add-service">
      <h2>Add Service</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={newService.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={newService.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={newService.price}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddService}>Add Service</button>
    </div>
  );
};

export default AddService;

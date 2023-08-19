import React, { useState, useEffect } from "react";

const EditService = ({ service, onUpdateService, onCancel }) => {
  const [editedService, setEditedService] = useState({ ...service });

  useEffect(() => {
    setEditedService({ ...service });
  }, [service]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleUpdateService = () => {
    onUpdateService(editedService);
  };

  return (
    <div className="edit-service">
      <h2>Edit Service</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editedService.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={editedService.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="text"
          name="price"
          value={editedService.price}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdateService}>Update Service</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditService;

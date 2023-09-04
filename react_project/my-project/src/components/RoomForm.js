import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import * as rentService from "../services/RentService";
import * as otherServicesService from "../services/OtherServicesService";
import { useState, useEffect } from "react";

const RoomForm = () => {
  const navigate = useNavigate();
  const [otherServices, setOtherServices] = useState([]);

  useEffect(() => {
    getAllOtherServices();
  }, []);

  const getAllOtherServices = async () => {
    const response = await otherServicesService.getAll();
    setOtherServices(response);
  };

  const addRoom = async (room) => {
    const response = await rentService.addService(room);
    if (response.status === 201) {
      Swal.fire({
        text: "Add successfully",
        icon: "success",
      });
      navigate("/dashboard/services");
    }
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          area: "",
          price: "",
          capacity: "",
          otherServices: "car",
          type: "Month",
        }}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          addRoom(value);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Required")
            .matches(/^[a-zA-Z-]+$/, "Invalid service name")
            .matches(/^Room/, "Must start with Room"),
          area: Yup.number()
            .required("Required")
            .min(1, "Must be greater than 0"),
          price: Yup.number()
            .required("Required")
            .min(1, "Must be greater than 0"),
          capacity: Yup.number()
            .required("Required")
            .integer("Must be integer")
            .min(1, "Must be greater than 0"),
          otherServices: Yup.string().required("Required"),
          type: Yup.string().required("Required"),
        })}
      >
        <Form>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Room Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="Type service name"
              />
              <ErrorMessage
                name="name"
                component="small"
                style={{ color: "red" }}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="area"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Area (m2)
              </label>
              <Field
                type="number"
                name="area"
                id="area"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="0"
              />
              <ErrorMessage
                name="area"
                component="small"
                style={{ color: "red" }}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Price ($)
              </label>
              <Field
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="$"
              />
              <ErrorMessage
                name="price"
                component="small"
                style={{ color: "red" }}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="capacity"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Capacity (people)
              </label>
              <Field
                type="number"
                name="capacity"
                id="capacity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="0"
              />
              <ErrorMessage
                name="capacity"
                component="small"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label
                htmlFor="otherServices"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Other Services
              </label>
              <Field
                as="select"
                name="otherServices"
                id="otherServices"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                {otherServices.map((service) => {
                  return (
                    <option value={service.name} key={service.name}>
                      {service.name}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage
                name="otherServices"
                component="small"
                style={{ color: "red" }}
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Rent Type
              </label>
              <Field
                as="select"
                name="type"
                id="type"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                <option value="Day">Day</option>
                <option value="Month">Month</option>
                <option value="Year">Year</option>
              </Field>
              <ErrorMessage
                name="type"
                component="small"
                style={{ color: "red" }}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mx-1 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Add service
            </button>
            <button
              type="reset"
              className="mx-1  inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
              onClick={() => {
                navigate("/dashboard/services");
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default RoomForm;

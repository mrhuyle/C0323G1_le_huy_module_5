import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as clothesService from "../services/ClothesService";
import { useNavigate } from "react-router-dom";
import * as typesService from "../services/TypesService";
import Swal from "sweetalert2";

const AddCloth = () => {
  const navigate = useNavigate();
  const [types, setTypes] = useState();

  useEffect(() => {
    getTypes();
  }, []);

  const getTypes = async () => {
    const response = await typesService.getAllTypes();
    setTypes(response);
  };

  const addCloth = async (cloth) => {
    console.log(types[0]);
    console.log(cloth);
    const response = await clothesService.addCloth(cloth);
    console.log(response);
    if (response.status === 201) {
      Swal.fire({
        text: "Add successfully",
        icon: "success",
        timer: 2000,
      });
      navigate("/");
    }
  };

  if (!types) {
    return null;
  }

  return (
    <div className="w-full h-max">
      <section className="absolute w-5/12 -translate-x-1/2 -translate-y-1/2 bg-white left-1/2 top-1/2">
        <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
          <h2 className="mb-2 text-xl font-bold text-gray-900">ADD CLOTH</h2>
          <Formik
            initialValues={{
              name: "",
              date: "",
              quantity: "",
              type: types[1],
            }}
            onSubmit={(value, { setSubmitting }) => {
              setSubmitting(false);
              addCloth(value);
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              date: Yup.date().required("Required"),
              quantity: Yup.number()
                .required("Required")
                .integer("Must be integer")
                .min(1, "Must greater than 0"),
            })}
          >
            <Form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Cloth Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Type customer name"
                  />
                  <ErrorMessage
                    name="name"
                    component="small"
                    style={{ color: "red" }}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Date of Input
                  </label>
                  <Field
                    type="date"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="yyyy-mm-dd"
                  />
                  <ErrorMessage
                    name="date"
                    component="small"
                    style={{ color: "red" }}
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Quantity
                  </label>
                  <Field
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Quantity of cloth"
                  />
                  <ErrorMessage
                    name="quantity"
                    component="small"
                    style={{ color: "red" }}
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="type"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Cloth Type
                  </label>
                  <Field
                    as="select"
                    name="type"
                    id="type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  >
                    {types.map((type) => {
                      return (
                        <option key={type.id} value={type.id} name="type">
                          {type.name}
                        </option>
                      );
                    })}
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
                  className="mx-1 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-500 rounded-lg focus:ring-4 focus:ring-primary-200"
                >
                  Add Cloth
                </button>
                <button
                  type="reset"
                  className="mx-1 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-red-500 rounded-lg focus:ring-4 focus:ring-primary-200"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default AddCloth;

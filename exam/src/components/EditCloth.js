import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as clothesService from "../services/ClothesService";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as typesService from "../services/TypesService";
import Swal from "sweetalert2";
import * as Yup from "yup";

const EditCloth = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cloth, setCloth] = useState();
  const [types, setTypes] = useState();

  useEffect(() => {
    getClothById();
    getTypes();
  }, []);

  const getTypes = async () => {
    const response = await typesService.getAllTypes();
    setTypes(response);
  };

  const getClothById = async () => {
    const response = await clothesService.getClothById(params.id);
    setCloth(response);
  };

  const editCloth = async (cloth) => {
    const response = await clothesService.editCloth(cloth);
    if (response.status === 200) {
      Swal.fire({
        text: "Edit successfully",
        icon: "success",
        timer: 2000,
      });
      navigate("/");
    }
  };

  if (!cloth) {
    return null;
  }

  return (
    <div className="w-full h-max">
      <section className="absolute w-5/12 -translate-x-1/2 -translate-y-1/2 bg-white left-1/2 top-1/2">
        <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
          <h2 className="mb-2 text-xl font-bold text-gray-900">EDIT CLOTH</h2>
          <Formik
            initialValues={{
              id: cloth?.id,
              name: cloth?.name,
              date: cloth?.date,
              quantity: cloth?.quantity,
              type: cloth?.type,
            }}
            onSubmit={(value, { setSubmitting }) => {
              setSubmitting(false);
              editCloth(value);
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              date: Yup.date().required("Required"),
              quantity: Yup.number()
                .required("Required")
                .integer("Must be integer")
                .min(1, "Must greater than 0"),
              type: Yup.string().required("Required"),
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
                        <option key={type.id} value={type.name} name="type">
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
                  Edit Cloth
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

export default EditCloth;

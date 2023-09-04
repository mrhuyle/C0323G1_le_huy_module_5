import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as serviceStandards from "../services/ServiceStandardsService";
import * as rentService from "../services/RentService";
import Swal from "sweetalert2";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditVilla = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [standards, setStandards] = useState([]);
  const [villa, setVilla] = useState();

  useEffect(() => {
    getAllStandards();
    getEditVilla();
  }, []);

  const getAllStandards = async () => {
    const response = await serviceStandards.getAll();
    setStandards(response);
  };

  const editVilla = async (villa) => {
    const response = await rentService.editService(villa);
    if (response.status === 200) {
      Swal.fire({
        text: "Edit successfully",
        icon: "success",
      });
      navigate("/dashboard/services");
    }
  };

  const getEditVilla = async () => {
    const response = await rentService.getServiceById(params.id);
    setVilla(response);
  };
  if (!villa) {
    return null;
  }

  return (
    <>
      <section className="w-5/12 bg-white">
        <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
          <h2 className="mb-2 text-xl font-bold text-gray-900">EDIT VILLA</h2>
          <Formik
            initialValues={{
              id: villa?.id,
              name: villa?.name,
              area: villa?.area,
              price: villa?.price,
              capacity: villa?.capacity,
              type: villa?.type,
              poolArea: villa?.poolArea,
              floors: villa?.floors,
              standard: villa?.standard,
              description: villa?.description,
            }}
            onSubmit={(value, { setSubmitting }) => {
              setSubmitting(false);
              editVilla(value);
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .required("Required")
                .matches(/^[a-zA-Z-]+$/, "Invalid service name")
                .matches(/^Villa/, "Must start with Villa"),
              area: Yup.number()
                .required("Required")
                .min(1, "Must be greater than 0"),
              price: Yup.number()
                .required("Required")
                .min(1, "Must be greater than 0"),
              capacity: Yup.number()
                .required("Required")
                .min(1, "Must be greater than 0"),
              type: Yup.string().required("Required"),
              poolArea: Yup.number()
                .required("Required")
                .integer("Must be integer")
                .min(1, "Must be greater than 0"),
              floors: Yup.number()
                .required("Required")
                .integer("Must be integer")
                .min(1, "Must be greater than 0"),
              standard: Yup.string().required("Required"),
              description: Yup.string().required("Required"),
            })}
          >
            <Form>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Service Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type service name"
                  />
                  <ErrorMessage
                    component="small"
                    style={{ color: "red" }}
                    name="name"
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
                    component="small"
                    style={{ color: "red" }}
                    name="area"
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
                    component="small"
                    style={{ color: "red" }}
                    name="price"
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
                    component="small"
                    style={{ color: "red" }}
                    name="capacity"
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
                    name="type"
                    as="select"
                    id="type"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                  >
                    <option value="day">Day</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                  </Field>
                  <ErrorMessage
                    component="small"
                    style={{ color: "red" }}
                    name="type"
                  />
                </div>
                <div>
                  <label
                    htmlFor="poolArea"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Pool (m2)
                  </label>
                  <Field
                    type="number"
                    name="poolArea"
                    id="poolArea"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder={0}
                  />
                  <ErrorMessage
                    component="small"
                    style={{ color: "red" }}
                    name="poolArea"
                  />
                </div>
                <div>
                  <label
                    htmlFor="floors"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Floors
                  </label>
                  <Field
                    type="number"
                    name="floors"
                    id="floors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder={0}
                  />
                  <ErrorMessage
                    component="small"
                    style={{ color: "red" }}
                    name="floors"
                  />
                </div>
                <div className="col-span-2">
                  <div>
                    <label
                      htmlFor="standard"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Standard
                    </label>
                    <Field
                      as="select"
                      name="standard"
                      id="standard"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                    >
                      {standards?.map((standard) => {
                        return (
                          <option value={standard.name} key={standard.name}>
                            {standard.name}
                          </option>
                        );
                      })}
                    </Field>
                    <ErrorMessage
                      component="small"
                      style={{ color: "red" }}
                      name="standard"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Field
                    as="textarea"
                    name="description"
                    id="description"
                    rows={2}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your description here"
                    defaultValue={""}
                  />
                  <ErrorMessage
                    component="small"
                    style={{ color: "red" }}
                    name="description"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="mx-1 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
                >
                  Edit Villa
                </button>
                <button
                  type="reset"
                  className="mx-1  inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
                  onClick={() => navigate("/dashboard/services")}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default EditVilla;

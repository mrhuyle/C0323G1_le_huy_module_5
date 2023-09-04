import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import * as customerService from "../services/CustomerService";
import * as customerTypeService from "../services/CustomerTypeService";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditCustomer = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [customer, setCustomer] = useState();
  const [customerTypes, setCustomerTypes] = useState([]);

  useEffect(() => {
    getAllCustomerTypes();
    getCustomerById();
  }, []);

  const getAllCustomerTypes = async () => {
    const response = await customerTypeService.getAll();
    setCustomerTypes(response);
  };

  const getCustomerById = async () => {
    const response = await customerService.getCustomerById(params.id);
    setCustomer(response);
  };

  const editCustomer = async (customer) => {
    const response = await customerService.editCustomer(customer);
    if (response.status === 200) {
      Swal.fire({
        text: "Edit successfully",
        icon: "success",
        timer: 1500,
      });
    }
    navigate("/dashboard/customers");
  };

  if (!customer) {
    return null;
  }

  return (
    <section className="w-5/12 bg-white">
      <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
        <h2 className="mb-2 text-xl font-bold text-gray-900">EDIT CUSTOMER</h2>
        <Formik
          initialValues={{
            id: customer?.id,
            name: customer?.name,
            dob: customer?.dob,
            gender: customer?.gender,
            identity: customer?.identity,
            phone: customer?.phone,
            email: customer?.email,
            type: customer?.type,
            address: customer?.address,
          }}
          onSubmit={(value, { setSubmitting }) => {
            setSubmitting(false);
            editCustomer(value);
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required("Required")
              .matches(/^[A-Z][a-z]*([ ]+[A-Z][a-z]*)*$/, "Invalid name"),
            phone: Yup.string()
              .required("Required")
              .matches(/^(0|\+84)[0-9]{9}$/, "Invalid phone number"),
            identity: Yup.string()
              .required("Required")
              .matches(/^([0-9]{9}|[0-9]{12})$/, "Must be 9 or 12 numbers"),
            email: Yup.string()
              .required("Required")
              .matches(
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                "Invalid email"
              ),
            dob: Yup.date().required("Required"),
            address: Yup.string().required("Required"),
          })}
        >
          <Form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Customer Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
                  htmlFor="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Date of Birth
                </label>
                <Field
                  type="date"
                  name="dob"
                  id="dob"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="yyyy-mm-dd"
                />
                <ErrorMessage
                  name="dob"
                  component="small"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Gender
                </label>
                <Field
                  as="select"
                  name="gender"
                  id="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="small"
                  style={{ color: "red" }}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="identity"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ID number
                </label>
                <Field
                  type="text"
                  name="identity"
                  id="identity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Identity number"
                />
                <ErrorMessage
                  name="identity"
                  component="small"
                  style={{ color: "red" }}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone
                </label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="small"
                  style={{ color: "red" }}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="abc@abc.com"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Customer Type
                </label>
                <Field
                  name="type"
                  as="select"
                  id="type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                >
                  {customerTypes?.map((type) => {
                    return (
                      <option value={type.name} key={type.name}>
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
              <div className="col-span-2">
                <div>
                  <label
                    htmlFor="address"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Type customer address"
                  />
                  <ErrorMessage
                    name="address"
                    component="small"
                    style={{ color: "red" }}
                  />
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="mx-1 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
              >
                Add Customer
              </button>
              <button
                type="reset"
                className="mx-1  inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
                onClick={() => {
                  navigate("/dashboard/customers");
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default EditCustomer;

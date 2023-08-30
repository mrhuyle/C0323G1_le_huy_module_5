import { Formik, Field, ErrorMessage, Form } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import * as contractService from "../services/ContractService";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const EditContract = () => {
  const [contract, setContract] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getContractById();
  }, []);

  const getContractById = async () => {
    const contract = await contractService.getContractById(params.id);
    setContract(contract);
  };

  const editContract = async (contract) => {
    const response = await contractService.editContract(contract);
    console.log(response);
    if (response.status === 200) {
      Swal.fire({
        text: "Edit successfully",
        icon: "success",
      });
      navigate("/dashboard/contracts");
    } else {
      Swal.fire({
        text: "Edit failed",
        icon: "error",
      });
    }
  };
  if (!contract) {
    return null;
  }
  return (
    <section className="w-5/12 bg-white">
      <div className="px-4 py-8 mx-auto bg-green-100 shadow-lg">
        <h2 className="mb-2 text-xl font-bold text-gray-900">
          ADD NEW CONTRACT
        </h2>
        <Formik
          initialValues={{
            id: contract?.id,
            code: contract?.code,
            startDate: contract?.startDate,
            endDate: contract?.endDate,
            deposit: contract?.deposit,
            total: contract?.total,
          }}
          onSubmit={(value, { setSubmitting }) => {
            setSubmitting(false);
            editContract(value);
          }}
          validationSchema={Yup.object({
            code: Yup.string()
              .required("Required")
              .matches(/^C\d{4}$/, "Must CXXXX"),
            deposit: Yup.number()
              .required("Required")
              .positive("Must be greater than 0"),
            total: Yup.number()
              .required("Required")
              .positive("Must be greater than 0"),
          })}
        >
          <Form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Contract Code
                </label>
                <Field
                  type="text"
                  name="code"
                  id="code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type contract code"
                  disabled={true}
                />
                <ErrorMessage
                  component="small"
                  style={{ color: "red" }}
                  name="code"
                ></ErrorMessage>
              </div>
              <div className="w-full">
                <label
                  htmlFor="startDate"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Start Date
                </label>
                <Field
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="0"
                  disabled={true}
                />
                <ErrorMessage
                  component="small"
                  style={{ color: "red" }}
                  name="startDate"
                ></ErrorMessage>
              </div>
              <div className="w-full">
                <label
                  htmlFor="endDate"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  End Date
                </label>
                <Field
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="$"
                  disabled={true}
                />
                <ErrorMessage
                  component="small"
                  style={{ color: "red" }}
                  name="endDate"
                ></ErrorMessage>
              </div>
              <div className="w-full">
                <label
                  htmlFor="deposit"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Deposit
                </label>
                <Field
                  type="number"
                  name="deposit"
                  id="deposit"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="$"
                />
                <ErrorMessage
                  component="small"
                  style={{ color: "red" }}
                  name="deposit"
                ></ErrorMessage>
              </div>
              <div>
                <label
                  htmlFor="total"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Total
                </label>
                <Field
                  type="number"
                  name="total"
                  id="total"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="$"
                />
                <ErrorMessage
                  component="small"
                  style={{ color: "red" }}
                  name="total"
                ></ErrorMessage>
              </div>
            </div>
            <button
              type="submit"
              className="mx-1 inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
            >
              Edit contract
            </button>
            <button
              type="reset"
              className="mx-1  inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 "
              onClick={() => {
                navigate("/dashboard/contracts");
              }}
            >
              Cancel
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default EditContract;

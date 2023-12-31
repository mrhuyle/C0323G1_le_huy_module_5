import "./App.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import SweetAlert2 from "react-sweetalert2";

function App() {
  const [swalProps, setSwalProps] = useState({});
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          idCard: "",
          year: "",
          gender: "0",
          nationality: "",
          company: "",
          department: "",
          insurance: "",
          city: "",
          district: "",
          ward: "",
          address: "",
          phone: "",
          email: "",
          arrived: "",
          peopleHadCovid: "",
          peopleFromCovid: "",
          peopleHasIllness: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          idCard: Yup.string().required("Required"),
          year: Yup.number().min(1990, "Must be larger than 1990"),
          nationality: Yup.string().required("Required"),
          city: Yup.string().required("Required"),
          district: Yup.string().required("Required"),
          ward: Yup.string().required("Required"),
          address: Yup.string().required("Required"),
          phone: Yup.string().required("Required"),
          email: Yup.string()
            .required("Required")
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              "Invalid email"
            ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            setSwalProps({
              show: true,
              title: "Submit Successful",
              icon: "success",
            });
            resetForm({});
            console.log("Submit");
          }, 1000);
        }}
      >
        <Form>
          <h1>Health Declaration</h1>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <Field type="text" id="name" name="name" className="text_input" />
            <ErrorMessage
              name="name"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="idCard">ID Card</label>
          </div>
          <div>
            <Field
              type="text"
              id="idCard"
              name="idCard"
              className="text_input"
            />
            <ErrorMessage
              name="idCard"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="year">Year of Birth</label>
          </div>
          <div>
            <Field type="number" id="year" name="year" className="text_input" />
            <ErrorMessage
              name="year"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="gender">Gender: </label>
            <Field type="radio" name="gender" value="0" />
            <label>Male</label>
            <Field type="radio" name="gender" value="1" />
            <label>Female</label>
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
          </div>
          <div>
            <Field
              type="text"
              id="nationality"
              name="nationality"
              className="text_input"
            />
            <ErrorMessage
              name="nationality"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="company">Company</label>
          </div>
          <div>
            <Field
              type="text"
              id="company"
              name="company"
              className="text_input"
            />
          </div>
          <div>
            <label htmlFor="department">Department</label>
          </div>
          <div>
            <Field
              type="text"
              id="department"
              name="department"
              className="text_input"
            />
          </div>
          <div>
            <span>Have a insurance card?</span>
            <Field type="checkbox" name="insurance" value="haveInsurance" />
          </div>
          {/* Address */}
          <h2>Address</h2>
          <div>
            <label htmlFor="city">City</label>
          </div>
          <div>
            <Field type="text" id="city" name="city" className="text_input" />
            <ErrorMessage
              name="city"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="district">District</label>
          </div>
          <div>
            <Field
              type="text"
              id="district"
              name="district"
              className="text_input"
            />
            <ErrorMessage
              name="district"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="ward">Ward</label>
          </div>
          <div>
            <Field type="text" id="ward" name="ward" className="text_input" />
            <ErrorMessage
              name="ward"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="address">Address</label>
          </div>
          <div>
            <Field
              type="text"
              id="address"
              name="address"
              className="text_input"
            />
            <ErrorMessage
              name="address"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <Field type="text" id="phone" name="phone" className="text_input" />
            <ErrorMessage
              name="phone"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <Field type="text" id="email" name="email" className="text_input" />
            <ErrorMessage
              name="email"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          {/* Third section */}
          <div>
            <h2>
              In the past 14 days, which nations or regions have you arrived in?
            </h2>
            <Field
              as="textarea"
              name="arrived"
              id="arrived"
              cols="30"
              rows="10"
              className="text_input"
            ></Field>
          </div>
          <div>
            <h2>
              In the past 14 days, which kind of people have you contacted?
            </h2>
            <div>
              <Field type="checkbox" name="peopleHadCovid" />
              <span>People had Covid-19</span>
            </div>
            <div>
              <Field type="checkbox" name="peopleFromCovid" />
              <span>People from place has Covid-19</span>
            </div>
            <div>
              <Field type="checkbox" name="peopleHasIllness" />
              <span>People has illness</span>
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
      <SweetAlert2
        {...swalProps}
        onConfirm={() => {
          setSwalProps({});
        }}
      ></SweetAlert2>
    </>
  );
}

export default App;

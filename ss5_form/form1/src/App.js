import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SweetAlert2 from "react-sweetalert2";
import { useState } from "react";

function App() {
  const [swalProps, setSwalProps] = useState({});
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            console.log(values);
            setSwalProps({
              show: true,
              title: "Add contact successfully!!!",
              icon: "success",
            });
            resetForm({});
            console.log("Submit");
          }, 1000);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .required("Required")
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
              "Invalid email"
            ),
          phone: Yup.string().required("Required"),
        })}
      >
        <Form>
          <h1>Contact Form</h1>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <Field type="text" name="name" id="name" />
            <ErrorMessage
              name="name"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <Field type="text" name="email" id="email" />
            <ErrorMessage
              name="email"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <Field type="text" name="phone" id="phone" />
            <ErrorMessage
              name="phone"
              component="span"
              className="error"
            ></ErrorMessage>
          </div>
          <div>
            <label htmlFor="message">Message</label>
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              placeholder="Give additional information"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
      <SweetAlert2 {...swalProps} onConfirm={() => setSwalProps({})} />
    </>
  );
}

export default App;

import "./App.css";
import { Formik, Form } from "formik";
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
      >
        <Form>
          <h1>Contact Form</h1>
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
          </div>
          <div>
            <input type="text" name="phone" id="phone" />
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

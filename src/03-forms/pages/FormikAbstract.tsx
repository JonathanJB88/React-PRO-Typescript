import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MyInputText, MySelect } from '../components';

import '../styles/styles.css';

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <hr />

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required('First name is required')
            .max(15, 'Must have 15 characters or less'),
          lastName: Yup.string()
            .required('Last name is required')
            .max(15, 'Must have 15 characters or less'),
          email: Yup.string()
            .required('Email is required')
            .email('Must match a valid format'),
          terms: Yup.boolean().oneOf([true], 'Must accept terms'),
          jobType: Yup.string()
            .required('Must choose one job type')
            .notOneOf(['other'], 'This option is not allowed'),
        })}
      >
        {(formik) => (
          <Form>
            <MyInputText
              label="First Name"
              name="firstName"
              placeholder="First name..."
            />
            <br />

            <MyInputText
              label="Last Name"
              name="lastName"
              placeholder="Last name..."
            />
            <br />

            <MyInputText
              label="Email Address"
              name="email"
              placeholder="user@google.com"
              type="email"
            />
            <br />

            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>
            <br />

            <MyCheckbox label="Terms & Conditions" name="terms" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

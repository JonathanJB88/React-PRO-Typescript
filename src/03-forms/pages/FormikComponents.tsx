import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
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
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="span" />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="span" />
            <br />

            <label htmlFor="email">Email Address</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="span" />
            <br />

            <label htmlFor="jobType">Job Type</label>
            <Field name="jobType" as="select">
              <option value="">Select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="jobType" component="span" />
            <br />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>
            <ErrorMessage name="terms" component="span" />
            <br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

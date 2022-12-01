import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyInputText } from '../components';
import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <hr />

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name is required')
            .min(2, 'Must be 3 characters or more')
            .max(15, 'Must have 15 characters or less'),
          email: Yup.string()
            .required('Email is required')
            .email('Must match a valid format'),
          password1: Yup.string()
            .required('Password is required')
            .min(6, 'Must have 6 characters or more'),
          password2: Yup.string()
            .required('Password is required')
            .oneOf([Yup.ref('password1')], 'Passwords must match'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyInputText label="Name" name="name" placeholder="Jonathan" />

            <MyInputText
              label="Email"
              name="email"
              placeholder="john@google.com"
              type="email"
            />

            <MyInputText
              label="Password"
              name="password1"
              placeholder="********"
              type="password"
            />

            <MyInputText
              label="Confirm Password"
              name="password2"
              placeholder="********"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) errors.firstName = 'Required';
    if (firstName.length > 15)
      errors.firstName = 'Must be 15 characters or less';

    if (!lastName) errors.lastName = 'Required';
    if (lastName.length > 15) errors.lastName = 'Must be 15 characters or less';

    if (!email) errors.email = 'Required';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      errors.email = 'Invalid email address';

    return errors;
  };

  const {
    handleChange,
    handleSubmit,
    values: { firstName, lastName, email },
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: { firstName: '', lastName: '', email: '' },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  return (
    <div>
      <h1>Formik Basic</h1>
      <hr />

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}
        <br />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          value={email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

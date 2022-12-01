import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import {
  DynamicForm,
  FormikAbstract,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterFormikPage,
  RegisterPage,
} from '../03-forms/pages';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React-logo" />
            <ul>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Register Page
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-basic"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Formik Basic
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-yup"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Formik Yup
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-components"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Formik Components
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-abstract"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Formik Abstract
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/formik-register"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Formik Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dynamic-form"
                  className={({ isActive }) => (isActive ? 'nav-active' : '')}
                >
                  Dynamic Form
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/formik-basic" element={<FormikBasicPage />} />
            <Route path="/formik-yup" element={<FormikYupPage />} />
            <Route path="/formik-components" element={<FormikComponents />} />
            <Route path="/formik-abstract" element={<FormikAbstract />} />
            <Route path="/formik-register" element={<RegisterFormikPage />} />
            <Route path="/dynamic-form" element={<DynamicForm />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to="/register" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

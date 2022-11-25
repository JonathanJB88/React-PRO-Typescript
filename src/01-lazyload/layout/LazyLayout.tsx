import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { LazyPageOne, LazyPageThree, LazyPageTwo } from '../pages';

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy Layout</h1>

      <ul>
        <li>
          <NavLink
            to="lazy1"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy2"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="lazy3"
            className={({ isActive }) => (isActive ? 'nav-active' : '')}
          >
            Lazy 3
          </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={<LazyPageOne />} />
        <Route path="lazy2" element={<LazyPageTwo />} />
        <Route path="lazy3" element={<LazyPageThree />} />
        <Route path="/*" element={<Navigate to="lazy1" replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;

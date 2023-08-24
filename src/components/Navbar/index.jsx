import { NavLink } from "react-router-dom";
import "./index.scss";

const index = () => {
  return (
    <>
      <ul className="nav__list flex items-center justify-between gap-2">
        <li className="nav__item">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "item__link" : "active")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? " item__link" : "item__link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "item__link" : "active")}
          >
            Events
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? " item__link" : "active")}
          >
            Vacancy
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default index;

import { NavLink} from "react-router-dom";
import "./index.scss";
import { MdHome, MdEvent, MdGpsFixed, MdSwitchAccount } from "react-icons/md";
const index = () => {
  return (
    <>
      <ul
        className={`nav__list flex dark:bg-black bg-slate-200 items-center justify-between gap-1 `}
      >
        <li className="nav__item">
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "item__link " : "active")}
          >
            <MdHome />
            Home
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            to={"/events"}
            className={({ isActive }) => (isActive ? "item__link " : "active")}
          >
            <MdEvent />
            Events
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink
            to={"/locations"}
            className={({ isActive }) => (isActive ? "item__link " : "active")}
          >
            <MdGpsFixed />
            Locations
          </NavLink>
        </li>
        <li className="nav__item login-mobile">
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? "item__link " : "active")}
          >
            <MdSwitchAccount />
            Exit
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default index;

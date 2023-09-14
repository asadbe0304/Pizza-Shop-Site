import { NavLink } from "react-router-dom";
import "./index.scss";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { modalMenuClose } from "../../slice/auth";
const index = () => {
  const { menu } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const close = () => {
    dispatch(modalMenuClose());
  };
  return (
    <>
      <ul
        className={`nav__list flex items-center justify-between gap-2 ${
          menu ? "none" : "show"
        }`}
      >
        <li className="nav-item">
          <MdClose
            width={"80px"}
            height={"80px"}
            className="text-white close_icon hover:cursor-pointer"
            onClick={close}
          />
        </li>
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
        <li className="nav__item login_btn">
          <NavLink to={"login"}>
            <Button text={"Login"} />
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default index;

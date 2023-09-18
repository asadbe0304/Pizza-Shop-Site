import { Link, NavLink } from "react-router-dom";
import { BsTelegram, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import "./index.scss";

const index = () => {
  return (
    <>
      <footer className="mt-16">
        <div className="container">
          <div className="footer py-8 flex-col items-start">
            <div className="footer__top flex w-full justify-between ">
              <div>
                <Link to="/">
                  <strong className="text-2xl logo">Loook</strong>
                </Link>
              </div>
              <ul className="xl:flex sm:flex md:flex lg:flex 2xl:flex gap-3 ">
                <li>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? "item__link" : "active"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive ? "item__link" : "active"
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/events"}
                    className={({ isActive }) =>
                      isActive ? "item__link" : "active"
                    }
                  >
                    Events
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/vacansy"}
                    className={({ isActive }) =>
                      isActive ? "item__link" : "active"
                    }
                  >
                    Vacansy
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="footer__bottom mt-4 xl:flex sm:flex md:flex lg:flex 2xl:flex justify-between items-center">
              <div>
                <a className="text-white" href="tel:+998932502719">
                  +998 93 250 27 19
                </a>
              </div>
              <div className="flex items-center justify-between gap-3">
                <a href="http://devminds.uz" target="blank">
                  <BsTelegram className="w-7 h-7 text-orange-600" />
                </a>
                <a href="http://devminds.uz" target="blank">
                  <BsFacebook className="w-7 h-7 text-orange-600" />
                </a>
                <a href="http://devminds.uz" target="blank">
                  <AiFillInstagram className=" w-8 h-8 text-orange-600" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;

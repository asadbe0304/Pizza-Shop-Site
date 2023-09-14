import "./index.scss";
import Logo from "./Logo";
import Btn from "./../UI/Button";
import Navbar from "./../Navbar";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { modalMenu } from "../../slice/auth";
import { useDispatch } from "react-redux";
const index = () => {
  const [sticky, setSticky] = useState("");
  const dispatch = useDispatch();
  const open = () => {
    dispatch(modalMenu());
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 152 ? setSticky("sticky") : setSticky("");
    }
  };

  return (
    <>
      <header className={`w-full bg-black ${sticky}`}>
        <div className="container">
          <div className="header flex  items-center justify-between w-full">
            <Logo />
            <Navbar />
            <div className="order__cart flex items-center gap-3">
              <Link to={"/login"} className="header__login--btn">
                <Btn text={"Login"} />
              </Link>
              <Link className="order__cart--link hover:scale-110">
                <FiShoppingBag
                  width={"60px"}
                  height={"60px"}
                  className="text-white"
                />
              </Link>
              <div className="order__cart--link ham__menu" onClick={open}>
                <FiMenu
                  width={"60px"}
                  height={"60px"}
                  onClick={open}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
